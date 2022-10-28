import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import Movie from './Movie/Movie';
import AppBar from 'pages/AppBar/AppBar';
import { Review, Cast } from './MovieInfo/MovieInfo';
import { NotFound } from 'pages/NotFound/NotFound';

export const App = () => {
  return (
    <div> 
      <AppBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movies/:movieID" element={<Movie/>} >
          <Route path="cast" element={<Cast/>}></Route>
          <Route path="reviews" element={<Review/>}></Route>
        </Route>
        <Route path="/movies" element={<Movies/>}></Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
};
