import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64023428f61d96ac4865f91d.mockapi.io/api/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};
