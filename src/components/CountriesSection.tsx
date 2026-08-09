"use client";

import { useLanguage } from "@/lib/LanguageProvider";
import {
  RATE_MARKUP_BDT,
  type RateMap,
  type SupportedCurrency,
} from "@/lib/rates";

const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"] as const;

function formatBdt(amount: number, lang: "en" | "bn"): string {
  const fixed = amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  if (lang === "bn") {
    const localized = fixed.replace(/[0-9]/g, (d) => BN_DIGITS[Number(d)]);
    return `৳ ${localized}`;
  }
  return `৳ ${fixed}`;
}

export default function CountriesSection({ rates }: { rates: RateMap }) {
  const { t, lang } = useLanguage();
  const c = t.countries;

  return (
    <section id="countries" className="bg-white py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            {c.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {c.title}
          </h2>
          <p className="mt-4 text-slate-600">{c.description}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {c.list.map((item) => {
            const ccy = item.currency as SupportedCurrency;
            const market = rates[ccy];
            const display =
              typeof market === "number"
                ? formatBdt(market + RATE_MARKUP_BDT, lang)
                : "—";

            return (
              <div
                key={item.country}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-soft hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl" aria-hidden>
                    {item.flag}
                  </span>
                  <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-semibold text-brand-dark">
                    {item.currency} → BDT
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {item.country}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{c.sendTo}</p>
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <p className="text-xs text-muted">
                    {c.rateToday}{" "}
                    <span aria-hidden className="mr-0.5 text-sm">
                      {item.flag}
                    </span>
                    {item.currency}
                    <span className="text-slate-400"> · </span>
                    <span className="font-medium text-slate-600">
                      {item.currencyName}
                    </span>
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    {display}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted">{c.indicative}</p>
      </div>
    </section>
  );
}
