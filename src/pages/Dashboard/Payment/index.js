import TicketChoice from '../../../components/TicketChoice';
import TicketChoiceContext from '../../../contexts/TicketChoiceContext';
import { useContext } from 'react';

export default function Payment() {
  const { ticketInformation } = useContext(TicketChoiceContext);
  return <>{ticketInformation ? <h1>hello</h1> : <TicketChoice />}</>;
}
