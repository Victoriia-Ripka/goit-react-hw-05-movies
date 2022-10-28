import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchFilms } from 'api/api';
import { Main, SectionTitle, List, Item, ItemLink } from './Home.styled';
const Movie = React.lazy(() => import('components/Movie/Movie'));

export default function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchFilms().then(data => setMovies([...data]));
  }, []);

  return (
    <Main>
      <Suspense>
        <SectionTitle> Trending today</SectionTitle>
        <List>
          {movies.length &&
            movies.map(({ id, title, name, poster_path }) => {
              return (
                <Item key={id}>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg'
                    }
                    alt={title ?? name}
                    width="200"
                  ></img>
                  <ItemLink
                    to={`movies/${id}`}
                    state={{ from: location }}
                    element={<Movie />}
                  >
                    {title || name}
                  </ItemLink>
                </Item>
              );
            })}
        </List>
      </Suspense>
    </Main>
  );
}
