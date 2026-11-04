import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";
import { BRAND, DOMAIN, EMAIL, ENTITY } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <InfoPage
      title="Privacy Policy"
      intro={
        <p>
          This policy explains how {ENTITY}, the operator of {BRAND} ({DOMAIN} and our mobile apps), collects, uses and
          protects your personal data, in line with applicable Indian law including the Digital Personal Data Protection
          Act, 2023.
        </p>
      }
    >
      <section>
        <h2>Data we collect</h2>
        <ul>
          <li><strong>Account details:</strong> your name, mobile number and email address.</li>
          <li><strong>Payment records:</strong> the plan bought, amount, date, status and transaction reference.</li>
          <li><strong>Usage data:</strong> what you watch, your watch progress and the features you use.</li>
          <li><strong>Technical data:</strong> IP address, device and browser type, and cookies.</li>
          <li><strong>Support messages:</strong> anything you send us when you contact us.</li>
        </ul>
        <p>
          Card numbers, UPI PINs and net banking credentials are handled by the payment gateway. We do not receive or
          store them.
        </p>
      </section>
      <section>
        <h2>How we use it</h2>
        <ul>
          <li>to create and secure your account, and to send login codes and service messages;</li>
          <li>to process payments, activate plans and handle refunds;</li>
          <li>to deliver, maintain and improve the Service, and to respond to support requests;</li>
          <li>to prevent fraud and misuse, and to meet legal, tax and accounting duties.</li>
        </ul>
      </section>
      <section>
        <h2>Cookies</h2>
        <p>
          We use cookies to keep you signed in and to understand how the Service is used. Blocking essential cookies
          through your browser settings may stop parts of the Service from working.
        </p>
      </section>
      <section>
        <h2>Who we share it with</h2>
        <p>
          We do not sell your personal data. We share it only with service providers who help us run the Service, such
          as payment gateways, SMS, hosting and analytics providers, and with authorities where the law requires it.
        </p>
      </section>
      <section>
        <h2>Retention and security</h2>
        <p>
          We keep personal data for as long as your account is active and afterwards as long as legal, tax or accounting
          rules require. We use reasonable technical and organisational safeguards, although no online system can be
          guaranteed fully secure.
        </p>
      </section>
      <section>
        <h2>Your rights</h2>
        <p>
          You may ask to access, correct or erase your personal data, withdraw consent, nominate someone to exercise
          these rights on your behalf, or raise a grievance. Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> from your
          registered contact details. Some records may have to be kept where the law requires it.
        </p>
      </section>
      <section>
        <h2>Children</h2>
        <p>
          Accounts are for people aged 18 and over. We do not knowingly collect personal data from children. If you
          believe a child has given us data, please contact us and we will delete it.
        </p>
      </section>
      <section>
        <h2>Grievance Officer</h2>
        <p>
          Privacy complaints can be sent to our Grievance Officer using the details on the{" "}
          <Link href="/contact#grievance">Contact Us</Link> page.
        </p>
      </section>
      <section>
        <h2>Changes to this policy</h2>
        <p>We may update this policy from time to time, and the date above shows the latest version.</p>
      </section>
    </InfoPage>
  );
}
