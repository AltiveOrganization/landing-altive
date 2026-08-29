import { Button } from './shared/ui/Button/Button';

import styles from './App.module.scss';

export function App() {
  return (
    <main className={styles.page}>
      <Button onClick={() => window.alert('Everything works!')}>Смотреть проекты</Button>
    </main>
  );
}
