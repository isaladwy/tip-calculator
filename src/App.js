import Bill from './components/Bill';
import Output from './components/Output';
import Percentage from './components/Percentage';
import Reset from './components/Reset';
import { useState } from 'react';

export default function App() {
  const [bill, setBill] = useState('');
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  function handleReset() {
    setBill('');
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <>
      <Bill bill={bill} onSetBill={setBill} />
      <Percentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </Percentage>
      <Percentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </Percentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </>
  );
}