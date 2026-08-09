"use client";

import Logo from "./Logo";
import { useLanguage } from "@/lib/LanguageProvider";

const socialIcons = [
  (
    <svg viewBox="0 0 24 24" fill="currentColor" key="fb">
      <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.75 8.43-4.91 8.43-9.93z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="currentColor" key="yt">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.6 15.5V8.5l6.4 3.5-6.4 3.5z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" key="ig">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  ),
];

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-md text-sm text-slate-600">{f.about}</p>
            <p className="mt-4 text-sm text-slate-600">
              {f.contactLabel}
              <a
                href="mailto:support@acetransfer.com"
                className="font-semibold text-brand"
              >
                support@acetransfer.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">
              {f.helpHeading}
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {f.helpItems.map((item) => {
                const isExternal = /^https?:\/\//.test(item.href);
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="hover:text-brand"
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">
              {f.followHeading}
            </h4>
            <ul className="mt-4 flex items-center gap-3">
              {f.socialLabels.map((label, i) => (
                <li key={label}>
                  <a
                    href="#"
                    aria-label={label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-brand hover:text-brand"
                  >
                    <span className="block h-4 w-4">{socialIcons[i]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>{f.copyright(new Date().getFullYear())}</p>
          <p>{f.license}</p>
        </div>
      </div>
    </footer>
  );
}
