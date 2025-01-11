import { useEffect, useState } from "react";
import { fetchMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";


const HomePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await fetchMovies();
            setMovies(data);
        }
        getData()
    }, [])


    return <div>
        
        {movies.length > 0 && <MovieList movies={movies} />}

    </div>
}
export default HomePage;