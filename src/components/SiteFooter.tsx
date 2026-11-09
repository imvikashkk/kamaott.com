import Link from "next/link";
import Wordmark from "./Wordmark";
import { BRAND, FOOTER_LINKS } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Link href="/" aria-label={`${BRAND} home`} className="footer-logo">
            <Wordmark />
          </Link>
          <p className="footer-note">
            {BRAND} is operated by{" "}
            <a href="https://zenzworld.com" target="_blank" rel="noopener noreferrer">
              Zenz World
            </a>
            .
          </p>
        </div>

        <nav aria-label="Policies and company">
          <h2 className="footer-heading">Company &amp; policies</h2>
          <ul className="footer-links">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="footer-copy">
        © 2026 {BRAND}. All rights reserved.
      </p>
    </footer>
  );
}
