import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit } from '@/lib/rate-limit';

// TODO Phase 3: Replace this manual-relay implementation with a managed
// mailing-list provider (Resend Audiences, Mailchimp, or ConvertKit) so
// subscribers go into a real list with double opt-in and unsubscribe links.
// Today this simply emails info@proplusplumbing.com on every signup; the
// ProPlus team adds the address to their list by hand.

const FROM = 'ProPlus Plumbing Website <onboarding@resend.dev>';
const TO = 'info@proplusplumbing.com';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const HOUR_MS = 60 * 60 * 1000;
const MAX_EMAIL = 254;

type Payload = {
  email?: string;
  company_name?: string;
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

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot: silently succeed for bots.
  if (body.company_name && body.company_name.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const ip = clientIp(req);
  const limit = rateLimit(`newsletter:${ip}`, 3, HOUR_MS);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: 'Too many signups from this address. Try again later.' },
      { status: 429 },
    );
  }

  const email = (body.email ?? '').trim();
  if (!email || email.length > MAX_EMAIL || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Newsletter service not configured.' },
      { status: 503 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const timestamp = new Date().toISOString();
  const html = `<!doctype html><html><body style="margin:0;background:#FAFAF7;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAFAF7;padding:32px 16px">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#FFFFFF;border:1px solid #E5E3DD;border-radius:4px;overflow:hidden">
        <tr><td style="padding:24px 32px;background:#0F1B45;color:#FFFFFF">
          <div style="font-family:monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.6);margin-bottom:6px">New newsletter signup</div>
          <div style="font-size:20px;letter-spacing:-0.01em">ProPlus Plumbing</div>
        </td></tr>
        <tr><td style="padding:24px 32px;font-size:15px;color:#0A0A0A;line-height:1.6">
          <p style="margin:0 0 12px"><strong>Email:</strong> ${escape(email)}</p>
          <p style="margin:0;color:#6B6B68;font-size:13px">${escape(timestamp)}</p>
        </td></tr>
        <tr><td style="padding:16px 32px;background:#F4F2EC;font-size:12px;color:#6B6B68">Add this address to your newsletter list manually until Phase 3 list management is wired up.</td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: 'New newsletter signup',
    html,
  });

  if (error) {
    console.error('Resend error (newsletter)', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
