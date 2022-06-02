import Title from '../../../components/Dashboard/Title';
import CardInsertionForm from '../../../components/Payment/CardInsertionForm';
import TicketDescription from '../../../components/Payment/TicketDescription';

export default function Payment() {
  return (
    <>
      <Title description="Ingresso e pagamento" />
      <TicketDescription />
      <CardInsertionForm />
    </>
  );
}
