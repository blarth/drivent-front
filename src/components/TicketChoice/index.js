/*eslint-disable*/
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import useGetTicket from '../../hooks/api/useTicket';
import HotelOptions from './HotelOptions';
import TicketOptions from './TicketOptions';

export default function TicketChoice() {
  //   const {tickets, ticketsLoading, ticketsError} = useGetTicket();

  //   useEffect(() => {
  //     if (tickets) {
  //       console.log('tickets');
  //     }
  //   });

  const tickets = [
    {id: 1, name: 'Presencial', price: '250', hotelPrice: 350},
    {id: 2, name: 'Online', price: '100', hotelPrice: 0},
  ];
  const [userTicket, setUserTicket] = useState(null);
  const [hotelPrice, setHotelPrice] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(hotelPrice);
  return (
    <Container>
      <TicketOptions tickets={tickets} userTicket={userTicket} setUserTicket={setUserTicket} />
      {userTicket === null ? (
        <></>
      ) : (
        <HotelOptions tickets={tickets} hotelPrice={hotelPrice} setHotelPrice={setHotelPrice} userTicket={userTicket} />
      )}
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 44px;
`;
export const OptionsContainer = styled.div`
  display: flex;
  height: 145px;
  gap: 24px;
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
  font-size: 19px;
  weight: 400;
  line-height: 18.75px;
  color: #454545;
  text-align: center;
`;

export const OptionPrice = styled.span`
  font-size: 16px;
  weight: 400;
  line-height: 16.41px;
  color: #898989;
  text-align: center;
`;
