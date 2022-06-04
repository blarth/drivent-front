import api from './api';

export async function purchase(body, token) {
  const response = await api.post('/enrollment-tickets', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
//
