import { Link, Outlet } from 'react-router-dom';
import Movie from './Movie'
export default function Movies() {
  const movie = { id: 1, name: 'hello'}
  return (
    <main>
      {movie && <Movie movie={movie}/>}
    </main>
  );
}
