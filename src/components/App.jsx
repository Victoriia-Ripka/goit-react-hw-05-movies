import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Review, Cast } from './MovieInfo/MovieInfo';
import { NotFound } from 'pages/NotFound/NotFound';
const Layout = React.lazy(() => import('components/Layout'));
const Home = React.lazy(() => import('../pages/Home/Home'));
const Movies = React.lazy(() => import('../pages/Movies/Movies'));
const Movie = React.lazy(() => import('./Movie/Movie'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/movies/:movieID" element={<Movie />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Review />}></Route>
            </Route>
            <Route path="/movies" element={<Movies />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
