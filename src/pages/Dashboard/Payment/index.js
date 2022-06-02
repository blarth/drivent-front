import Title from '../../../components/Dashboard/Title';
import CardInsertionForm from '../../../components/Payment/CardInsertionForm';
import TicketDescription from '../../../components/Payment/TicketDescription';
import TicketChoice from '../../../components/TicketChoice';
import TicketChoiceContext from '../../../contexts/TicketChoiceContext';
import { useContext } from 'react';

export default function Payment() {
  const { ticketInformation } = useContext(TicketChoiceContext);
  return <>{ticketInformation
    ? <>
      <Title description="Ingresso e Pagamento" />
      <TicketDescription />
      <CardInsertionForm />
    </>
    : <TicketChoice />}</>;
}
