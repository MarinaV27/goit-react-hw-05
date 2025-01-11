import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

export default function MovieList({ movies }) {
  //const location = useLocation();

    return (<>
  <h2 className={css.title}>Trending movies </h2>
    <ul className={css.list}>
      {movies.map(movie => {
          return (
          <li className={css.item} key={movie.id}>
            <Link to={`/movies/${movie.id.toString()}`} >
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              />
              <div className={css.nameWrapper}>
                <p className={css.title}>{movie.title}</p>
              </div>
            </Link>
              </li>
        );
      })}
        </ul>
        </>
  );
}