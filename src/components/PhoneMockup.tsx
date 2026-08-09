"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageProvider";

export default function PhoneMockup() {
  const { t } = useLanguage();
  const p = t.phone;

  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px]">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-brand-soft blur-2xl" />

      <Image
        src="/phone.png"
        alt={p.brand}
        width={403}
        height={862}
        priority
        className="h-auto w-full select-none drop-shadow-2xl"
      />
    </div>
  );
}
