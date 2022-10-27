import { Link, Outlet } from 'react-router-dom';
import Movie from '../components/Movie';
export default function Movies({movie}) {
  return (
    <main>
      {movie && <Movie movie={movie} />}
      {!movie && (
        <form>
          <input type="text"></input>
          <button type="submit">Search</button>
        </form>
        // коли іде пошук, то в маршрутизації додається
      )}
      <Outlet/>
    </main>
  );
}
