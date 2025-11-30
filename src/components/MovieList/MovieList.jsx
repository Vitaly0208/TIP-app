

import MovieItem from '../MovieItem/MovieItem';
import styles from './MovieList.module.css';

export default function MovieList({ movies, favorites, onToggleFavorite }) {
  return (
    <div className={styles.movieList}>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          isFavorite={favorites.has(movie.id)}
          onToggle={onToggleFavorite}
        />
      ))}
    </div>
  );
}