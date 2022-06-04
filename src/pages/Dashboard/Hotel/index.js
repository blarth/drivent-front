import { useContext } from 'react';
import PurchasedTicketContext from '../../../contexts/PurchasedTicketContext';

export default function Hotel() {
  const {
    ticketPurchasedInformationStorage: { id, withHotel },
  } = useContext(PurchasedTicketContext);

  return (
    <>
      {!id ? <p>Não possui ingresso ainda</p> : withHotel ? <p>Exibir Hotéis</p> : <p>Seu ingresso não inclui hotel</p>}
    </>
  );
}
