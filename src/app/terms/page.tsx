import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";
import { ADDRESS_INLINE, BRAND, DOMAIN, ENTITY } from "@/lib/site";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <InfoPage
      title="Terms & Conditions"
      intro={
        <p>
          These Terms govern your use of {BRAND}, including {DOMAIN} and our mobile apps (the &quot;Service&quot;). The
          Service is operated by {ENTITY}, {ADDRESS_INLINE} (&quot;we&quot;, &quot;us&quot;). By using the Service you
          agree to these Terms. If you do not agree, please do not use it.
        </p>
      }
    >
      <section>
        <h2>Eligibility</h2>
        <p>
          You must be at least 18 years old to create an account or make a payment. You confirm that the details you
          give us are accurate and that you are legally able to enter into this agreement.
        </p>
      </section>
      <section>
        <h2>Your account</h2>
        <p>
          You are responsible for keeping your login details safe and for all activity on your account. Accounts are
          personal and may not be sold, rented or transferred. Tell us promptly if you suspect unauthorised access.
        </p>
      </section>
      <section>
        <h2>Subscription plans</h2>
        <ul>
          <li>Access is sold as prepaid plans for a fixed period. The price, duration and features are shown before you pay.</li>
          <li>Plans do not renew automatically. You are charged again only if you choose to buy another plan.</li>
          <li>We may change plans and prices in future. Changes do not affect a plan you have already paid for.</li>
        </ul>
      </section>
      <section>
        <h2>Payments</h2>
        <p>
          All prices are in Indian Rupees (INR), and applicable taxes are charged as required by law. Payments are
          processed by a third-party payment gateway using the methods shown at checkout. We do not store your card,
          UPI PIN or net banking credentials.
        </p>
      </section>
      <section>
        <h2>Refunds and access</h2>
        <p>
          Refunds and cancellations are covered by our <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.
          Access after payment is covered by our <Link href="/delivery-policy">Service Delivery Policy</Link>.
        </p>
      </section>
      <section>
        <h2>Acceptable use</h2>
        <p>Your plan is for personal, non-commercial viewing. You must not:</p>
        <ul>
          <li>download, record, copy, re-upload, publicly show or resell any content, except through a feature we provide for that purpose;</li>
          <li>bypass or interfere with security, access controls or content protection;</li>
          <li>share your account, or use the Service for anything unlawful or fraudulent.</li>
        </ul>
        <p>We may suspend or close accounts that break these rules.</p>
      </section>
      <section>
        <h2>Content and age ratings</h2>
        <p>
          Content is classified and carries an age rating as required by the Information Technology (Intermediary
          Guidelines and Digital Media Ethics Code) Rules, 2021. Titles may be added or removed at any time, and
          availability may vary by device or location.
        </p>
      </section>
      <section>
        <h2>Intellectual property</h2>
        <p>
          All content, artwork, text, software and branding on the Service belong to us or our licensors and are
          protected by law. Your plan gives you a limited, non-exclusive, non-transferable licence to watch content,
          and no ownership rights.
        </p>
      </section>
      <section>
        <h2>Availability</h2>
        <p>
          We work to keep the Service running smoothly but do not guarantee that it will be uninterrupted or error-free.
          Streaming quality depends on your device and internet connection.
        </p>
      </section>
      <section>
        <h2>Limitation of liability</h2>
        <p>
          The Service is provided &quot;as is&quot;. To the extent permitted by law, we are not liable for indirect or
          consequential loss, and our total liability for any claim is limited to the amount you paid for your current
          plan. Nothing here limits rights that cannot be excluded under Indian law, including under the Consumer
          Protection Act, 2019.
        </p>
      </section>
      <section>
        <h2>Governing law</h2>
        <p>
          These Terms are governed by the laws of India. Subject to your rights as a consumer, disputes are subject to
          the jurisdiction of the courts at Bhubaneswar, Odisha.
        </p>
      </section>
      <section>
        <h2>Grievances</h2>
        <p>
          You can raise a complaint with our Grievance Officer using the details on the{" "}
          <Link href="/contact#grievance">Contact Us</Link> page.
        </p>
      </section>
      <section>
        <h2>Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time, and the date above shows the latest version. Continuing to use
          the Service after a change means you accept the updated Terms.
        </p>
      </section>
    </InfoPage>
  );
}
