import Link from "next/link";
import Wordmark from "./Wordmark";
import { BRAND, NAV_LINKS } from "@/lib/site";

const ICONS = {
  home: <path d="M4 11.5 12 5l8 6.5V20h-5v-5H9v5H4z" />,
  series: (
    <>
      <rect x="3.5" y="5.5" width="17" height="11" rx="2" />
      <path d="M8 20h8" />
    </>
  ),
  film: (
    <>
      <rect x="4" y="4.5" width="16" height="15" rx="2" />
      <path d="M8.5 4.5v15M15.5 4.5v15M4 12h16" />
    </>
  ),
  star: <path d="m12 4.5 2.3 4.8 5.2.7-3.8 3.6.9 5.2-4.6-2.5-4.6 2.5.9-5.2L4.5 10l5.2-.7z" />,
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2.2" />
      <path d="M11 18h2" />
    </>
  ),
};

// `current` marks the active link. Only Home is a page of its own, the rest are sections of it.
export default function SiteHeader({ current }: { current?: string }) {
  return (
    <>
      <header className="site-header">
        <Link href="/" className="site-logo" aria-label={`${BRAND} home`}>
          <Wordmark />
        </Link>
        <nav className="site-nav" aria-label="Main">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} aria-current={current === link.href ? "page" : undefined}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-actions">
          <span className="soon-badge">Coming Soon</span>
          <Link className="btn site-cta" href="/#app">
            Get the App
          </Link>
        </div>
      </header>

      <nav className="tabbar" aria-label="Main">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} aria-current={current === link.href ? "page" : undefined}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {ICONS[link.icon]}
                </svg>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
