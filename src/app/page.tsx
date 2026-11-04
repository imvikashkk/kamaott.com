import PosterRow from "@/components/PosterRow";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Wordmark from "@/components/Wordmark";

function PhoneIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </svg>
  );
}

function Phone() {
  return (
    <div className="phone" role="img" aria-label="KamaOTT mobile app ka preview, jis par Coming Soon likha hai">
      <div className="phone-screen">
        <div className="phone-notch" />
        <div className="phone-bar">
          <Wordmark />
        </div>
        <div className="phone-hero">Coming Soon</div>
        <div className="phone-label" />
        <div className="phone-row">
          <i />
          <i />
          <i />
        </div>
        <div className="phone-label" />
        <div className="phone-row">
          <i />
          <i />
          <i />
        </div>
        <div className="phone-nav">
          <b />
          <b />
          <b />
          <b />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader current="/" />
      <main>
        <section className="stage">
          <div className="curtain curtain-left" aria-hidden="true" />
          <div className="curtain curtain-right" aria-hidden="true" />
          <div className="valance" aria-hidden="true" />

          <div className="stage-copy">
            <p className="eyebrow">Parda jald uthega</p>
            <h1 className="headline">Coming Soon</h1>
            <p className="lede">
              KamaOTT aa raha hai. Web series, films aur originals, sab ek jagah.
            </p>
            <div className="stage-actions">
              <a className="btn btn-primary" href="#web-series">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 4.5v15a1 1 0 0 0 1.53.85l12-7.5a1 1 0 0 0 0-1.7l-12-7.5A1 1 0 0 0 7 4.5Z" />
                </svg>
                Kya aa raha hai
              </a>
              <a className="btn btn-ghost" href="#app">
                Mobile app
              </a>
            </div>
          </div>

        </section>

        <div className="rows">
          <PosterRow id="web-series" title="Web Series" shape="tall" palette={0} />
          <PosterRow id="films" title="Films" shape="wide" palette={1} />
          <PosterRow id="originals" title="KamaOTT Originals" shape="tall" palette={2} />
        </div>

        <section className="app" id="app">
          <div className="app-inner">
            <div className="app-copy">
              <p className="eyebrow">Mobile app</p>
              <h2 className="app-title">Poora theatre, aapki jeb mein.</h2>
              <p className="app-text">
                KamaOTT ka app bhi jald aa raha hai. Phone uthao aur jahan mann
                kare, wahin dekho.
              </p>
              <ul className="platforms">
                <li className="platform">
                  <PhoneIcon />
                  <div>
                    <strong>Android</strong>
                    <span>Jald aa raha hai</span>
                  </div>
                </li>
                <li className="platform">
                  <PhoneIcon />
                  <div>
                    <strong>iPhone</strong>
                    <span>Jald aa raha hai</span>
                  </div>
                </li>
              </ul>
            </div>
            <Phone />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
