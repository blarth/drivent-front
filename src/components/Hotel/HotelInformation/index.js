import { Box } from './style';
import Subtitle from '../../Dashboard/Subtitle';
import useGetHotels from '../../../hooks/api/useHotels';
import HotelDescription from '../HotelDescription';
import { useState } from 'react';

export default function HotelInformation() {
  const { hotels, hotelsLoading } = useGetHotels();
  const [selectedHotel, setSelectedHotel] = useState(0);

  function handleChoice(id) {
    setSelectedHotel(id === selectedHotel ? 0 : id);
    console.log('HotelId: ' + id);
  }

  return (
    <>
      {hotelsLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <>
          <Subtitle description={'Primeiro, escolha seu hotel'} />
          <Box>
            {hotels.map((hotel) => {
              return (
                <HotelDescription
                  key={hotel.id}
                  hotel={hotel}
                  selectedHotel={selectedHotel}
                  handleChoice={handleChoice}
                />
              );
            })}
          </Box>
        </>
      )}
    </>
  );
}
