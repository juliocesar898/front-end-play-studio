import { useEffect } from 'react';
import { useBets } from '../context/BetsContext';

function BetsPage() {
  const { getBets, bets } = useBets();

  useEffect(() => {
    getBets();
  }, []);

  if (bets.length === 0) {
    return <h1>No Bets</h1>;
  }

  return (
    <div>
      {bets.map((bet) => (
        <div key={bet._id}>
          <h1>{bet.codeBeat}</h1>
          <p>{bet.description}</p>
          <p>{bet.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default BetsPage;
