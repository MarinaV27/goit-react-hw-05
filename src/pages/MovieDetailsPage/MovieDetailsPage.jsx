import { NavLink, Outlet } from "react-router-dom";

const MovieDetailsPage = () => {
    return <div>
        <nav>
            <NavLink to="cast">Actors Info</NavLink>
            <NavLink to="reviews">Movie Reviews</NavLink>
        </nav>
        <Outlet/>
    </div>
}
export default MovieDetailsPage;