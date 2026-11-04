import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { BRAND, EMAIL } from "@/lib/site";

export const metadata: Metadata = { title: "Refund & Cancellation Policy" };

export default function RefundPage() {
  return (
    <InfoPage
      title="Refund & Cancellation Policy"
      intro={<p>This policy applies to all payments made for {BRAND} plans. {BRAND} is a digital service, and plans are prepaid for a fixed period.</p>}
    >
      <section>
        <h2>Cancellation</h2>
        <p>
          Plans do not renew automatically, so there is no recurring payment to cancel. Your plan ends by itself when its
          period is over. Once a plan is active it cannot be cancelled part-way through.
        </p>
      </section>
      <section>
        <h2>When a refund is given</h2>
        <ul>
          <li>you were charged more than once for the same purchase;</li>
          <li>your payment succeeded but your plan was not activated, and we cannot fix this;</li>
          <li>a technical fault on our side stopped you from using the Service, and we cannot fix this.</li>
        </ul>
      </section>
      <section>
        <h2>When a refund is not given</h2>
        <p>
          Apart from the cases above, payments for activated plans are non-refundable. This includes unused days, a
          change of mind, and problems caused by your own device or internet connection. Accounts closed for breaking our
          Terms are also not eligible.
        </p>
      </section>
      <section>
        <h2>Failed payments</h2>
        <p>
          If money was debited but the payment failed, your bank or the payment gateway normally reverses it
          automatically, usually within 5 to 7 business days. If it is not reversed, contact us with the transaction
          details.
        </p>
      </section>
      <section>
        <h2>How to request a refund</h2>
        <p>
          Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> within 7 days of the payment, with your registered mobile number
          or email, the transaction ID, the date, the amount and a short description of the problem.
        </p>
      </section>
      <section>
        <h2>Refund timeline</h2>
        <p>
          We review requests within 3 business days and tell you the outcome. Approved refunds go back to the original
          payment method within 5 to 7 business days. The exact date your money arrives depends on your bank.
        </p>
      </section>
    </InfoPage>
  );
}
