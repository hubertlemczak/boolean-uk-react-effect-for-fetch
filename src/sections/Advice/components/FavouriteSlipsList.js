export const FavouriteSlipsList = ({ favAdvice }) => {
  return (
    <section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favAdvice.map((advice) => (
            <li key={advice.id}>{advice.advice}</li>
          ))}
        </ul>
      </section>
    </section>
  );
};
