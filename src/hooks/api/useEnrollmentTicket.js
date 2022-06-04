import useAsync from '../useAsync';
import useToken from '../useToken';

import * as enrollmentTicket from '../../services/enrollmentTicketApi';

export default function useEnrollmentTicket(body, flag) {
  const token = useToken();

  const {
    data: enrollmentTicketData,
    loading: enrollmentTicketLoading,
    error: enrollmentTicketError,
    act: getEnrollmentTicket,
  } = useAsync(() => enrollmentTicket.purchase(body, token), flag);

  return {
    enrollmentTicketData,
    enrollmentTicketLoading,
    enrollmentTicketError,
    getEnrollmentTicket,
  };
}
