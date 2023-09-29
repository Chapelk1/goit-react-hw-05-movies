import { useSearchParams } from "react-router-dom";
import { useState, useEffect} from "react";
import { getApiQuery } from "api-tmdb";
import {Form, Input, Btn} from 'page/Movies/Movies.styled'
import MoviesList from "components/MoviesList/MoviesList";

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);

  const url = `https://api.themoviedb.org/3/search/movie`;

  useEffect(() => {
    if (movieName !== '') {
      getApiQuery(url, movieName).then(r => {
        setMovies(r.results);
      });
    }
  }, [url]);
  
  const updateQuery = (query) => {
    const queryContent = query !== '' ? { query } : {};
    setSearchParams(queryContent);
  }

  const submitForm = (e) => {
    e.preventDefault();
    getApiQuery(url, movieName).then(r => {
      setMovies(r.results);
    });
  }


    return (
      <>
        <Form onSubmit={submitForm}>
          <Input
            value={movieName}
            onChange={e => {
              updateQuery(e.target.value);
            }}
          />
          <Btn type="submit">Search</Btn>
        </Form>
        <MoviesList movies={movies} />
      </>
    );
}