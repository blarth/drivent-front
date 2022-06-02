import Title from '../../../components/Dashboard/Title';
import TicketDescription from '../../../components/Payment/TicketDescription';
import TicketChoice from '../../../components/TicketChoice';
import TicketChoiceContext from '../../../contexts/TicketChoiceContext';
import { useContext } from 'react';

export default function Payment() {
  const { ticketInformation } = useContext(TicketChoiceContext);
  return <>{ticketInformation
    ? <>
      <Title description="Ingresso e pagamento" />
      <TicketDescription />
    </>
    : <TicketChoice />}</>;
}
