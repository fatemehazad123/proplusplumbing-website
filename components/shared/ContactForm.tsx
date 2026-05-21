'use client';

import { AnimatePresence, motion } from 'motion/react';
import type { ChangeEvent, FocusEvent, FormEvent } from 'react';
import { useState } from 'react';

const PROJECT_TYPES = [
  'Custom Home Plumbing',
  'Major Renovation',
  'Radiant Floor Heating',
  'Snow Melting System',
  'Subdivision or Multi-Unit',
  'Other',
];

const PROJECT_STAGES = [
  'Planning',
  'Design',
  'Permitting',
  'Ready to build',
  'In progress',
  'Just exploring',
];

const TIMELINES = ['ASAP', '1–3 months', '3–6 months', '6+ months', 'Just exploring'];

const MAX_MESSAGE = 1000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Fields = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  projectStage: string;
  timeline: string;
  message: string;
  company_website: string;
};

const INITIAL: Fields = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  location: '',
  projectStage: '',
  timeline: '',
  message: '',
  company_website: '',
};

type FieldErrors = Partial<Record<keyof Fields, string>>;

function validate(fields: Fields): FieldErrors {
  const errors: FieldErrors = {};
  if (!fields.name.trim()) errors.name = 'Required.';
  if (!fields.email.trim()) errors.email = 'Required.';
  else if (!EMAIL_RE.test(fields.email.trim()))
    errors.email = 'Please enter a valid email.';
  if (!fields.phone.trim()) errors.phone = 'Required.';
  if (!fields.projectType) errors.projectType = 'Select an option.';
  if (!fields.location.trim()) errors.location = 'Required.';
  if (fields.message.length > MAX_MESSAGE) errors.message = 'Too long.';
  return errors;
}

const inputBase =
  'w-full rounded-sm border border-line bg-white px-4 py-3 text-[16px] text-ink transition-colors duration-200 placeholder:text-grey-1 hover:border-grey-1 focus:border-navy focus:outline-none focus-visible:[outline-color:#0F1B45] md:text-[15px]';

const labelBase =
  'block font-mono text-[11px] uppercase tracking-[0.15em] text-grey-1 mb-2';

const errorBase = 'mt-1 text-[12px] text-red-brand';

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(INITIAL);
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const errors = validate(fields);

  const setField =
    <K extends keyof Fields>(key: K) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFields((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const markTouched =
    (key: keyof Fields) =>
    (_e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setTouched((prev) => ({ ...prev, [key]: true }));
    };

  const showError = (key: keyof Fields) => touched[key] && errors[key];

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      phone: true,
      projectType: true,
      location: true,
    });
    if (Object.keys(errors).length > 0) return;
    setState('submitting');
    setErrorMessage(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? 'Something went wrong.');
      }
      setState('success');
    } catch (err) {
      setState('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  return (
    <AnimatePresence mode="wait">
      {state === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="rounded-sm border border-line bg-white p-10"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey-1">
            <span className="mr-3 inline-block h-px w-6 align-middle bg-red-brand" />
            Request received
          </div>
          <h3 className="mt-5 font-display text-[clamp(28px,3vw,40px)] font-light leading-tight tracking-[-0.02em] text-ink">
            Thank you. We&rsquo;ll be in touch within{' '}
            <em className="italic text-red-brand">one business day</em>.
          </h3>
          <p className="mt-5 max-w-[520px] text-[15px] leading-[1.6] text-grey-1">
            You can also reach us directly at{' '}
            <a
              href="tel:+16475187787"
              data-cursor="hover"
              className="border-b border-ink/30 pb-0.5 text-ink hover:border-ink"
            >
              (647) 518-7787
            </a>{' '}
            if you need an immediate response.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onSubmit={onSubmit}
          noValidate
          className="grid gap-6 md:grid-cols-2"
        >
          {state === 'error' && errorMessage && (
            <div
              role="alert"
              className="md:col-span-2 rounded-sm border border-red-brand/40 bg-red-brand/5 p-4 text-[14px] text-ink"
            >
              {errorMessage}
            </div>
          )}

          <div>
            <label htmlFor="name" className={labelBase}>
              Name <span className="text-red-brand">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={fields.name}
              onChange={setField('name')}
              onBlur={markTouched('name')}
              aria-invalid={Boolean(showError('name'))}
              aria-describedby={showError('name') ? 'name-error' : undefined}
              data-cursor="hover"
              className={`${inputBase} ${showError('name') ? 'border-red-brand' : ''}`}
            />
            {showError('name') && (
              <p id="name-error" className={errorBase}>
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelBase}>
              Email <span className="text-red-brand">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={fields.email}
              onChange={setField('email')}
              onBlur={markTouched('email')}
              aria-invalid={Boolean(showError('email'))}
              aria-describedby={showError('email') ? 'email-error' : undefined}
              data-cursor="hover"
              className={`${inputBase} ${showError('email') ? 'border-red-brand' : ''}`}
            />
            {showError('email') && (
              <p id="email-error" className={errorBase}>
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className={labelBase}>
              Phone <span className="text-red-brand">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={fields.phone}
              onChange={setField('phone')}
              onBlur={markTouched('phone')}
              aria-invalid={Boolean(showError('phone'))}
              aria-describedby={showError('phone') ? 'phone-error' : undefined}
              data-cursor="hover"
              className={`${inputBase} ${showError('phone') ? 'border-red-brand' : ''}`}
            />
            {showError('phone') && (
              <p id="phone-error" className={errorBase}>
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="projectType" className={labelBase}>
              Project type <span className="text-red-brand">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              value={fields.projectType}
              onChange={setField('projectType')}
              onBlur={markTouched('projectType')}
              aria-invalid={Boolean(showError('projectType'))}
              aria-describedby={showError('projectType') ? 'projectType-error' : undefined}
              data-cursor="hover"
              className={`${inputBase} ${showError('projectType') ? 'border-red-brand' : ''}`}
            >
              <option value="">Select…</option>
              {PROJECT_TYPES.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {showError('projectType') && (
              <p id="projectType-error" className={errorBase}>
                {errors.projectType}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label htmlFor="location" className={labelBase}>
              Property location <span className="text-red-brand">*</span>
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              placeholder="City or neighbourhood"
              value={fields.location}
              onChange={setField('location')}
              onBlur={markTouched('location')}
              aria-invalid={Boolean(showError('location'))}
              aria-describedby={showError('location') ? 'location-error' : undefined}
              data-cursor="hover"
              className={`${inputBase} ${showError('location') ? 'border-red-brand' : ''}`}
            />
            {showError('location') && (
              <p id="location-error" className={errorBase}>
                {errors.location}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="projectStage" className={labelBase}>
              Project stage
            </label>
            <select
              id="projectStage"
              name="projectStage"
              value={fields.projectStage}
              onChange={setField('projectStage')}
              data-cursor="hover"
              className={inputBase}
            >
              <option value="">Select…</option>
              {PROJECT_STAGES.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className={labelBase}>
              Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={fields.timeline}
              onChange={setField('timeline')}
              data-cursor="hover"
              className={inputBase}
            >
              <option value="">Select…</option>
              {TIMELINES.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className={labelBase}>
              Tell us about your project
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={MAX_MESSAGE}
              value={fields.message}
              onChange={setField('message')}
              onBlur={markTouched('message')}
              data-cursor="hover"
              className={`${inputBase} resize-none`}
            />
            <div className="mt-1 flex justify-end font-mono text-[11px] tracking-[0.1em] text-grey-1">
              {fields.message.length} / {MAX_MESSAGE}
            </div>
          </div>

          {/* Honeypot — hidden from humans, visible to bots. */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company_website">Company website (leave blank)</label>
            <input
              id="company_website"
              name="company_website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={fields.company_website}
              onChange={setField('company_website')}
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={state === 'submitting'}
              data-cursor="hover"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-red-brand px-10 py-5 text-[13px] font-medium uppercase tracking-[0.12em] text-white transition-opacity duration-200 hover:opacity-90 disabled:cursor-progress disabled:opacity-70 md:w-auto"
            >
              {state === 'submitting' && (
                <span
                  aria-hidden="true"
                  className="h-3 w-3 animate-spin rounded-full border-2 border-white/30 border-t-white"
                />
              )}
              {state === 'submitting' ? 'Sending…' : 'Send request'}
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
