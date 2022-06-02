import Subtitle from '../../Dashboard/Subtitle';
import { Box, CardInfos, Form } from './style';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useState } from 'react';
import usePayment from '../../../hooks/api/usePayment';
import ButtonBox from '../../Dashboard/Button';

export default function CardInsertionForm() {
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

  return (
    <>
      <Box>
        <Subtitle description={'Pagamento'} />
        <CardInfos>
          <Cards cvc={state.cvc} expiry={state.expiry} focused={state.focus} name={state.name} number={state.number} />
          <Form>
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
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <div>
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
      <ButtonBox description={'FINALIZAR PAGAMENTO'} />
    </>
  );
}
