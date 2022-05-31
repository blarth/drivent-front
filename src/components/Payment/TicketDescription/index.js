import { Box, Description, Price } from './style';
import Subtitle from '../../Dashboard/Subtitle';

export default function TicketDescription() {
  const type = 'Presencial';
  const hotel = 'Com Hotel';
  const price = '200,00';

  return (
    <>
      <Subtitle description="Ingresso escolhido" />
      <Box>
        <Description>
          {type} + {hotel}
        </Description>
        <Price>R${price}</Price>
      </Box>
    </>
  );
}
