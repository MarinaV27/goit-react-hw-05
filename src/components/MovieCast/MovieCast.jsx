import css from './MovieCast.module.css' 
import Loader from '../Loader/Loader.jsx'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {fetchCastByMovieId} from '../../movies-api.js'


const MovieCast = () => {
    const { movieId } = useParams()
    const [movieCast, setMovieCast] = useState(null)
    useEffect(() => {
        const getData = async () => {
            const movieCast = await fetchCastByMovieId(movieId)
            setMovieCast(movieCast)
        }
        getData()
    }, [movieId])
   
     if (!movieCast) {
        return <div>{<Loader />}</div>
    }
    
    
    
    return <div>
       <ul className={css.list}>
           {movieCast.map(({ id, profile_path, name }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
                title={name}
              />
              <p>{name}</p>
            </li>
          ))}
        </ul>
    </div>
}
export default MovieCast