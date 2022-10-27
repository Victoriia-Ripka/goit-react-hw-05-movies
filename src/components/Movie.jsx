import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchFilm } from 'api/api';

export default function Movie() {
  const movieID = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchFilm(movieID.movieID).then(data => setMovie(data));
  }, [movieID.movieID]);

  if (!movie) {
    return;
  } else
    return (
      <main>
        <button>Go back</button>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg'
          }
          alt={movie.title ?? movie.name}
          width="200"
        ></img>
        <div>
          <h2>
            {movie.title || movie.name} {movie.release_date.slice(0, 4)}
          </h2>
          <p>User Score: {Math.round(movie.vote_average * 100) / 100}</p>
          <p>Overview</p>
          <p>{movie.overview}</p>
          <p>Ganres</p>
          <p>
            {movie.genres.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
        </div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </main>
    );
}
