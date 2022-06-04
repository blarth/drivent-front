import { Box, Description, Price } from './style';
import Subtitle from '../../Dashboard/Subtitle';
import { useContext } from 'react';
import TicketChoiceContext from '../../../contexts/TicketChoiceContext';

export default function TicketDescription() {
  const {
    ticketInformation: { name, totalPrice, withHotel },
  } = useContext(TicketChoiceContext);

  function isWithHotel() {
    return withHotel ? 'Com Hotel' : 'Sem Hotel';
  }

  return (
    <>
      <Subtitle description="Ingresso escolhido" />
      <Box>
        <Description>
          {name} + {isWithHotel()}
        </Description>
        <Price>R${totalPrice}</Price>
      </Box>
    </>
  );
}
