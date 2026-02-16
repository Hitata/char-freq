const PILLS = [
  { key: 'totalChars',  label: 'Total chars' },
  { key: 'totalLetters', label: 'Letters' },
  { key: 'uniqueLetters', label: 'Unique' },
  { key: 'topDisplay',  label: 'Most used' },
  { key: 'gematriaVal', label: 'Gematria' },
  { key: 'rootNumber',  label: 'Root #', style: { color: '#b388ff' } },
];

export default function StatsRow({ data }) {
  const values = {
    totalChars: data.totalChars,
    totalLetters: data.totalLetters,
    uniqueLetters: data.uniqueLetters,
    topDisplay: data.topDisplay,
    gematriaVal: data.gematria.totalValue || '0',
    rootNumber: data.gematria.rootNumber,
  };

  return (
    <div className="stats-row">
      {PILLS.map((p) => (
        <div className="stat-pill" key={p.key}>
          <span className="label">{p.label}</span>
          <span className="value" style={p.style}>{values[p.key]}</span>
        </div>
      ))}
    </div>
  );
}
