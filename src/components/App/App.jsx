import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('page/Home/Home'));
const Movies = lazy(() => import('page/Movies/Movies'));
const MovieDetails = lazy(() => import('page/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));





export function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </>
    );
}



