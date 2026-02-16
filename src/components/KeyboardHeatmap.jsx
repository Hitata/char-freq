import { useState } from 'react';
import Key from './Key';
import {
  KB_ROWS,
  SOFLE_LEFT, SOFLE_RIGHT,
  SOFLE_COL_OFFSETS_L, SOFLE_COL_OFFSETS_R,
} from '../utils/keyboard';

const TYPE_CLASS = {
  char: 'key-small',
  mod:  'key-small key-mod',
  encoder: 'key-small key-encoder',
  thumb: 'key-small key-thumb',
};

function StandardKeyboard({ freq, maxCount }) {
  return (
    <div className="keyboard">
      {KB_ROWS.map((row, ri) => (
        <div className="kb-row" key={ri}>
          {row.keys.map((k) => (
            <Key
              key={k}
              keyChar={k}
              count={freq[k] || 0}
              maxCount={maxCount}
              extraClass={row.type === 'number' ? 'key-number' : ''}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function SofleHalf({ halfData, colOffsets, freq, maxCount }) {
  return (
    <div className="keyboard-half">
      {halfData.map((row, ri) => (
        <div className="kb-row-stagger" key={ri}>
          {row.map((item, ci) => {
            const isThumb = item.type === 'thumb';
            const stagger = !isThumb && colOffsets[ci] != null ? colOffsets[ci] : undefined;

            return (
              <Key
                key={`${ri}-${ci}`}
                keyChar={item.key}
                count={item.type === 'char' ? (freq[item.key] || 0) : 0}
                maxCount={maxCount}
                type={item.type}
                extraClass={TYPE_CLASS[item.type] || 'key-small'}
                staggerPx={stagger}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

function SofleKeyboard({ freq, maxCount }) {
  return (
    <div className="keyboard-split">
      <SofleHalf halfData={SOFLE_LEFT}  colOffsets={SOFLE_COL_OFFSETS_L} freq={freq} maxCount={maxCount} />
      <SofleHalf halfData={SOFLE_RIGHT} colOffsets={SOFLE_COL_OFFSETS_R} freq={freq} maxCount={maxCount} />
    </div>
  );
}

const LAYOUTS = [
  { id: 'standard', label: 'Standard' },
  { id: 'sofle',    label: 'Sofle v2' },
];

export default function KeyboardHeatmap({ freq, maxCount }) {
  const [layout, setLayout] = useState('standard');

  return (
    <>
      <div className="section-title">Keyboard Heatmap</div>
      <div className="chart-card">
        <div className="layout-toggle">
          {LAYOUTS.map((l) => (
            <span
              key={l.id}
              className={`toggle-label${layout === l.id ? ' active' : ''}`}
              onClick={() => setLayout(l.id)}
            >
              {l.label}
            </span>
          ))}
        </div>

        {layout === 'sofle'
          ? <SofleKeyboard freq={freq} maxCount={maxCount} />
          : <StandardKeyboard freq={freq} maxCount={maxCount} />}

        <div className="legend">
          <span className="legend-label">0</span>
          <div className="legend-bar" />
          <span className="legend-label">max</span>
        </div>
      </div>
    </>
  );
}
