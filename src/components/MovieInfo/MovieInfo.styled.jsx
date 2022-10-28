import styled from '@emotion/styled';

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

export const Text = styled.h2`
  margin: 50px;
  font-size: 18px;
  font-weight: 500;
`;
export const ListReview = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
`;

export const ItemReview = styled.li`
  margin: 0 0 23px 0;
`;

export const AuthorReview = styled.h3`
  font-weight: 700;
  margin: 0 0 13px 0;
  font-size: 20px;
`;

export const TextReview = styled.p`
  max-width: 800px;
  margin: 0;
  font-size: 18px;
`;
