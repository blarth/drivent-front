import { Box, Description, Price } from './style';
import Subtitle from '../../Dashboard/Subtitle';

export default function TicketDescription({ name, totalPrice, withHotel }) {
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
