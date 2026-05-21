'use client';

import { AnimatePresence, motion } from 'motion/react';
import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Variant = 'dark' | 'light';

const STYLES: Record<
  Variant,
  {
    input: string;
    inputError: string;
    success: string;
    errorText: string;
  }
> = {
  dark: {
    input:
      'border bg-white/[0.04] text-white placeholder:text-white/40 focus:bg-white/[0.08] hover:border-white/40 focus:border-white/60 border-white/20',
    inputError: 'border-red-brand',
    success: 'text-white',
    errorText: 'text-red-brand',
  },
  light: {
    input:
      'border bg-white text-ink placeholder:text-grey-1 focus:bg-white hover:border-grey-1 focus:border-navy border-line',
    inputError: 'border-red-brand',
    success: 'text-ink',
    errorText: 'text-red-brand',
  },
};

export function NewsletterForm({ variant = 'dark' }: { variant?: Variant }) {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle',
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const styles = STYLES[variant];

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setState('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!EMAIL_RE.test(trimmed)) {
      setState('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setState('submitting');
    setErrorMessage(null);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, company_name: honeypot }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? 'Subscription failed.');
      }
      setState('success');
    } catch (err) {
      setState('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Subscription failed.',
      );
    }
  };

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (state === 'error') {
      setState('idle');
      setErrorMessage(null);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {state === 'success' ? (
        <motion.p
          key="success"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          className={`text-[14px] leading-[1.5] ${styles.success}`}
        >
          Thanks — you&rsquo;re on the list.
        </motion.p>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onSubmit={onSubmit}
          noValidate
          className="flex flex-col gap-3"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            value={email}
            onChange={onEmailChange}
            data-cursor="hover"
            aria-invalid={state === 'error'}
            aria-describedby={state === 'error' ? 'newsletter-error' : undefined}
            className={`w-full rounded-sm px-3 py-2.5 text-[16px] transition-colors duration-200 focus:outline-none md:text-[14px] ${styles.input} ${
              state === 'error' ? styles.inputError : ''
            }`}
          />

          {/* Honeypot — hidden from humans, visible to bots. */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="newsletter-company">Company name (leave blank)</label>
            <input
              id="newsletter-company"
              name="company_name"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={state === 'submitting'}
            data-cursor="hover"
            className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-red-brand px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.12em] text-white transition-opacity duration-200 hover:opacity-90 disabled:cursor-progress disabled:opacity-70"
          >
            {state === 'submitting' && (
              <span
                aria-hidden="true"
                className="h-3 w-3 animate-spin rounded-full border-2 border-white/30 border-t-white"
              />
            )}
            {state === 'submitting' ? 'Subscribing…' : 'Subscribe'}
          </button>

          {state === 'error' && errorMessage && (
            <p id="newsletter-error" className={`text-[12px] ${styles.errorText}`}>
              {errorMessage}
            </p>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
