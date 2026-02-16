const STOPS = [
  { r: 26,  g: 42,  b: 68  },   // 0.0  — dark blue
  { r: 30,  g: 70,  b: 120 },   // 0.15
  { r: 40,  g: 110, b: 160 },   // 0.3  — cyan-blue
  { r: 60,  g: 140, b: 70  },   // 0.45 — green
  { r: 180, g: 170, b: 30  },   // 0.6  — yellow
  { r: 210, g: 110, b: 30  },   // 0.75 — orange
  { r: 210, g: 50,  b: 40  },   // 0.9  — red
  { r: 255, g: 30,  b: 30  },   // 1.0  — hot red
];

export function getHeatColor(ratio) {
  const t = Math.max(0, Math.min(1, ratio));
  const segment = t * (STOPS.length - 1);
  const i = Math.floor(segment);
  const f = segment - i;

  if (i >= STOPS.length - 1) return STOPS[STOPS.length - 1];

  const a = STOPS[i];
  const b = STOPS[i + 1];
  return {
    r: Math.round(a.r + (b.r - a.r) * f),
    g: Math.round(a.g + (b.g - a.g) * f),
    b: Math.round(a.b + (b.b - a.b) * f),
  };
}

export function heatBg(color) {
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

export function heatBorder(color) {
  return `rgba(${Math.min(255, color.r + 40)}, ${Math.min(255, color.g + 20)}, ${Math.min(255, color.b + 20)}, 0.4)`;
}
