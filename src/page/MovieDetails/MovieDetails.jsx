import { Link, Outlet } from "react-router-dom"

export default function MovieDetails(){


    return (
        <>
        <Link to="cats">Cats</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet />
        </>
    )
}