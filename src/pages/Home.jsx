import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { fetchFilms } from 'api/api';
import Movie from 'components/Movie';

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetchFilms().then(data => setMovies([...data]));
    }, []);

  return (
    <main>
      <h1> Trending today</h1>
      <div>
        <ul>
          {movies.length &&
            movies.map(({ id, title, name }) => {
              return (
                <li key={id}>
                  <Link to={`movies/${id}`} element={<Movie/>}>{title || name}</Link>
                </li>
              );
            })}
        </ul>
      </div>
    </main>
  );
}

// Home.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string,
//       name: PropTypes.string,
//     })
//   ).isRequired,
// };
