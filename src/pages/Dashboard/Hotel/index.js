import { useContext } from 'react';
import PurchasedTicketContext from '../../../contexts/PurchasedTicketContext';
import Title from '../../../components/Dashboard/Title';
import { Box } from './style';
import HotelInformation from '../../../components/Hotel/HotelInformation';

export default function Hotel() {
  const {
    ticketPurchasedInformationStorage: { id, withHotel },
  } = useContext(PurchasedTicketContext);

  return (
    <>
      <Title description={'Escolha de hotel e quarto'} />
      {!id ? (
        <Box>
          <p>Você precisa ter confirmado pagamento antes</p>
          <p>de fazer a escolha de hospedagem</p>
        </Box>
      ) : !withHotel ? (
        <Box>
          <p>Sua modalidade de ingresso não inclui hospedagem</p>
          <p>Prossiga para a escolha de atividades</p>
        </Box>
      ) : (
        <HotelInformation />
      )}
    </>
  );
}
