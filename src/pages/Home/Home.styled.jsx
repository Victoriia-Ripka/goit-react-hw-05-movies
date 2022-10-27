import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h1`
  margin: 0 auto 15px;
  font-size: 26px;
  font-weight: 500;
  font-weight: 700;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  gap: 10px;
  justify-content: center;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 20px) / 6);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ItemLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  margin: 5px 0 0;
`;
