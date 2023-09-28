import getApi from "api-tmdb";
import { useState, useEffect } from "react";
import MoviesList from "components/MoviesList/MoviesList";
const url = 'https://api.themoviedb.org/3/trending/all/day';

export default function Home() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getApi(url).then(r => {
            console.log(r);
          setMovies(r.results);
        });
    },[])
    



    return <MoviesList movies={movies} />;
}