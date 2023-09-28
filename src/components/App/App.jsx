import { Route, Routes } from "react-router-dom";
import Home from "page/Home/Home";
import Movies from "page/Movies/Movies";
import MovieDetails from "page/MovieDetails/MovieDetails";
import Cats from 'components/Cats/Cats';
import Reviews from 'components/Reviews/Reviews';
import SharedLayout from "components/SharedLayout/SharedLayout";


export function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cats" element={<Cats />} />
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </>
    );
}



