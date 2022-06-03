/*eslint-disable*/
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import TicketChoiceContext from '../../contexts/TicketChoiceContext';
import useEnrollment from '../../hooks/api/useEnrollment';

import useGetTicket from '../../hooks/api/useTicket';
import MissingStep from '../MissingStep';
import HotelOptions from './HotelOptions';
import ReserveTicket from './ReserveTicket';
import TicketOptions from './TicketOptions';

export default function TicketChoice() {
  const { tickets, ticketsLoading, ticketsError } = useGetTicket();
  const { setTicketInformation } = useContext(TicketChoiceContext);

  const [userTicket, setUserTicket] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const { enrollment, enrollmentLoading } = useEnrollment();
  const [withHotel, setWithHotel] = useState(null);

  console.log(tickets);
  function handleChoice(hotel, price) {
    setWithHotel(hotel);
    const sumTicketHotel = parseInt(userTicket.price) + parseInt(price);
    setTotalPrice(sumTicketHotel);
  }

  function handleContext() {
    const data = {
      id: userTicket.id,
      name: userTicket.name || userTicket.Ticket.description,
      totalPrice,
      withHotel,
    };
    setTicketInformation(data);
  }

  return (
    <>
      {enrollmentLoading ? (
        <h1>Carregando...</h1>
      ) : enrollment ? (
        <Container>
          <TicketOptions
            setTotalPrice={setTotalPrice}
            tickets={tickets}
            userTicket={userTicket}
            setUserTicket={setUserTicket}
            ticketsLoading={ticketsLoading}
            setWithHotel={setWithHotel}
          />
          {userTicket === null ? (
            <></>
          ) : userTicket?.Ticket.isVirtual === false ? (
            <HotelOptions
              tickets={tickets}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              userTicket={userTicket}
              withHotel={withHotel}
              handleChoice={handleChoice}
            />
          ) : (
            <></>
          )}
          {userTicket?.Ticket.isVirtual === true ? (
            <ReserveTicket totalPrice={totalPrice} userTicket={userTicket} handleContext={handleContext} />
          ) : typeof withHotel === 'boolean' ? (
            <ReserveTicket totalPrice={totalPrice} userTicket={userTicket} handleContext={handleContext} />
          ) : (
            <></>
          )}
        </Container>
      ) : (
        <MissingStep message={'Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso'} />
      )}
    </>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
`;
export const OptionsContainer = styled.div`
  display: flex;
  height: 145px;
  gap: 24px;
  margin-bottom: 44px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 145px;
  width: 145px;
  border-radius: 20px;
  border: 1px solid #cecece;
  ${(props) => (props.active ? 'background-color:#FFEED2;' : '')};

  &:hover {
    background-color: #ccc;
  }
`;

export const OptionTitle = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  color: #454545;
  text-align: center;
`;

export const OptionPrice = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 16.41px;
  color: #898989;
  text-align: center;
`;

export const Button = styled.button`
  height: 37px;
  width: 162px;
  border-radius: 4px;
  background-color: #e0e0e0;
`;
