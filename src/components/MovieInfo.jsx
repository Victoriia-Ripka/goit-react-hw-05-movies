import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchFilmCast, fetchFilmReviews } from 'api/api';

export const Review = () => {
  const [reviews, setReviews] = useState(null);
  const id = useParams();

  useEffect(() => {
    fetchFilmReviews(id.movieID).then(data => setReviews(data));
  }, [id.movieID]);
  
  if (reviews === null) {
    // console.log(reviews)
    return <p>We don't have any reviews for this film</p>;
  } else
    return (
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    );
};

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const id = useParams();

  useEffect(() => {
    fetchFilmCast(id.movieID).then(data => setCast(data));
  }, [id.movieID]);

  if (!cast) {
    return <p>We don't have infrmation of cast for this film</p>;
  } else
    return (
      <ul>
        {cast &&
          cast.map(actor => {
            return (
              <li key={actor.id}>
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
              </li>
            );
          })}
      </ul>
    );
};
