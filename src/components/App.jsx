import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Movie from './Movie';
import AppBar from 'pages/AppBar';
import ListOfContacts from './listOfMovies';
import { Review, Cast } from './MovieInfo';
import { useState } from 'react';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  const [movies, setMovies] = useState(null);
  return (
    <div> 
      <AppBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movies/:movieID" element={<Movie/>} >
          <Route path="cast" element={<Cast/>}></Route>
          <Route path="reviews" element={<Review/>}></Route>
        </Route>
        <Route path="/movies" element={<Movies setMovies={setMovies}/>}>
          <Route path=":query" element={<ListOfContacts movies={movies}/>} ></Route>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
};
