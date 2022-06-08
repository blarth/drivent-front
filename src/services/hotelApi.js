import api from './api';

export async function get() {
  const response = await api.get('/hotels');
  return response.data;
}
