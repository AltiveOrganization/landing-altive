import { Button } from './shared/ui/Button/Button';

import styles from './App.module.scss';

export function App() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Vite · React · TypeScript</span>
        <h1>Landing Altive</h1>
        <p>Project foundation is ready. Build something worth remembering.</p>
        <Button onClick={() => window.alert('Everything works!')}>Get started</Button>
      </section>
    </main>
  );
}
