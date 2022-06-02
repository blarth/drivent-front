import api from './api';

export async function insertPayment(body, token) {
  const response = await api.post('/payments', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
//
