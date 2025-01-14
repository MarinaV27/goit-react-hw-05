import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import css from "./MoviesPage"
import { fetchMoviesByQuery } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList"; 
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        const getData = async () => {
            const data = await fetchMoviesByQuery(query)
            setMovies(data)
        }
        getData()
    }, [query])

    const handleChangeQuery = (newQuery) => { 
         if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
    };
    
   

    return <div className={css.container}>
        <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
        {<MovieList movies={movies} />}
    </div>
}
export default MoviesPage;