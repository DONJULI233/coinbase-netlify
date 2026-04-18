import HeroSection from "../components/crypto/HeroSection";
import CryptoTickerSection from "../components/crypto/CryptoTickerSection";
import GridSection from "../components/crypto/GridSection";
import LearnMoreSection from "../components/crypto/LearnMoreSection";
import HomeSignUpSection from "../components/crypto/HomeSignUpSection";

/**
 * Home page
 *
 * Composes the main sections of the site:
 * - Top navigation
 * - Hero / email signup
 * - Crypto ticker / highlights
 * - Feature grid sections
 * - Footer
 *
 * This file intentionally keeps layout concerns minimal — the visual
 * styling lives inside each component so they can be reused on other pages.
 */
const Home = () => {
  return (
    <>
        {/* Hero section with email input and CTA */}
        <section aria-labelledby="hero-heading">
          <HeroSection />
        </section>

        {/* Crypto ticker and highlights */}
        <section aria-labelledby="ticker-heading" className="mt-6">
          <CryptoTickerSection />
        </section>

        <section>
          <LearnMoreSection />
        </section>
        <section>
          <HomeSignUpSection />
        </section>
    </>
  );
};

export default Home;
