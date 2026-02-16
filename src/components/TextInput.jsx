export default function TextInput({ value, onChange, maxLength = 500 }) {
  const len = value.length;
  const cls =
    'char-counter' +
    (len > 450 ? ' danger' : len > 380 ? ' warning' : '');

  return (
    <div className="input-section">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        placeholder="Start typing to see the frequency distribution and keyboard heatmap light up..."
      />
      <div className={cls}>
        {len} / {maxLength}
      </div>
    </div>
  );
}
