import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { BRAND, EMAIL } from "@/lib/site";

export const metadata: Metadata = { title: "Service Delivery Policy" };

export default function DeliveryPage() {
  return (
    <InfoPage
      title="Service Delivery Policy"
      intro={<p>{BRAND} is a digital streaming service. This policy, also known as a shipping policy, explains how you receive what you pay for.</p>}
    >
      <section>
        <h2>No physical shipping</h2>
        <p>We do not ship any physical goods, so there are no shipping charges or delivery addresses involved.</p>
      </section>
      <section>
        <h2>When you get access</h2>
        <p>
          Your plan is activated on your {BRAND} account as soon as your payment is confirmed, which is normally
          immediate. In rare cases, such as a delay at the bank or payment gateway, it can take up to 24 hours.
        </p>
      </section>
      <section>
        <h2>How to watch</h2>
        <p>
          Sign in with your registered account on the website or mobile app. You need a compatible device and a working
          internet connection. Data charges from your internet provider are your responsibility.
        </p>
      </section>
      <section>
        <h2>Service area</h2>
        <p>The Service is intended for viewers in India. Some content may not be available in every location.</p>
      </section>
      <section>
        <h2>If your plan is not active</h2>
        <p>
          If your plan is still not active 24 hours after a successful payment, email{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a> with your registered mobile number or email and the transaction ID. We
          will activate it, or refund you under our Refund &amp; Cancellation Policy.
        </p>
      </section>
    </InfoPage>
  );
}
