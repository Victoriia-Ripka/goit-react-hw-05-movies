import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchFilmCast, fetchFilmReviews } from 'api/api';

export const Review = () => {
  const [reviews, setReviews] = useState(null);
  const id = useParams();

  useEffect(() => {
    fetchFilmReviews(id.movieID).then(data => setReviews(data));
  }, [id.movieID]);
  console.log(reviews);

  if (!reviews) {
    return <p>We don't have any reviews for this film</p>;
  } else
    return (
      <ul>
        {reviews.map(review => {
          return <li key={review.id}><h3>{review.author}</h3><p>{review.content}</p></li>;
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
  console.log(cast);

  return (
    <ul>
      {cast &&
        cast.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={
                  actor.poster_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-actor-1-3.jpg'
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
