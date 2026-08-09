"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageProvider";

const stepIcons = [
  // 1. Download app — phone with downward arrow
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" key="0">
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M12 8v6" />
      <path d="m9.5 12 2.5 2.5L14.5 12" />
    </svg>
  ),
  // 2. Create account — person with plus
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" key="1">
      <circle cx="10" cy="8" r="4" />
      <path d="M2 21c0-4 3.5-7 8-7" />
      <path d="M19 14v6" />
      <path d="M16 17h6" />
    </svg>
  ),
  // 3. Deposit currency — wallet with downward arrow
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" key="2">
      <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M16 13h2" />
      <path d="M12 2v6" />
      <path d="m9.5 6 2.5 2.5L14.5 6" />
    </svg>
  ),
  // 4. Send remittance — paper plane
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" key="3">
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4z" />
    </svg>
  ),
];

export default function HowItWorks() {
  const { t } = useLanguage();
  const h = t.how;

  return (
    <section id="how" className="bg-brand-soft/40 py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            {h.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {h.title}
          </h2>
          <p className="mt-4 text-slate-600">{h.description}</p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {h.steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="absolute -top-3 left-6 inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow">
                {i + 1}
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <span className="block h-6 w-6">{stepIcons[i]}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{s.text}</p>
            </li>
          ))}
        </ol>

        <div
          id="download"
          className="mx-auto mt-16 flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-brand-soft bg-white p-8 text-center shadow-sm sm:flex-row sm:text-left"
        >
          <div className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-2xl bg-brand-soft">
            <Image
              src="/hometown_icon.png"
              alt=""
              width={62}
              height={101}
              className="h-10 w-auto select-none"
              aria-hidden
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900">{h.ctaTitle}</h3>
            <p className="mt-1 text-slate-600">{h.ctaDescription}</p>
          </div>
          <a
            href="/ace_transfer_v5.apk"
            download
            className="btn-primary inline-flex flex-shrink-0"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M12 3v12" />
              <path d="m6 9 6 6 6-6" />
              <path d="M5 21h14" />
            </svg>
            {h.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
