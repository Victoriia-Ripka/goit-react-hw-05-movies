import { Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchFilm, fetchSimilarFilms } from 'api/api';
import {
  GoBack,
  MainSection,
  FilmTitle,
  InfoSection,
  MainInformation,
  BoldText,
  NormalText,
  InfoList,
  InfoLink,
  InfoDiv,
  Img,
  Main,
  List,
  ItemList,
  Aside,
  ItemLink,
} from './Movie.styled';

export default function Movie() {
  const movieID = useParams();
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchFilm(movieID.movieID).then(data => setMovie(data));
    fetchSimilarFilms(movieID.movieID).then(data => setSimilarMovies(data));
    console.log(similarMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieID.movieID]);

  if (!movie) {
    return;
  } else
    return (
      <Main>
        <div>
          <GoBack to={backLinkHref}>Go back</GoBack>
          <MainSection>
            <Img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg'
              }
              alt={movie.title ?? movie.name}
              width="200"
            ></Img>
            <MainInformation>
              <FilmTitle>
                {movie.title || movie.name} ({movie.release_date.slice(0, 4)})
              </FilmTitle>
              <BoldText color="orange">
                User Score: {Math.round(movie.vote_average * 10)}%
              </BoldText>
              <BoldText>Overview</BoldText>
              <NormalText>{movie.overview}</NormalText>
              <BoldText>Ganres</BoldText>
              <NormalText>
                {movie.genres.map(genre => (
                  <span key={genre.id}>{genre.name} </span>
                ))}
              </NormalText>
            </MainInformation>
          </MainSection>

          <InfoSection>
            <BoldText>Additional information</BoldText>
            <InfoDiv>
              <InfoList>
                <li>
                  <InfoLink to="cast" state={{ from: backLinkHref }}>
                    Cast
                  </InfoLink>
                </li>
                <li>
                  <InfoLink to="reviews" state={{ from: backLinkHref }}>
                    Reviews
                  </InfoLink>
                </li>
              </InfoList>
              <Outlet />
            </InfoDiv>
          </InfoSection>
        </div>
        <Aside>
          <h3>Similar movies</h3>
          <List>
            {similarMovies &&
              similarMovies.map(movie => {
                return (
                  <ItemList key={movie.id}>
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                          : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg'
                      }
                      alt={movie.title ?? movie.name}
                      width="90"
                    ></img>
                    <ItemLink
                      to={`${movie.id}`}
                      state={{ from: location }}
                      element={<Movie />}
                    >
                      {movie.title || movie.name}
                    </ItemLink>
                  </ItemList>
                );
              })}
          </List>
        </Aside>
      </Main>
    );
}
