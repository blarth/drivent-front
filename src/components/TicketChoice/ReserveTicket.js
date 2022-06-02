/*eslint-disable*/
import Button from '../Form/Button';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Subtitle from '../Dashboard/Subtitle'
import { OptionsContainer, Box, OptionTitle, OptionPrice } from './index';
export default function ReserveTicket({ userTicket, totalPrice, handleContext }) {
  return (
    <>
      <Subtitle description={`Fechado! O total ficou em R$${totalPrice}. Agora é só confirmar:`} />
      <SubmitContainer>
        <Button type="submit" onClick={handleContext} disabled={false}>
          Reservar Ingresso
        </Button>
      </SubmitContainer>
    </>
  );
}

const SubmitContainer = styled.div`
  width: 100% !important;

  > button {
    margin-top: 0 !important;
  }
`;
