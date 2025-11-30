
import styles from './MovieItem.module.css'



export default function MovieItem({ movie, isFavorite, onToggle }) {
  return (
    <section className={styles.card}>
      {movie.poster && (
        <div className={styles.poster}>
          <img src={movie.poster} alt={movie.title} />
        </div>
      )}
      <div className={styles.header}>
        <div>
          <h3 className={styles.h3} >{movie.title}</h3>
          <p className={styles.p}style={{ }}>
            {movie.year} • {movie.director}
          </p>
        </div>
      <button
        onClick={() => onToggle(movie.id)}
        style={{
          padding: '0.4rem 0.8rem',
          backgroundColor: isFavorite ? '#f07f7fff' : '#c3c3c3ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        ❤️
      </button>
      </div>
    </section>
  );
}