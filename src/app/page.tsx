import styles from "./page.module.scss";
import Header from "@/components/Specific/Header/Header";
import Hero from "@/components/Specific/Hero/Hero";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <main className={styles.main}>
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
