
import { useState, useEffect } from 'react';
import { movies } from './data/movies';
import MovieList from './components/MovieList/MovieList';
import Header from './components/Header/Header';


const favKey = 'movie-favorites';

export default function App() {

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem(favKey);
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem(favKey, JSON.stringify([...favorites]));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1500px', margin: '0 auto' }}>
      <Header>Добро пожаловать на сайт</Header>
      <Header>Мои фильмы</Header>
      <MovieList
        movies={movies}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}