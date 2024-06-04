import React from 'react';





import KeyProblems from './components/KeyProblems';
import KeyMetrics from './components/KeyMetrics';
import Reviews from './components/Reviews';
import Features from './components/Features';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
const App = () => {
  return (
    <div>
      <HeroSection />
      <KeyProblems />
      <KeyMetrics />
      <Reviews />
      <Features />
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;
