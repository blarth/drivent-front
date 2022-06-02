/*eslint-disable*/

import React, { useState, useEffect } from 'react';
import Subtitle from '../Dashboard/Subtitle';
import Title from '../Dashboard/Title';
import { OptionsContainer, Box, OptionTitle, OptionPrice } from './index';
export default function TicketOptions({ tickets, userTicket, setUserTicket, ticketsLoading }) {
  console.log('ticket ~> ', tickets);
  return (
    <>
      <Title description='Ingresso e Pagamento' />
      <Subtitle description='Primeiro, escolha sua modalidade de ingresso' />
      <OptionsContainer>
        {ticketsLoading
          ? <h1>Carregando...</h1>
          : tickets.map((ticket) => (
            <Box
              key={ticket.id}
              id={ticket.id}
              onClick={(e) => setUserTicket(ticket)}
              active={userTicket ? (userTicket.id === ticket.id ? true : false) : false}
            >
              <OptionTitle>{ticket.name || ticket.Ticket.description}</OptionTitle>
              <OptionPrice>R${ticket.price}</OptionPrice>
            </Box>
          ))}
      </OptionsContainer>
    </>
  );
}
