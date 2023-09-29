import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getApi } from 'api-tmdb';
import CastsList from 'components/CastsList/CastsList';




export default function Cast() {
    const { movieId } = useParams();
    const [casts, setCasts] = useState(null);
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  
    useEffect(() => {
      getApi(url).then(setCasts);
    }, [url]);

  return <CastsList cast={casts} /> 
}
