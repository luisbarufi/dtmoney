import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TrasactionsContext } from './TransactionsContext';

import { GlobalStyle } from './assets/styles/global';

Modal.setAppElement('#root');

export function App() {
  const [
    isNewTransactionModalOpen, 
    setIsNewTransactionModalOpen
  ] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TrasactionsContext.Provider value={[]} >
      <Header onOpenNewTransationModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseTransactionModal} 
      />

      <GlobalStyle />

    </TrasactionsContext.Provider>
  );
};
