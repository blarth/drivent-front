import TicketChoice from '../../../components/TicketChoice';
import TicketChoiceContext from '../../../contexts/TicketChoiceContext';
import { useContext } from 'react';

export default function Payment() {
  const { ticketTotalPrice } = useContext(TicketChoiceContext);
  return <>{ticketTotalPrice === null ? <TicketChoice /> : <h1>Hello</h1>}</>;
}
