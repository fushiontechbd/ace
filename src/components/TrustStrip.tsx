"use client";

import { useLanguage } from "@/lib/LanguageProvider";

export default function TrustStrip() {
  const { t } = useLanguage();
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="container-page grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {t.trust.map((it) => (
          <div key={it.label} className="flex items-start gap-3">
            <span className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900">{it.label}</p>
              <p className="text-xs text-slate-600">{it.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
