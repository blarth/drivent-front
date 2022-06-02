import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function usePayment() {
  const token = useToken();

  const {
    // data: enrollment,
    // loading: enrollmentLoading,
    // error: enrollmentError,
    // act: getEnrollment,
  } = useAsync(() => paymentApi.insertPayment(token));

  return {
    // enrollment,
    // enrollmentLoading,
    // enrollmentError,
    // getEnrollment,
  };
}
