import { createContext, useContext, useState } from 'react';
import { createBetRequest, getBetsRequest } from '../api/bets';

const BetContext = createContext();

export const useBets = () => {
  const context = useContext(BetContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export function BetProvider({ children }) {
  const [bets, setBets] = useState([]);
  
  const getBets = async () => {
    try {
      const res = await getBetsRequest();
      setBets(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createBet = async (bet) => {
    const res = await createBetRequest(bet);
    console.log(res);
  };

  return (
    <BetContext.Provider value={{ bets, createBet, getBets }}>
      {children}
    </BetContext.Provider>
  );
}
