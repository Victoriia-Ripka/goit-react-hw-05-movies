import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Main, Input, Form, Button, List } from './Movies.styled';
import PropTypes from 'prop-types';
import { fetchFilmsByQuery } from 'api/api';
import ListOfContacts from '../../components/ListOfMovies/listOfMovies';
import Movie from '../../components/Movie/Movie';

export default function Movies({ movie }) {
  const [query, setQuery] = useState('');
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

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
    const query = location.search.slice(7, [location.search.length]);
    if(query) fetchFilmsByQuery(query).then(data => setMovies(data));
  }, [location.search]);

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
      )}
      {movies && (
        <List>
          <ListOfContacts movies={movies} />
        </List>
      )}
      {/* {visibleMovies && (
        <List>
          <ListOfContacts movies={visibleMovies} />
        </List>
      )} */}
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
