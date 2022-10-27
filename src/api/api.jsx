import axios from 'axios';

const API_KEY = '17597607a7e9f9b73df9de702b9fce6a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchFilms = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
  const result = await response.data.results;
  return result;
};
