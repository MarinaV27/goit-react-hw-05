import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMoviesById } from "../../movies-api";
import css from "./MovieDetailsPage.module.css"
import Loader from "../../components/Loader/Loader.jsx"

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
        return <div>{<Loader />}</div>
    }


    return (<> <div className={css.wrapper}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={movieDetails.overview}
            />
          </div>
         
        <nav>
            <ul className={css.listInfo}>
                <li>
                    <NavLink to="cast" className={css.link}>Cast</NavLink>
                </li>
                <li>
                    <NavLink to="reviews" className={css.link}>Reviews</NavLink>
                </li> 
                
            </ul>
        <Outlet />
        </nav>
        </>
    );
}
export default MovieDetailsPage;