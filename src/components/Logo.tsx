"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageProvider";

export default function Logo({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <Link
      href="/"
      aria-label={t.logo.name}
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/assets/logo.png"
        alt={t.logo.name}
        width={292}
        height={101}
        priority
        className="h-9 w-auto select-none"
      />
    </Link>
  );
}
