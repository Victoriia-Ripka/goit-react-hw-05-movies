import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// , useLocation
import { Main, Input, Form, Button, List } from './Movies.styled';
import PropTypes from 'prop-types';
import { fetchFilmsByQuery } from 'api/api';
import ListOfContacts from '../../components/ListOfMovies/listOfMovies';
import Movie from '../../components/Movie/Movie';

export default function Movies({ movie }) {
  // const location = useLocation();
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

  const propsForMovie = searchParams.get('query');
  console.log(propsForMovie);

  return (
    <Main>
      {movie && <Movie/>}
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
