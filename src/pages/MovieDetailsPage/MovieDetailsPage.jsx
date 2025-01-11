import { NavLink } from "react-router-dom";

const MovieDetailsPage = () => {
    return <div>
        <nav>
            <NavLink to="actors">Actors Info</NavLink>
            <NavLink to="reviews">Movie Reviews</NavLink>
        </nav>
        
    </div>
}
export default MovieDetailsPage;