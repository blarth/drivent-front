import useAsync from '../useAsync';

import * as hotelApi from '../../services/hotelApi';

export default function useGetHotels() {
  const { data: hotels, loading: hotelsLoading, error: hotelsError, act: getHotels } = useAsync(() => hotelApi.get());

  return {
    hotels,
    hotelsLoading,
    hotelsError,
    getHotels,
  };
}
