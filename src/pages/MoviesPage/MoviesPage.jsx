import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import css from "./MoviesPage"
import { fetchMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList"; 
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
   

    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        const getData = async () => {
            const data = await fetchMovies()
            setMovies(data)
        }
        getData()
    }, [])

    const handleChangeQuery = (newQuery) => { 
        if (!newQuery) {
            return setSearchParams({})
        }
        searchParams.set('query', newQuery)
        setSearchParams(searchParams)
    }

    



    return <div className={css.container}>
        <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
        {movies.length > 0  && <MovieList movies={movies} />}
    </div>
}
export default MoviesPage;