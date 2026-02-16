import { getHeatColor, heatBg, heatBorder } from '../utils/heatColor';

export default function Key({ keyChar, count = 0, maxCount, type = 'char', extraClass = '', staggerPx }) {
  const isTrackable = type === 'char';
  const ratio = isTrackable && maxCount > 0 ? count / maxCount : 0;
  const isActive = isTrackable && count > 0;
  const color = isActive ? getHeatColor(ratio) : null;

  const keyStyle = {
    background: isActive ? heatBg(color) : 'var(--bg-tertiary)',
    borderColor: isActive ? heatBorder(color) : undefined,
  };

  const wrapperStyle = staggerPx != null ? { marginTop: `${staggerPx}px` } : undefined;

  const classNames = [
    'key',
    extraClass,
    isActive ? 'active' : '',
  ].filter(Boolean).join(' ');

  const displayLabel = isTrackable ? keyChar.toUpperCase() : keyChar;

  const inner = (
    <div className={classNames} style={keyStyle}>
      <span className="letter">{displayLabel}</span>
      <span className="count">{isActive ? count : ''}</span>
    </div>
  );

  if (wrapperStyle) {
    return (
      <div className="key-stagger" style={wrapperStyle}>
        {inner}
      </div>
    );
  }

  return inner;
}
