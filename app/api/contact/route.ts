import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit } from '@/lib/rate-limit';

// TODO: Once proplusplumbing.com is verified in Resend, change `from` to
// "ProPlus Plumbing <noreply@proplusplumbing.com>" and remove this comment.
const FROM = 'ProPlus Plumbing Website <onboarding@resend.dev>';
const TO = 'info@proplusplumbing.com';

const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_PHONE = 40;
const MAX_LOCATION = 120;
const MAX_MESSAGE = 1000;
const HOUR_MS = 60 * 60 * 1000;

const ALLOWED_PROJECT_TYPES = new Set([
  'Custom Home Plumbing',
  'Major Renovation',
  'Radiant Floor Heating',
  'Snow Melting System',
  'Subdivision or Multi-Unit',
  'Other',
]);

const ALLOWED_PROJECT_STAGES = new Set([
  '',
  'Planning',
  'Design',
  'Permitting',
  'Ready to build',
  'In progress',
  'Just exploring',
]);

const ALLOWED_TIMELINES = new Set([
  '',
  'ASAP',
  '1–3 months',
  '3–6 months',
  '6+ months',
  'Just exploring',
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  location?: string;
  projectStage?: string;
  timeline?: string;
  message?: string;
  company_website?: string;
};

function clientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]!.trim();
  return req.headers.get('x-real-ip') ?? 'unknown';
}

function escape(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function row(label: string, value: string): string {
  return `<tr><td style="padding:10px 16px;border-bottom:1px solid #E5E3DD;font-family:monospace;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#6B6B68;width:160px;vertical-align:top">${escape(label)}</td><td style="padding:10px 16px;border-bottom:1px solid #E5E3DD;font-size:15px;color:#0A0A0A;line-height:1.5">${escape(value)}</td></tr>`;
}

function buildHtml(p: Required<Omit<Payload, 'company_website'>>): string {
  return `<!doctype html><html><body style="margin:0;background:#FAFAF7;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAFAF7;padding:32px 16px">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#FFFFFF;border:1px solid #E5E3DD;border-radius:4px;overflow:hidden">
        <tr><td style="padding:32px 32px 24px;background:#0F1B45;color:#FFFFFF">
          <div style="font-family:monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.6);margin-bottom:8px">New consultation request</div>
          <div style="font-size:22px;letter-spacing:-0.01em">ProPlus Plumbing</div>
        </td></tr>
        <tr><td>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row('Name', p.name)}
            ${row('Email', p.email)}
            ${row('Phone', p.phone)}
            ${row('Project type', p.projectType)}
            ${row('Location', p.location)}
            ${p.projectStage ? row('Project stage', p.projectStage) : ''}
            ${p.timeline ? row('Timeline', p.timeline) : ''}
            ${p.message ? `<tr><td colspan="2" style="padding:16px;font-family:monospace;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#6B6B68">Message</td></tr><tr><td colspan="2" style="padding:0 16px 24px;font-size:15px;color:#0A0A0A;line-height:1.6;white-space:pre-wrap">${escape(p.message)}</td></tr>` : ''}
          </table>
        </td></tr>
        <tr><td style="padding:16px 32px;background:#F4F2EC;font-size:12px;color:#6B6B68">Sent from the proplusplumbing.com contact form.</td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot: silently succeed so bots get a 200 but no email is sent.
  if (body.company_website && body.company_website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const ip = clientIp(req);
  const limit = rateLimit(`contact:${ip}`, 5, HOUR_MS);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Try again later.' },
      { status: 429 },
    );
  }

  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const phone = (body.phone ?? '').trim();
  const projectType = (body.projectType ?? '').trim();
  const location = (body.location ?? '').trim();
  const projectStage = (body.projectStage ?? '').trim();
  const timeline = (body.timeline ?? '').trim();
  const message = (body.message ?? '').trim();

  const errors: Record<string, string> = {};
  if (!name || name.length > MAX_NAME) errors.name = 'Required.';
  if (!email || email.length > MAX_EMAIL || !EMAIL_RE.test(email))
    errors.email = 'Valid email required.';
  if (!phone || phone.length > MAX_PHONE) errors.phone = 'Required.';
  if (!projectType || !ALLOWED_PROJECT_TYPES.has(projectType))
    errors.projectType = 'Select an option.';
  if (!location || location.length > MAX_LOCATION) errors.location = 'Required.';
  if (!ALLOWED_PROJECT_STAGES.has(projectStage))
    errors.projectStage = 'Invalid value.';
  if (!ALLOWED_TIMELINES.has(timeline)) errors.timeline = 'Invalid value.';
  if (message.length > MAX_MESSAGE) errors.message = 'Too long.';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Email service not configured.' },
      { status: 503 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = buildHtml({
    name,
    email,
    phone,
    projectType,
    location,
    projectStage,
    timeline,
    message,
  });

  const subject = `New consultation request: ${name} — ${projectType}`;

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject,
    html,
  });

  if (error) {
    console.error('Resend error', error);
    return NextResponse.json(
      { error: 'Failed to send. Please try again or call us.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
