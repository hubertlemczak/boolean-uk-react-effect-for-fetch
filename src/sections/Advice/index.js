import { useState } from 'react';
import { AdviceSlip } from './components/AdviceSlip';
import { FavouriteSlipsList } from './components/FavouriteSlipsList';

const AdviceSection = () => {
  const [favAdvice, setFavAdvice] = useState([]);

  const addFavAdvice = (advice) => {
    if (favAdvice.find((a) => a.id === advice.id))
      alert('advice already in favourites');
    else setFavAdvice((currentFavAdvice) => [...currentFavAdvice, advice]);
  };
  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip addFavAdvice={addFavAdvice} />
      <FavouriteSlipsList favAdvice={favAdvice} />
      <section className="favourtite-slips-list"></section>
    </section>
  );
};

export default AdviceSection;
