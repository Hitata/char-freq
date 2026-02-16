import { useState } from 'react';
import { GEMATRIA } from '../utils/gematria';
import { LETTERS } from '../utils/keyboard';

function RootSteps({ steps, totalValue }) {
  if (totalValue > 9 && steps.length > 0) {
    return (
      <div className="root-number-steps">
        {steps.map((s, i) => (
          <span key={i}>
            {i > 0 && <span className="root-step-arrow">&rarr;</span>}
            {i === steps.length - 1
              ? <span className="root-step-final">{s}</span>
              : s}
          </span>
        ))}
      </div>
    );
  }

  if (totalValue > 0) {
    return (
      <div className="root-number-steps">
        <span className="root-step-final">single digit</span>
      </div>
    );
  }

  return null;
}

function Explainer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="gematria-explainer">
      <div className="gematria-explainer-toggle" onClick={() => setOpen(!open)}>
        <span>How does this work?</span>
        <span className={`gem-toggle-arrow${open ? ' open' : ''}`}>&#9660;</span>
      </div>
      {open && (
        <div className="gematria-explainer-body">
          <p>Gematria and the root number are two steps of the same process:</p>

          <div className="explain-step">
            <span className="explain-step-num">1</span>
            <span className="explain-step-text">
              <strong>Gematria (Mispar Hechrachi)</strong> &mdash; Each letter maps to a number
              (A=1, B=2 &hellip; J=10, K=20 &hellip; T=200, V=400). Add them all up and you get
              the <strong>gematria value</strong> &mdash; the raw numerical &ldquo;weight&rdquo; of your text.
            </span>
          </div>

          <div className="explain-step step-root">
            <span className="explain-step-num">2</span>
            <span className="explain-step-text">
              <strong>Root Number (Mispar Katan Mispari)</strong> &mdash; Take that total and keep
              adding the digits together until only a single digit (1&ndash;9) remains. For example:{' '}
              <strong>782 &rarr; 7+8+2 = 17 &rarr; 1+7 = 8</strong>. That final digit is the
              root number &mdash; a kind of single-digit &ldquo;signature&rdquo; of your text.
            </span>
          </div>

          <p className="explain-note">
            In Kabbalistic tradition, the Vilna Gaon showed that many traditional Shabbat foods
            all reduce to a root number of 7 (the seventh day). The root number is mathematically
            equivalent to the value mod 9 &mdash; it stays the same regardless of which gematria
            encoding you start from, giving it a special invariance.
          </p>
        </div>
      )}
    </div>
  );
}

function WordBreakdown({ words }) {
  if (words.length === 0) {
    return (
      <div className="gematria-words">
        <div className="empty-state" style={{ width: '100%' }}>
          <div className="icon">&#x05D0;</div>
          <div>Type something to see its gematria value</div>
        </div>
      </div>
    );
  }

  return (
    <div className="gematria-words">
      {words.map((w, i) => (
        <div className="gem-word" key={i}>
          <span className="gem-word-text">{w.text}</span>
          <span className="gem-word-eq">=</span>
          <span className="gem-word-value">{w.value}</span>
        </div>
      ))}
    </div>
  );
}

function LetterBreakdown({ letters }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="gematria-toggle" onClick={() => setOpen(!open)}>
        <span>Letter Breakdown</span>
        <span className={`gem-toggle-arrow${open ? ' open' : ''}`}>&#9660;</span>
      </div>
      {open && (
        <div className="gematria-letters">
          {letters.map((item, i) => (
            <div className={`gem-letter${item.isAlpha ? '' : ' non-alpha'}`} key={i}>
              <div className="gem-letter-char">
                {item.isAlpha ? item.char.toUpperCase() : item.char}
              </div>
              {item.isAlpha && (
                <>
                  <div className="gem-letter-hebrew">{item.hebrew}</div>
                  <div className="gem-letter-val">{item.value}</div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function MappingReference() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="gematria-toggle" onClick={() => setOpen(!open)}>
        <span>Mapping Reference</span>
        <span className={`gem-toggle-arrow${open ? ' open' : ''}`}>&#9660;</span>
      </div>
      {open && (
        <div className="gematria-ref">
          <div className="gem-ref-grid">
            {LETTERS.map((letter) => {
              const g = GEMATRIA[letter];
              return (
                <div className="gem-ref-item" key={letter}>
                  <span className="gem-ref-eng">{letter.toUpperCase()}</span>
                  <span className="gem-ref-heb">{g.hebrew}</span>
                  <span className="gem-ref-name">{g.name}</span>
                  <span className="gem-ref-val">{g.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default function GematriaSection({ gematria }) {
  const { totalValue, letterCount, wordBreakdown, letterBreakdown, rootNumber, rootSteps } = gematria;

  return (
    <>
      <div className="section-title">Kabbalistic Gematria</div>
      <div className="chart-card" dir="ltr">
        <div className="gematria-totals-row">
          <div className="gematria-total-block">
            <div className="gematria-total-label">Gematria Value</div>
            <div className="gematria-total-value">{totalValue}</div>
            <div className="gematria-total-sub">
              {letterCount > 0
                ? `${letterCount} letter${letterCount !== 1 ? 's' : ''} evaluated`
                : ''}
            </div>
          </div>
          <div className="gematria-divider" />
          <div className="gematria-total-block">
            <div className="gematria-total-label">Root Number</div>
            <div className="root-number-value">{rootNumber}</div>
            <RootSteps steps={rootSteps} totalValue={totalValue} />
          </div>
        </div>

        <Explainer />
        <WordBreakdown words={wordBreakdown} />
        <LetterBreakdown letters={letterBreakdown} />
        <MappingReference />
      </div>
    </>
  );
}
