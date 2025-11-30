import styles from './Header.module.css';

export default function Header({ children = "Мои фильмы" }) {
  return (
    <h2 className={styles.title}>
      {children}
    </h2>
  );
}