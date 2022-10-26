import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import styled from '@emotion/styled';

export const App = () => {
  const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: orange;
    }

    &:hover{
      color: green;
    }
  `;


  return (
    <div>
      <nav>
        <StyledLink to="/" end> Home </StyledLink>
        <StyledLink to="movies">Movies</StyledLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
