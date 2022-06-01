/*eslint-disable*/

import React, { useState, useEffect } from 'react';
import { OptionsContainer, Box, OptionTitle, OptionPrice } from './index';
import ReserveTicket from './ReserveTicket';
export default function HotelOptions({ totalPrice, userTicket, withHotel, handleChoice }) {
  return (
    <>
      <OptionsContainer>
        <Box onClick={(e) => handleChoice(false, 0)} active={withHotel ? false : true}>
          <OptionTitle>Sem Hotel</OptionTitle>
          <OptionPrice>+ R$ 0</OptionPrice>
        </Box>
        <Box onClick={(e) => handleChoice(true, userTicket.hotelPrice)} active={withHotel ? true : false}>
          <OptionTitle>Com Hotel</OptionTitle>
          <OptionPrice>+ R${userTicket.hotelPrice}</OptionPrice>
        </Box>
      </OptionsContainer>
    </>
  );
}
