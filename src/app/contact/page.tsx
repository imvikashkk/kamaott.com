import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { ADDRESS_LINES, BRAND, EMAIL, ENTITY } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <InfoPage
      title="Contact Us"
      showDate={false}
      showHelp={false}
      intro={<p>Need help with {BRAND}, a payment, a refund or your account? Contact us using any of the details below.</p>}
    >
      <div className="contact-grid">
        <div className="contact-card contact-wide">
          <h2>Email</h2>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
        <div className="contact-card contact-wide">
          <h2>Registered address</h2>
          <address>
            <strong>{ENTITY}</strong>
            {ADDRESS_LINES.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </div>
      </div>
      <section>
        <h2>Payment or refund queries</h2>
        <p>
          Please include your registered mobile number or email, the transaction ID, the payment date and the amount.
          We aim to reply within 2 business days.
        </p>
      </section>
      <section id="grievance">
        <h2>Grievance redressal</h2>
        <p>
          Complaints about content, privacy or the service can be sent to the Grievance Officer, {ENTITY}, at{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or at the address above. We acknowledge complaints within 24 hours and
          aim to resolve them within 15 days.
        </p>
      </section>
    </InfoPage>
  );
}
