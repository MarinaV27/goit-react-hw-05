import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchReviewsByMovieId } from '../../movies-api.js'
import Loader from '../Loader/Loader.jsx'



const MovieReviews = () => {
   const { movieId } = useParams
    const [movieReviews, setMovieReviews] = useState(null)
    useEffect(() => {
        const getData = async () => {
            const movieReviews = await fetchReviewsByMovieId(movieId)
            setMovieReviews(movieReviews)
        }
        getData()
    }, [movieId])
   
     if (!movieReviews) {
        return <div>{<Loader />}</div>
    }
    




    return <div>
        MovieReviews
    </div>
}
export default MovieReviews