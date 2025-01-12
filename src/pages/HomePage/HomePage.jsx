import { useEffect, useState } from "react";
import { fetchMovies } from "../../movies-api";
//import MovieList from "../../components/MovieList/MovieList";
import Loader    from "../../components/Loader/Loader";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await fetchMovies();
            setMovies(data);
        }
        getData()
    }, [])
     if (!movies) {
        return <div>{<Loader />}</div>
    }

    return <div>
        M
        {movies.length > 0 && <MovieList movies={movies} />}

    </div>
}
export default HomePage;