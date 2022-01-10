import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TrasactionsContext = createContext<Transaction[]>([]);


export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransaction] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
       .then(response => setTransaction(response.data.transactions));
  }, []);

  return (
    <TrasactionsContext.Provider value={transactions}>
      {children}
    </TrasactionsContext.Provider>
  );
}
