import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Movie from './Movie';
import Layout from 'pages/layout';
import { Review, Cast } from './MovieInfo';

export const App = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies/:movieID" element={<Movie/>} >
          <Route path="cast" element={<Cast/>}></Route>
          <Route path="reviews" element={<Review/>}></Route>
        </Route>
        <Route path="/movies" element={<Movies/>}></Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
