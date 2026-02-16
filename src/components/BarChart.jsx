import { LETTERS } from '../utils/keyboard';
import { getHeatColor, heatBg } from '../utils/heatColor';

export default function BarChart({ freq, maxLetterCount }) {
  return (
    <>
      <div className="section-title">Frequency Distribution</div>
      <div className="chart-card">
        <div className="bar-chart">
          {LETTERS.map((letter) => {
            const count = freq[letter] || 0;
            const ratio = maxLetterCount > 0 ? count / maxLetterCount : 0;
            const heightPx = count > 0 ? Math.max(4, ratio * 180) : 0;
            const color = getHeatColor(ratio);
            const bg = count > 0 ? heatBg(color) : '#1a2a44';

            return (
              <div className="bar-wrapper" key={letter}>
                <div
                  className="bar"
                  style={{ height: `${heightPx}px`, background: bg }}
                >
                  <div className="bar-tooltip">
                    {letter.toUpperCase()}: {count}
                  </div>
                </div>
                <div className="bar-label">{letter}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
