import { fetchFilms } from 'api/api';

export default function Home() {
  fetchFilms();

  return (
    <>
      <p>Home</p>
    </>
  );
}
