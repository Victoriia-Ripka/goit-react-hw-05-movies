import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchFilmsByQuery } from 'api/api';
import ListOfContacts from '../components/listOfMovies';
import Movie from '../components/Movie';

export default function Movies({ movie }) {
  const [query, setQuery] = useState('');
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState(null);

  const handleChange = e => {
    setValue(e.target.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(value);
    setValue('');
  };

  useEffect(() => {
    if (query !== '') {
      fetchFilmsByQuery(query).then(data => setMovies(data));
      // console.log(movies);
    }
  }, [query]);

  return (
    <main>
      {movie && <Movie movie={movie} />}
      {!movie && (
        <form onSubmit={handleSubmit}>
          <input type="text" value={value} onChange={handleChange}></input>
          <button type="submit">Search</button>
        </form>
        // коли іде пошук, то в маршрутизації додається
      )}
      {movies && <ListOfContacts movies={movies} />}
      <Outlet />
    </main>
  );
}
