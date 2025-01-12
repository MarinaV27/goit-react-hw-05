import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchReviewsByMovieId } from '../../movies-api.js'
import Loader from '../Loader/Loader.jsx'
import css from './MovieReviews.module.css'



const MovieReviews = () => {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const movieReviews = await fetchReviewsByMovieId(movieId);
            setMovieReviews(movieReviews);
        }
        getData();
    }, [movieId]);
   
     if (!movieReviews) {
        return <div>{<Loader />}</div>
    }
    

    return <div>
        <ul className={css.list}>
         {!movieReviews.length && <h2>No Reviews yet...</h2>}
          {movieReviews.map(({ id, author, content }) => (
            <li className={css.item} key={id}>
              <p className={css.username}>{author}</p>
              <p>{content}</p>
              <hr className={css.hr} />
            </li>
          ))}
        </ul>
    </div>
}
export default MovieReviews