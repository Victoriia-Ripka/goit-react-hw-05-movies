import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchFilmCast, fetchFilmReviews } from 'api/api';
import {
  List,
  Item,
  Text,
  ListReview,
  ItemReview,
  TextReview,
  AuthorReview,
} from './MovieInfo.styled';

export const Review = () => {
  const [reviews, setReviews] = useState(null);
  const id = useParams();

  useEffect(() => {
    fetchFilmReviews(id.movieID).then(data => setReviews(data));
  }, [id.movieID]);

  if (reviews === null || reviews.length === 0) {
    return <Text>We don't have any reviews for this film</Text>;
  } else
    return (
      <ListReview>
        {reviews.map(review => {
          return (
            <ItemReview key={review.id}>
              <AuthorReview>{review.author}</AuthorReview>
              <TextReview>{review.content}</TextReview>
            </ItemReview>
          );
        })}
      </ListReview>
    );
};

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const id = useParams();

  useEffect(() => {
    fetchFilmCast(id.movieID).then(data => setCast(data));
  }, [id.movieID]);

  if (cast === null || cast.length === 0) {
    return <Text>We don't have infrmation of cast for this film</Text>;
  } else
    return (
      <List>
        {cast &&
          cast.map(actor => {
            return (
              <Item key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYXiyVZD6p-PkavxGCLx5wb2oF0KQaS2NHSttwQnkfEM5ouo_8aEBT_oVlyvq8ybv4DE&usqp=CAU'
                  }
                  alt={actor.name}
                  width="100"
                ></img>
                <p>{actor.name}</p>
              </Item>
            );
          })}
      </List>
    );
};
