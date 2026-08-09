"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useLanguage } from "@/lib/LanguageProvider";
import { LANGUAGES } from "@/lib/i18n";

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#countries", label: t.nav.countries },
    { href: "#how", label: t.nav.how },
    { href: "#faq", label: t.nav.faq },
    { href: "#download", label: t.nav.download },
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center rounded-full border border-slate-200 p-0.5 text-xs font-semibold sm:flex">
            {LANGUAGES.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`rounded-full px-3 py-1 transition ${
                  lang === code
                    ? "bg-brand text-white"
                    : "text-slate-600 hover:text-brand"
                }`}
                aria-pressed={lang === code}
              >
                {label}
              </button>
            ))}
          </div>

          <a
            href="/ace_transfer_v5.apk"
            download
            className="btn-primary hidden md:inline-flex"
          >
            {t.nav.downloadApp}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-brand-soft hover:text-brand md:hidden"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <>
          <div
            onClick={close}
            aria-hidden
            className="fixed inset-x-0 bottom-0 top-16 z-30 bg-slate-900/40 backdrop-blur-sm md:hidden"
          />
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-16 z-40 border-b border-slate-100 bg-white shadow-lg md:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-soft hover:text-brand"
                  onClick={close}
                >
                  {l.label}
                </a>
              ))}

              <div className="mt-2 flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                  {t.nav.language}
                </span>
                <div className="flex items-center rounded-full border border-slate-200 p-0.5 text-xs font-semibold">
                  {LANGUAGES.map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => setLang(code)}
                      className={`rounded-full px-3 py-1 transition ${
                        lang === code
                          ? "bg-brand text-white"
                          : "text-slate-600 hover:text-brand"
                      }`}
                      aria-pressed={lang === code}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="/ace_transfer_v5.apk"
                download
                className="btn-primary mt-3"
                onClick={close}
              >
                {t.nav.downloadApp}
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
