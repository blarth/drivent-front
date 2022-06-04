import { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const PurchasedTicketContext = createContext();
export default PurchasedTicketContext;

export function PurchasedTicketProvider({ children }) {
  const [ticketPurchasedInformation, setTicketPurchasedInformation] = useState(null);
  const [ticketPurchasedInformationStorage, setTicketPurchasedInformationStorage] = useLocalStorage(
    'ticketPurchased',
    {}
  );

  function saveTicketPurchasedInformation(ticketInformation) {
    setTicketPurchasedInformation(ticketInformation);
    setTicketPurchasedInformationStorage(ticketInformation);
  }

  return (
    <PurchasedTicketContext.Provider value={{ ticketPurchasedInformationStorage, saveTicketPurchasedInformation }}>
      {children}
    </PurchasedTicketContext.Provider>
  );
}
