import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
