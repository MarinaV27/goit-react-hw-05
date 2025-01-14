import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMoviesById } from "../../movies-api";
import css from "./MovieDetailsPage.module.css"
import Loader from "../../components/Loader/Loader.jsx"

//import clsx from 'clsx';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

    
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


    return (<div> <div className={css.wrapper}>
            <img
              src={
      movieDetails.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
        : defaultImg
    }
    width={250}
    alt={movieDetails.title}
        />
        <ul className={css.list}>
              <li className={css.item}>
                <h2 className={css.name}>
                  {movieDetails.title} ({movieDetails.release_date.slice(0, 4)})
                </h2>
              </li>
              <li className={css.item}>
                <p className={css.title}>
                  User score: {Math.round(movieDetails.vote_average * 10)}%
                </p>
              </li>
              <li className={css.item}>
                <h3 className={css.title}>Overview</h3>
                <p className={css.text}>{movieDetails.overview}</p>
              </li>
              <li className={css.item}>
                <h3 className={css.title}>Genres</h3>
                <p className={css.text}>
                  {movieDetails.genres.map(genre => genre.name).join(', ')}
                </p>
              </li>
            </ul>
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
        </div>
    );
}
export default MovieDetailsPage;