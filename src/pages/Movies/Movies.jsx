import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Main, Input, Form, Button, List } from './Movies.styled';
import PropTypes from 'prop-types';
import { fetchFilmsByQuery } from 'api/api';
import ListOfContacts from '../../components/ListOfMovies/listOfMovies';
import Movie from '../../components/Movie';

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
    }
  }, [query]);

  return (
    <Main>
      {movie && <Movie movie={movie} />}
      {!movie && (
        <Form onSubmit={handleSubmit}>
          <Input type="text" value={value} onChange={handleChange}></Input>
          <Button type="submit">Search</Button>
        </Form>
        // коли іде пошук, то в маршрутизації додається
      )}
      {movies && <List><ListOfContacts movies={movies} /></List> }
      <Outlet />
    </Main>
  );
}

Movies.propTypes = {
    movie: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string,
    }),
};