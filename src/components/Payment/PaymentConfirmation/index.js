import { Box, Icon, ConfirmationTitle, Paragraph } from './style';
import Subtitle from '../../Dashboard/Subtitle';
import ConfirmationIcon from '../../../assets/images/confirmationIcon.png';

export default function PaymentConfirmation() {
  return (
    <Box>
      <Subtitle description={'Pagamento'} />
      <div>
        <Icon src={ConfirmationIcon} />
        <div>
          <ConfirmationTitle>Pagamento confirmado!</ConfirmationTitle>
          <Paragraph>Prossiga para escolha de hospedagem e atividades</Paragraph>
        </div>
      </div>
    </Box>
  );
}
