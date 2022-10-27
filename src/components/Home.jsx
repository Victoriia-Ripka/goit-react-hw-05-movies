import { Link } from 'react';
import PropTypes from 'prop-types';

export default function Home({ movies }) {
  return (
    <main>
      <h1> Trending today</h1>
      <div>
        <ul>
          {movies.length &&
            movies.map(({ id, title, name }) => {
              console.log(id);
              return (
                <li key={id}>
                  <Link to={`${id}`}>{title || name}</Link>
                </li>
              );
            })}
        </ul>
      </div>
    </main>
  );
}

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
