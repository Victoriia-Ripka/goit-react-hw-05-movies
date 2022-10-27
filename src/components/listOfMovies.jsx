// import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Movie from './Movie';

export default function ListOfContacts({movies}) {
    // const query = useParams ();
    return movies.map(movie => {
        return (
          <li key={movie.id}>
            <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg'
          }
          alt={movie.title ?? movie.name}
          width="200"
        ></img>
            <Link to={`${movie.id}`} element={<Movie/>}>{movie.title || movie.name}</Link>
          </li>
        );
    })
}