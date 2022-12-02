import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 1800px;
`;

export const GoBack = styled(Link)`
  text-decoration: none;
  background-color: grey;
  padding: 5px;
  border-radius: 3px;
  color: white;
  margin: 10px;
  display: inline-block;
  width: 70px;
  align-items: center;
  justify-content: center;

  :hover,
  :focus {
    background-color: orange;
  }
`;

export const MainSection = styled.section`
  display: flex;
  align-items: flex-start;
  margin: 0px 10px;
  max-width: 900px;
`;

export const Img = styled.img`
  width: 250px;
  object-fit: contain;
`;

export const MainInformation = styled.div`
  padding: 0px 50px;
`;

export const FilmTitle = styled.h1`
  margin: 0 auto 15px;
  font-size: 26px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const BoldText = styled.p`
  font-weight: 700;
  margin: 0 0 13px 0;
  font-size: 20px;
`;

export const NormalText = styled.p`
  margin: 0 0 23px 0;
  font-size: 18px;
`;

export const InfoSection = styled.section`
  margin: 0 10px;
  padding: 30px 0;
`;

export const InfoDiv = styled.div`
  display: flex;
  max-width: 886px;
`;

export const InfoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
export const InfoLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 500;
  :hover,
  :focus {
    color: orange;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  gap: 2px;
  justify-content: center;
`;

export const ItemList = styled.li`
  flex-basis: calc((100%-16px) / 6);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 16px;
  margin: 5px 0 0;
  padding: 3px 15px;

  :hover,
  :focus {
    color: orange;
  }
`;
