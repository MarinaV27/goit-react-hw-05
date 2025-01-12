import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMoviesById } from "../../movies-api";
import css from "./MovieDetailsPage.module.css"

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [ movieDetails, setMovieDetails ] = useState(null);
    useEffect(() => {
        const getData = async () => {
            const movieDetails = await fetchMoviesById(movieId);
            setMovieDetails(movieDetails);
        };
        getData()
    }, [movieId]);

    if (!movieDetails) {
        return <h2>Loadin...</h2>
    }


    return (<> <div className={css.wrapper}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={movieDetails.overview}
            />
          </div>
         
        <div>
            <ul className={css.listInfo}>
                <li>
                    <NavLink to="cast" className={css.link}>Cast</NavLink>
                </li>
                <li>
                    <NavLink to="reviews" className={css.link}>Reviews</NavLink>
                </li>   
        </ul>
        <Outlet />
        </div>
        </>
    );
}
export default MovieDetailsPage;