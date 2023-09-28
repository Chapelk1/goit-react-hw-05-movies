import { Link, Outlet } from "react-router-dom"
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import getApi from "api-tmdb";


export default function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null)
    const url = `https://api.themoviedb.org/3/movie/${movieId}`;
    
    useEffect(() => {
        getApi(url).then(setMovie);
    }, [])


    return (
      <>
        {movie && (
          <>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
              />
              <h1>{movie.title}</h1>
              <p>Vote averages: {movie.vote_average.toFixed(1)}</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              {movie.genres.map(genre => (<p>{genre.name}</p>))}
            </div>
            <Link to="cats">Cats</Link>
            <Link to="reviews">Reviews</Link>
            <Outlet />
          </>
        )}
      </>
    );
}
