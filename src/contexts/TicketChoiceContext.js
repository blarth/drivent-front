import { createContext, useState } from 'react';

const TicketChoiceContext = createContext();
export default TicketChoiceContext;

export function TicketProvider({ children }) {
  const [ticketInformation, setTicketInformation] = useState(null);
  console.log(ticketInformation);

  return (
    <TicketChoiceContext.Provider value={{ ticketInformation, setTicketInformation }}>
      {children}
    </TicketChoiceContext.Provider>
  );
}
