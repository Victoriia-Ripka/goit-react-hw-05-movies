import { Routes, Route, NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const App = () => {
  const StyledLink = styled.NavLink`
    color: black;

    &.active {
      color: orange;
    }
  `;


  return (
    <div>
      <nav>
        <StyledLink to="/" end> Home </StyledLink>
        <StyledLink to="about">Movies</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>homepage</div>}></Route>
        {/* <Route path='/' end? element={<Home/>}></Route> */}
        {/* <Route path='/about' element={<Movies/>}></Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
