import { Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchFilm } from 'api/api';
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
} from './Movie.styled';

export default function Movie() {
  const movieID = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchFilm(movieID.movieID).then(data => setMovie(data));
  }, [movieID.movieID]);

  if (!movie) {
    return;
  } else
    return (
      <main>
        <GoBack to={backLinkHref}>Go back</GoBack>
        <MainSection>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg'
            }
            alt={movie.title ?? movie.name}
            width="200"
          ></img>
          <MainInformation>
            <FilmTitle>
              {movie.title || movie.name} ({movie.release_date.slice(0, 4)})
            </FilmTitle>
            <BoldText color='orange'>
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
                <InfoLink to="cast">Cast</InfoLink>
              </li>
              <li>
                <InfoLink to="reviews">Reviews</InfoLink>
              </li>
            </InfoList>
            <Outlet />
          </InfoDiv>
        </InfoSection>
      </main>
    );
}