import FeaturesSection from "@/components/Specific/FeaturesSection/FeaturesSection";
import styles from "./page.module.scss";
import Header from "@/components/Specific/Header/Header";
import HeroSection from "@/components/Specific/HeroSection/HeroSection";
import LogoSection from "@/components/Specific/LogoSection/LogoSection";
import SplitFeature from "@/components/General/SplitFeature/SplitFeature";
import ImageHighlightsSection from "@/components/Specific/ImageHighlightsSection/ImageHighlightsSection";
import PricingSection from "@/components/Specific/PricingSection/PricingSection";
import FrequestQuestionsSection from "@/components/Specific/FrequestQuestionsSection/FrequestQuestionsSection";
import TestimonialSection from "@/components/Specific/TestimonialSection/TestimonialSection";
import GetStartedSection from "@/components/Specific/GetStartedSection/GetStartedSection";
import Footer from "@/components/Specific/Footer/Footer";
import ListCarouselSection from "@/components/Specific/ListCarouselSection/ListCarouselSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <main className={styles.main}>
        <HeroSection />
        <LogoSection />
        <FeaturesSection />
        <ListCarouselSection />

        <ImageHighlightsSection />
        <PricingSection />

        <FrequestQuestionsSection />

        <TestimonialSection />

        <GetStartedSection />

        <Footer />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
