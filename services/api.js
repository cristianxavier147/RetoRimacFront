import axios from 'axios';

const BASE_URL = 'https://rimac-front-end-challenge.netlify.app/api';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, //
});

export const fetchUserData = async () => {
  try {
    const response = await api.get('/user.json');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchPlansData = async () => {
  try {
    const response = await api.get('/plans.json');
    return response.data;
  } catch (error) {
    throw error;
  }
};
