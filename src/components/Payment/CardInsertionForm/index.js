import Subtitle from '../../Dashboard/Subtitle';
import { Box, CardInfos, Form, Card } from './style';
import 'react-credit-cards/es/styles-compiled.css';
import { useState } from 'react';
import useEnrollmentTicket from '../../../hooks/api/useEnrollmentTicket';
import ButtonBox from '../../Dashboard/Button';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import TicketChoiceContext from '../../../contexts/TicketChoiceContext';
import PurchasedTicketContext from '../../../contexts/PurchasedTicketContext';

export default function CardInsertionForm() {
  const {
    ticketInformation: { withHotel, id: eventTicketId },
  } = useContext(TicketChoiceContext);

  const { saveTicketPurchasedInformation } = useContext(PurchasedTicketContext);

  const { getEnrollmentTicket } = useEnrollmentTicket({ eventTicketId, withHotel }, false);

  const [state, setState] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  function handleInputFocus(e) {
    setState({ ...state, focus: e.target.name });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  }

  async function submit(event) {
    event.preventDefault();

    try {
      const response = await getEnrollmentTicket({ eventTicketId, withHotel }, true);
      saveTicketPurchasedInformation(response);
      toast('Compra realizada com sucesso!');
    } catch (err) {
      if (err.response.data.message) {
        toast(err.response.data.message);
      } else {
        toast('Tente novamente!');
      }
    }
  }

  return (
    <>
      <Box>
        <Subtitle description={'Pagamento'} />
        <CardInfos>
          <Card cvc={state.cvc} expiry={state.expiry} focused={state.focus} name={state.name} number={state.number} />
          <Form>
            <div className="column">
              <input
                required
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                maxLength="16"
              />
              <p>E.g.: 49..., 51..., 36..., 37...</p>
            </div>
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <div className="line">
              <input
                required
                type="tel"
                name="expiry"
                placeholder="Valid Thru"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                maxLength="4"
              />
              <input
                required
                type="tel"
                name="cvc"
                placeholder="CVC"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                maxLength="3"
              />
            </div>
          </Form>
        </CardInfos>
      </Box>
      <ButtonBox description={'FINALIZAR PAGAMENTO'} click={submit} />
    </>
  );
}
