import type { Metadata } from "next";
import localFont from "next/font/local";
import { LanguageProvider } from "@/lib/LanguageProvider";
import "./globals.css";

const adorNoirrit = localFont({
  src: [
    {
      path: "../../public/fonts/AdorNoirrit-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/AdorNoirrit-ExtraLight-Italic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/AdorNoirrit-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/AdorNoirrit-Light Italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/AdorNoirrit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/AdorNoirrit-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/AdorNoirrit-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/AdorNoirrit-SemiBold-Italic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/AdorNoirrit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/AdorNoirrit-Bold-Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-ador-noirrit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ace Money Transfer — দ্রুত ও নিরাপদে বাংলাদেশে রেমিট্যান্স পাঠান",
  description:
    "সিঙ্গাপুর, সংযুক্ত আরব আমিরাত, সৌদি আরব, মালয়েশিয়া, কাতার, কুয়েত, ওমান, বাহরাইন, যুক্তরাজ্য ও যুক্তরাষ্ট্র থেকে দেশে টাকা পাঠান। বাজারের সেরা রেট, কম ফি এবং বিকাশ, নগদ ও ব্যাংক অ্যাকাউন্টে তাৎক্ষণিক ডেলিভারি।",
  keywords: [
    "বাংলাদেশে রেমিট্যান্স",
    "বাংলাদেশে টাকা পাঠান",
    "Ace Money Transfer রেমিট্যান্স",
    "বিকাশ ট্রান্সফার",
    "নগদ ট্রান্সফার",
    "প্রবাসী বাংলাদেশী মানি ট্রান্সফার",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${adorNoirrit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
