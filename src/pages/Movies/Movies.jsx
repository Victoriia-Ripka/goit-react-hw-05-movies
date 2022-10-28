import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Main, Input, Form, Button, List } from './Movies.styled';
import PropTypes from 'prop-types';
import { fetchFilmsByQuery } from 'api/api';
const ListOfContacts = React.lazy(() =>
  import('../../components/ListOfMovies/listOfMovies')
);
const Movie = React.lazy(() => import('../../components/Movie/Movie'));

export default function Movies({ movie }) {
  const [query, setQuery] = useState('');
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = e => {
    const query = e.target.value.toLowerCase().trim();
    setValue(query);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(value);
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
    setValue('');
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) fetchFilmsByQuery(query).then(data => setMovies(data));
  }, [searchParams]);

  useEffect(() => {
    if (query !== '') {
      fetchFilmsByQuery(query).then(data => setMovies(data));
    }
  }, [query]);

  return (
    <Main>
      <Suspense>
        {movie && <Movie />}
        {!movie && (
          <Form onSubmit={handleSubmit}>
            <Input type="text" value={value} onChange={handleChange}></Input>
            <Button type="submit">Search</Button>
          </Form>
        )}
        {movies && (
          <List>
            <ListOfContacts movies={movies} />
          </List>
        )}
      </Suspense>
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
