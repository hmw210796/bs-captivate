import styles from "./page.module.scss";
import Header from "@/components/Specific/Header/Header";
import HeroSection from "@/components/Specific/HeroSection/HeroSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <main className={styles.main}>
        <HeroSection />
        <HeroSection />
        <HeroSection />
        <HeroSection />
        <HeroSection />
        <HeroSection />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
