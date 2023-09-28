import { MovieItem } from "./MoviesList.styled";
import { Link } from "react-router-dom";

export default function MoviesList({movies}){

    return (
      <>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </MovieItem>
        ))}
      </>
    );
}