"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useTransition, useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';

const localeLabels: Record<string, { label: string; flag: string }> = {
  en: { label: 'EN', flag: '🇬🇧' },
  fr: { label: 'FR', flag: '🇫🇷' },
};

export default function LanguageSwitcher({ scrolled }: { scrolled?: boolean }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLocale = (next: string) => {
    setOpen(false);
    startTransition(() => {
      window.location.href = `/${next}${pathname === '/' ? '' : pathname}${window.location.search}${window.location.hash}`;
    });
  };

  const current = localeLabels[locale] ?? localeLabels['en'];

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        disabled={isPending}
        aria-label="Switch language"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '7px 12px',
          borderRadius: '6px',
          border: scrolled ? '1px solid rgba(0,0,0,0.2)' : '1px solid rgba(255,255,255,0.5)',
          background: scrolled ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.12)',
          color: scrolled ? '#000000' : '#ffffff',
          cursor: 'pointer',
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.5px',
          backdropFilter: 'blur(4px)',
          transition: 'background 0.2s, border-color 0.2s, color 0.2s',
          whiteSpace: 'nowrap',
          textShadow: scrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.4)',
          opacity: isPending ? 0.6 : 1,
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = scrolled ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.18)';
          (e.currentTarget as HTMLButtonElement).style.borderColor = scrolled ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.5)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = scrolled ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.08)';
          (e.currentTarget as HTMLButtonElement).style.borderColor = scrolled ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.25)';
        }}
      >
        <Globe size={14} strokeWidth={2} />
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            background: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            minWidth: '130px',
            overflow: 'hidden',
            zIndex: 9999,
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          {Object.entries(localeLabels).map(([key, val]) => (
            <button
              key={key}
              onClick={() => switchLocale(key)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                width: '100%',
                padding: '10px 16px',
                border: 'none',
                background: locale === key ? '#f0f7f0' : 'transparent',
                color: locale === key ? '#1a7c2e' : '#333',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: locale === key ? 700 : 500,
                textAlign: 'left',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => {
                if (locale !== key) (e.currentTarget as HTMLButtonElement).style.background = '#f5f5f5';
              }}
              onMouseLeave={e => {
                if (locale !== key) (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              }}
            >
              <span style={{ fontSize: '18px' }}>{val.flag}</span>
              <span>
                {key === 'en' ? 'English' : 'Français'}
              </span>
              {locale === key && (
                <svg style={{ marginLeft: 'auto' }} width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7L5.5 10L11.5 4" stroke="#1a7c2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
