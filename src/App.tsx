import styles from './App.module.css';
import HeroContainer from './views/HeroContainer';

export function App() {
  return (
    <>
      <header>
      </header>

      <main className={styles.main}>
        <HeroContainer />
      </main>
    </>
  );
}
