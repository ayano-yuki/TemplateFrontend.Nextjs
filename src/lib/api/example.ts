import apiClient from './client';

export const fetchExample = async () => {
  const response = await apiClient.get('/example');
  return response.data;
};
