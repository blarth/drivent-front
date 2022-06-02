/*eslint-disable*/

import React, { useState, useEffect } from 'react';
import Subtitle from '../Dashboard/Subtitle';
import { OptionsContainer, Box, OptionTitle, OptionPrice } from './index';
import ReserveTicket from './ReserveTicket';
export default function HotelOptions({ totalPrice, userTicket, withHotel, handleChoice }) {
  return (
    <>
      <Subtitle description="Ótimo! Agora escolha sua modalidade de hospedagem" />
      <OptionsContainer>
        <Box onClick={(e) => handleChoice(false, 0)} active={withHotel === null ? false : withHotel ? false : true}>
          <OptionTitle>Sem Hotel</OptionTitle>
          <OptionPrice>+ R$ 0</OptionPrice>
        </Box>
        <Box
          onClick={(e) => handleChoice(true, userTicket.hotelPrice)}
          active={withHotel === null ? false : withHotel ? true : false}
        >
          <OptionTitle>Com Hotel</OptionTitle>
          <OptionPrice>+ R${userTicket.hotelPrice}</OptionPrice>
        </Box>
      </OptionsContainer>
    </>
  );
}
