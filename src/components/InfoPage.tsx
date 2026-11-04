import Link from "next/link";
import type { ReactNode } from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { EMAIL, POLICY_DATE } from "@/lib/site";

export default function InfoPage({
  title,
  intro,
  showDate = true,
  showHelp = true,
  children,
}: {
  title: string;
  intro: ReactNode;
  showDate?: boolean;
  showHelp?: boolean;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="info">
        <h1 className="info-title">{title}</h1>
        {showDate && <p className="info-date">Last updated: {POLICY_DATE}</p>}
        <div className="info-intro">{intro}</div>
        <div className="info-body">{children}</div>
        {showHelp && (
          <p className="info-help">
            Questions? Write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or visit our{" "}
            <Link href="/contact">Contact Us</Link> page.
          </p>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
