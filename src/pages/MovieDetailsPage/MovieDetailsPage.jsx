import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMoviesById } from "../../movies-api";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { movieDetails, setMovieDetails } = useState(null);
    useEffect(() => {
        const getData = async () => {
            const movie = await fetchMoviesById(movieId);
            setMovieDetails(movie);
        }
        getData()
    }, [movieId]);


    return (<> <div>M</div>
         
        <div>
        <nav>
            <NavLink to="cast">Cast</NavLink>
            <NavLink to="reviews">Reviews</NavLink>
        </nav>
        <Outlet />
        </div>
        </>
    );
}
export default MovieDetailsPage;