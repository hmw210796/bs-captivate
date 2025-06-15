import FeaturesSection from "@/components/Specific/FeaturesSection/FeaturesSection";
import styles from "./page.module.scss";
import Header from "@/components/Specific/Header/Header";
import HeroSection from "@/components/Specific/HeroSection/HeroSection";
import LogoSection from "@/components/Specific/LogoSection/LogoSection";
import SplitFeature from "@/components/General/SplitFeature/SplitFeature";
import ImageHighlightsSection from "@/components/Specific/ImageHighlightsSection/ImageHighlightsSection";
import PricingSection from "@/components/Specific/PricingSection/PricingSection";
import FrequestQuestionsSection from "@/components/Specific/FrequestQuestionsSection/FrequestQuestionsSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <main className={styles.main}>
        {/* <HeroSection /> */}
        {/* <LogoSection /> */}
        {/* <FeaturesSection /> */}
        <ImageHighlightsSection />
        <PricingSection />

        <FrequestQuestionsSection />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
