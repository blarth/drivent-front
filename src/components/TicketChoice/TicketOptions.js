/*eslint-disable*/

import React, { useState, useEffect } from 'react';
import Subtitle from '../Dashboard/Subtitle';
import Title from '../Dashboard/Title';
import { OptionsContainer, Box, OptionTitle, OptionPrice } from './index';
import { useContext } from 'react';
import PurchasedTicketContext from '../../contexts/PurchasedTicketContext';
import PaymentConfirmation from '../Payment/PaymentConfirmation';
import TicketDescription from '../Payment/TicketDescription';

export default function TicketOptions({
  setWithHotel,
  setTotalPrice,
  tickets,
  userTicket,
  setUserTicket,
  ticketsLoading,
}) {
  function handleChoice(ticket) {
    setTotalPrice(ticket.price);
    setUserTicket(ticket);

    if (ticket.Ticket.isVirtual) {
      setWithHotel(false);
    }
  }

  const {
    ticketPurchasedInformationStorage: { id, withHotel, EventTicket },
  } = useContext(PurchasedTicketContext);

  function sumOfPrices() {
    if (withHotel) {
      return Number(EventTicket.price) + Number(EventTicket.Event.hotelPrice);
    }
    return Number(EventTicket.price);
  }

  return (
    <>
      {id ? (
        <>
          <Title description={'Ingresso e pagamento'} />
          <TicketDescription name={EventTicket.Ticket.description} totalPrice={sumOfPrices()} withHotel={withHotel} />
          <PaymentConfirmation />
        </>
      ) : (
        <>
          <Title description="Ingresso e Pagamento" />
          <Subtitle description="Primeiro, escolha sua modalidade de ingresso" />
          <OptionsContainer>
            {ticketsLoading ? (
              <h1>Carregando...</h1>
            ) : (
              tickets.map((ticket) => (
                <Box
                  key={ticket.id}
                  id={ticket.id}
                  onClick={(e) => handleChoice(ticket)}
                  active={userTicket ? (userTicket.id === ticket.id ? true : false) : false}
                >
                  <OptionTitle>{ticket.name || ticket.Ticket.description}</OptionTitle>
                  <OptionPrice>R${ticket.price}</OptionPrice>
                </Box>
              ))
            )}
          </OptionsContainer>
        </>
      )}
    </>
  );
}
