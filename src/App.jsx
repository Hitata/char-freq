import { useState } from 'react';
import { useCharFrequency } from './hooks/useCharFrequency';
import Header from './components/Header';
import TextInput from './components/TextInput';
import StatsRow from './components/StatsRow';
import BarChart from './components/BarChart';
import KeyboardHeatmap from './components/KeyboardHeatmap';
import GematriaSection from './components/GematriaSection';

export default function App() {
  const [text, setText] = useState('');
  const data = useCharFrequency(text);

  return (
    <>
      <div className="grain-overlay" />
      <div className="container">
        <Header />
        <TextInput value={text} onChange={setText} />
        <StatsRow data={data} />
        <BarChart freq={data.freq} maxLetterCount={data.maxLetterCount} />
        <KeyboardHeatmap freq={data.freq} maxCount={data.maxCount} />
        <GematriaSection gematria={data.gematria} />
      </div>
    </>
  );
}
