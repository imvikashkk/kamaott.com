import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { ADDRESS_INLINE, BRAND, ENTITY, UDYAM } from "@/lib/site";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <InfoPage
      title="About Us"
      showDate={false}
      intro={<p>{BRAND} is an upcoming Indian video streaming (OTT) platform for web series, films and original shows, on the web and on mobile.</p>}
    >
      <section>
        <h2>What we do</h2>
        <p>
          {BRAND} will let viewers in India stream video content over the internet on a prepaid subscription. The
          service is delivered digitally, so nothing is shipped to you. The platform is launching soon, and plans and
          prices will be shown on this website before anyone is asked to pay.
        </p>
      </section>
      <section>
        <h2>Who we are</h2>
        <p>
          {BRAND} is operated by {ENTITY}, a sole proprietorship and registered micro enterprise under the Government
          of India&apos;s Udyam scheme.
        </p>
        <dl className="facts">
          <div>
            <dt>Business name</dt>
            <dd>{ENTITY}</dd>
          </div>
          <div>
            <dt>Udyam registration</dt>
            <dd>{UDYAM}</dd>
          </div>
          <div>
            <dt>Registered address</dt>
            <dd>{ADDRESS_INLINE}</dd>
          </div>
        </dl>
      </section>
    </InfoPage>
  );
}
