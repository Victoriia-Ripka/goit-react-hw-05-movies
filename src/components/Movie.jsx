import { Link, Outlet } from 'react-router-dom';

export default function Movie({ id }) {
  return (
    <>
      <button>Go back</button>
      <img src="" alt="" />
      <h2>Title</h2>
      <p>User Score: {}</p>
      <p>Overwiev</p>
      <p>{}</p>
      <p>Ganres</p>
      <p>{}</p>

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
    </>
  );
}
