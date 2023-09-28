import { Link, Outlet } from "react-router-dom"


export default function SharedLayout(){

    return (
        <>
            <Link to="/"> Home </Link>
            <Link to="/movies">Movies</Link>
            <Outlet/>
        </>
    )
}