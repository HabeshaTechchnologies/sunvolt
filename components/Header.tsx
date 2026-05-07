"use client";
import React, { useEffect, useState, useCallback } from "react";
import { X, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import Image from "next/image";
import logowithoutbg from "@/assets/images/green/logo-no-bg.webp";
import logowithwhite from "@/assets/images/green/logo-with-white-text-nobg.webp";
import logoscreenshot from "@/assets/images/green/Screenshot 2025-08-18 011342.webp";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {useTranslations} from 'next-intl';

type Props = {};

const Header = (props: Props) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations('Navigation');

  // Optimized scroll handler to reduce re-renders
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 50;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  }, [scrolled]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Passive listener improves scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen, handleScroll]);

  return (
    <>
      <header className="header-three header--sticky">
        <div className="header-left">
          <a href="/" className="logo-area">
            <Image
              className="logo-white logo-green"
              src={scrolled ? logowithoutbg : logowithwhite}
              alt="logo"
              width={210} // Explicit width to prevent layout shift
              height={80} // Explicit height to prevent layout shift
              priority // Loads this image first for LCP
              fetchPriority="high" // Strategic hint for the browser
            />
            <Image
              className="logo-dark logo-green"
              src={scrolled ? logoscreenshot : logowithwhite}
              alt="logo"
              width={210}
              height={80}
              // Not using priority here to avoid competing with the primary logo
            />
          </a>

          <div className="header-nav main-nav-one">
            <nav>
              <ul>
                <li>
                  <a
                    className={`nav-link ${scrolled ? "text-black" : "text-white"}`}
                    href="/"
                  >
                    {t('home')}
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link ${scrolled ? "text-black" : "text-white"}`}
                    href="/about"
                  >
                    {t('about')}
                  </a>
                </li>

                <li>
                  <a
                    className={`nav-link ${scrolled ? "text-black" : "text-white"}`}
                    href="/service"
                  >
                    {t('services')}
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link ${scrolled ? "text-black" : "text-white"}`}
                    href="/blog"
                  >
                    BLOG
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link ${scrolled ? "text-black" : "text-white"}`}
                    href="/contact"
                  >
                    {t('contact')}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="header-right">
          <div
            className="action-button-menu"
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            {/* Hidden on mobile, visible on md+ */}
            <a href="/contact" className="contact hidden md:inline-flex">
              Let's Talk
            </a>
            <LanguageSwitcher scrolled={scrolled} />
            {/* Hamburger — mobile only */}
            <div id="menu-btn" className="block md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="4" height="4" fill={scrolled ? "black" : "white"} />
                  <rect y="7" width="4" height="4" fill={scrolled ? "black" : "white"} />
                  <rect y="14" width="4" height="4" fill={scrolled ? "black" : "white"} />
                  <rect x="7" width="4" height="4" fill={scrolled ? "black" : "white"} />
                  <rect x="7" y="7" width="4" height="4" fill={scrolled ? "black" : "white"} />
                  <rect x="7" y="14" width="4" height="4" fill={scrolled ? "black" : "white"} />
                  <rect x="14" width="4" height="4" fill={scrolled ? "black" : "white"} />
                  <rect x="14" y="7" width="4" height="4" fill={scrolled ? "black" : "white"} />
                  <rect x="14" y="14" width="4" height="4" fill={scrolled ? "black" : "white"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Container */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-50 transform transition-transform duration-300 ease-in-out 
  ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="p-4 flex flex-col h-full relative">
          <div className="mb-8">
            <Image
              src={logowithoutbg}
              alt="Sunvolt"
              className="h-12 logo-green"
              width={150} // Explicit sizing
              height={48}
            />
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-10 left-4/5 text-gray-800 p-2"
            aria-label="Close Menu"
          >
            <X
              className="border border-gray-950 p-1"
              size={32}
              strokeWidth={2.5}
            />
          </button>

          <nav className="flex-1">
            <ul className="flex flex-col text-base font-medium text-gray-900">
              {["Home", "About", "Services", "Blog", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={
                        item === "Home"
                          ? "/"
                          : `/${item.toLowerCase().replace(" ", "")}`
                      }
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 border-b border-gray-200"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex justify-center gap-4 mt-6">
            <a href="#" className="p-2 bg-black text-white rounded">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-black text-white rounded">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 bg-black text-white rounded">
              <Youtube size={18} />
            </a>
            <a href="#" className="p-2 bg-black text-white rounded">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
