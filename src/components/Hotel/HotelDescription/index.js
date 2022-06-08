import { useEffect, useState } from 'react';
import { Box } from './style';

export default function HotelDescription({ hotel, selectedHotel, handleChoice }) {
  const [roomStyleString, setRoomStyleString] = useState('');
  const { id, imagePath, name, roomStyle, openSlots } = hotel;

  useEffect(() => {
    if (roomStyle) {
      let str = '';
      for (let i = 0; i < roomStyle?.length; i++) {
        if (roomStyle.length === 1) return roomStyle[0];

        if (i === roomStyle.length - 1) {
          str += ' e ' + roomStyle[i];
        } else if (i === roomStyle.length - 2) {
          str += roomStyle[i];
        } else {
          str += roomStyle[i] + ', ';
        }
      }
      setRoomStyleString(str);
    }
  }, []);

  return (
    <Box onClick={() => handleChoice(id)} active={selectedHotel === id ? true : false}>
      <img src={imagePath} alt={name} />
      <h1>{name}</h1>
      <h2>Tipos de acomodação:</h2>
      <p>{roomStyleString}</p>
      <h2>Vagas disponíveis:</h2>
      <p>{openSlots}</p>
    </Box>
  );
}
