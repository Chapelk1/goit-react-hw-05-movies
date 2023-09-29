import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getApi } from 'api-tmdb';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import {Descr} from './Reviews.styled'



export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const [visibleText, setVisibleText] = useState(true);
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  
    useEffect(() => {
      getApi(url).then(r => {
        if (r.total_pages !== 0) {
          setReviews(r)
          setVisibleText(false)
          return;
        }

      });
    }, [url]);

  return (
    <>
      {visibleText && <Descr>We don`t have any reviews for this movie.</Descr>}
      {reviews && <ReviewsList reviews={reviews} />}
    </>
  )
}
