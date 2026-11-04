import type { CSSProperties } from "react";

// Abstract placeholder art until real titles exist: [base, base, glow] per card.
const PALETTES = [
  [["#5e0b1c", "#16060b", "#c9324a"], ["#23133f", "#0d0716", "#7a4bc4"], ["#54310c", "#140a04", "#d08a2e"], ["#0d3438", "#051214", "#2c9aa0"]],
  [["#3a0a2d", "#110410", "#b8357f"], ["#4a2008", "#120703", "#d9692a"], ["#142447", "#060b18", "#4476cf"]],
  [["#6b4a12", "#150d03", "#eec477"], ["#610c20", "#14050a", "#e0314f"], ["#3c1a10", "#100604", "#c8603a"], ["#2a1040", "#0c0515", "#9a55d6"]],
];

const COUNT = 10;

export default function PosterRow({
  id,
  title,
  shape,
  palette,
}: {
  id: string;
  title: string;
  shape: "tall" | "wide";
  palette: number;
}) {
  const colors = PALETTES[palette];
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <div className="row-head">
        <h2 className="row-title" id={`${id}-title`}>
          {title}
        </h2>
        <p className="row-note">Titles launch ke saath announce honge</p>
      </div>
      <div className="row-track" role="group" aria-label={`${title} previews`} tabIndex={0}>
        {Array.from({ length: COUNT }, (_, i) => {
          const [a, b, glow] = colors[i % colors.length];
          const style = { "--a": a, "--b": b, "--glow": glow, "--x": `${22 + ((i * 37) % 58)}%` } as CSSProperties;
          return (
            <div key={i} className={`poster poster-${shape}`} style={style} aria-hidden="true">
              <span className="poster-mark">K</span>
              <span className="poster-label">Coming Soon</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
