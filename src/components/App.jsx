import { Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home';
import Movies from './Movies';
import { fetchFilms } from 'api/api';
import styled from '@emotion/styled';

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchFilms().then(data => setMovies([...data]));
  }, []);

  const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: orange;
    }

    :hover:not(.acive),
    :focus-visible:not(.active) {
      color: green;
    }
  `;

  return (
    <div>
      <header>
        <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="movies">Movies</StyledLink>
      </nav>
      </header>
      
      <Routes>
        <Route path="/" element={<Home movies={movies} />}></Route>
        <Route path="/movies" element={<Movies />}>
          <Route path="cast" element={<p>cast</p>}></Route>
          <Route path="reviews" element={<p>rewiew</p>}></Route>
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
