import { useLocation } from 'react-router-dom';
import { Item, ItemLink } from './ListOfMovis.styled';
import Movie from '../Movie';
import PropTypes from 'prop-types';

export default function ListOfContacts({ movies }) {
  const location = useLocation();
  return movies.map(movie => {
    return (
      <Item key={movie.id}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg'
          }
          alt={movie.title ?? movie.name}
          width="200"
        ></img>
        <ItemLink to={`${movie.id}`} state={{ from: location }} element={<Movie />}>
          {movie.title || movie.name}
        </ItemLink>
      </Item>
    );
  });
}

ListOfContacts.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
