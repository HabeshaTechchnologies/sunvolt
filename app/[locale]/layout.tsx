// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import ClientStyleLoader from "@/components/ClientStyleLoader";

import "../globals.css";

// CSS
import "@/assets/css/vendor/bootstrap.min.css";
import "@/assets/css/style.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Sunvolt",
  description:
    "Sunvolt offers premium tire and cable solutions with supply, installation, and maintenance services for industrial, commercial, and utility sectors.",
  openGraph: {
    title: "Sunvolt",
    description:
      "Sunvolt offers premium tire and cable solutions with supply, installation, and maintenance services for industrial, commercial, and utility sectors.",
    url: "https://www.sunvolt.com",
    siteName: "Sunvolt",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ClientStyleLoader />
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>

        {/* Critical JS */}
        <Script
          src="/assets/js/plugins/jquery.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/bootstrap.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/vendor/waw.js" strategy="afterInteractive" />

        {/* Non-critical JS (lazy load after page idle) */}
        <Script src="/assets/js/vendor/jqueryui.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/counter-up.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/swiper.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/metismenu.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/waypoint.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins/gsap.min.js" strategy="lazyOnload" />
        <Script
          src="/assets/js/plugins/scrolltigger.js"
          strategy="lazyOnload"
        />
        <Script src="/assets/js/vendor/split-text.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/contact.form.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/split-type.js" strategy="lazyOnload" />
        <Script
          src="/assets/js/plugins/jquery-timepicker.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/js/vendor/magnific-popup.min.js"
          strategy="lazyOnload"
        />

        {/* Main JS (load last) */}
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
