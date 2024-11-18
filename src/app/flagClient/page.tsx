import MockComponent from "./_components/MockComponent";
import styles from "./page.module.css";

export default function page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MockComponent />
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
