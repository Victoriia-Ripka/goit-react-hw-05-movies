import styled from '@emotion/styled';

export const Main = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Form = styled.form`
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 200px;
  font-size: 20px;
  padding: 5px;
  border: solid 2px orange;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: white;
  color: black;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 3px;
  border: solid 2px orange;
  :hover,
  :focus {
    background-color: orange;
    color: white;
  }
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
