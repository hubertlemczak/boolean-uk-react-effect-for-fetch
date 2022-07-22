import { useEffect, useState } from 'react';

export const AdviceSlip = ({ addFavAdvice }) => {
  const [advice, setAdvice] = useState('');
  const api = 'https://api.adviceslip.com/advice';

  const getAdvice = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip));
  };

  useEffect(getAdvice, []);

  return (
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{advice.advice}</p>
      <button onClick={getAdvice}>Get More Advice</button>
      <button onClick={() => addFavAdvice(advice)}>Save to Favourties</button>
    </section>
  );
};
