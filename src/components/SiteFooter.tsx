import Link from "next/link";
import Wordmark from "./Wordmark";
import {
  ADDRESS_LINES,
  BRAND,
  EMAIL,
  ENTITY,
  FOOTER_LINKS,
} from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Link href="/" aria-label={`${BRAND} home`} className="footer-logo">
            <Wordmark />
          </Link>
          <p className="footer-note">
            {BRAND} is operated by {ENTITY}.
          </p>
        </div>

        <div>
          <h2 className="footer-heading">Registered address</h2>
          <address className="footer-address">
            <strong>{ENTITY}</strong>
            {ADDRESS_LINES.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <p className="footer-note">
            Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
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
