"use client";

import PhoneMockup from "./PhoneMockup";
import { useLanguage } from "@/lib/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,var(--brand-soft),transparent_55%),radial-gradient(circle_at_bottom_left,var(--accent-soft),transparent_45%)]"
      />

      <div className="container-page grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white/70 px-3 py-1 text-xs font-semibold text-brand-dark">
            <span className="h-2 w-2 rounded-full bg-brand" />
            {t.hero.badge}
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            {t.hero.titleBefore}
            <span className="text-brand">{t.hero.titleHighlight}</span>
            {t.hero.titleAfter}
          </h1>

          <p className="mt-5 max-w-xl text-lg text-slate-600">
            {t.hero.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="/ace_money_v2.apk" download className="btn-primary">
              {t.hero.downloadCta}
            </a>
            <a href="#how" className="btn-ghost">
              {t.hero.howCta}
            </a>
          </div>

          <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-muted">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M12 3v12" />
              <path d="m6 9 6 6 6-6" />
              <path d="M5 21h14" />
            </svg>
            {t.hero.apkInfo}
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-100 pt-6">
            {t.hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs uppercase tracking-widest text-muted">
                  {s.label}
                </dt>
                <dd className="text-2xl font-bold text-slate-900">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
