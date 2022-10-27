import styled from '@emotion/styled';
import { Routes, Route, NavLink } from 'react-router-dom';


export const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: orange;
    }
`;
