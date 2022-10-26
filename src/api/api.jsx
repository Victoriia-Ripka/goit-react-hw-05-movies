const API_KEY = '17597607a7e9f9b73df9de702b9fce6a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchFilms = () => {
  fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
    .then(r => r.json())
    .then(console.log);
};
