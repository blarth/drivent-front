import Title from '../../../components/Dashboard/Title';
import CardInsertionForm from '../../../components/Payment/CardInsertionForm';
import TicketDescription from '../../../components/Payment/TicketDescription';
import TicketChoice from '../../../components/TicketChoice';
import { useContext } from 'react';
import TicketChoiceContext from '../../../contexts/TicketChoiceContext';
import PurchasedTicketContext from '../../../contexts/PurchasedTicketContext';
import PaymentConfirmation from '../../../components/Payment/PaymentConfirmation';

export default function Payment() {
  const { ticketInformation } = useContext(TicketChoiceContext);
  const { ticketPurchasedInformationStorage } = useContext(PurchasedTicketContext);

  return (
    <>
      {ticketInformation ? (
        <>
          <Title description="Ingresso e Pagamento" />
          <TicketDescription
            name={ticketInformation.name}
            totalPrice={ticketInformation.totalPrice}
            withHotel={ticketInformation.withHotel}
          />
          {ticketPurchasedInformationStorage.id ? <PaymentConfirmation /> : <CardInsertionForm />}
        </>
      ) : (
        <TicketChoice />
      )}
    </>
  );
}
