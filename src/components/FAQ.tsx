"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageProvider";

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);
  const f = t.faq;

  return (
    <section id="faq" className="bg-white py-20">
      <div className="container-page max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            {f.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {f.title}
          </h2>
          <p className="mt-4 text-slate-600">
            {f.contactPrefix}
            <a
              href="mailto:support@acetransfer.com"
              className="font-semibold text-brand"
            >
              support@acetransfer.com
            </a>
            {f.contactSuffix}
          </p>
        </div>

        <ul className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {f.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <li key={it.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-slate-900 sm:text-base">
                    {it.q}
                  </span>
                  <span
                    className={`grid h-7 w-7 flex-shrink-0 place-items-center rounded-full border border-slate-200 text-brand transition-transform ${
                      isOpen ? "rotate-45 bg-brand-soft" : ""
                    }`}
                    aria-hidden
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-slate-600">{it.a}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
