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

export const fetchFilm = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    const result = await response.data;
    return result;
  } catch (error) {
    alert(error);
  }
};

export const fetchFilmCast = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    const result = await response.data.cast;
    return result;
  } catch (error) {
    alert(error);
  }
};

export const fetchFilmReviews = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    const result = await response.data.results;
    return result;
  } catch (error) {
    alert(error);
  }
};

export const fetchFilmsByQuery = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1`
  );
  const result = await response.data.results;
  return result;
};
