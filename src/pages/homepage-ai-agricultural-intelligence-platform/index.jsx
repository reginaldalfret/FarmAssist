import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ValuePropositions from './components/ValuePropositions';
import TrendingRankings from './components/TrendingRankings';
import SuccessStories from './components/SuccessStories';
import TrustIndicators from './components/TrustIndicators';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ValuePropositions />
        <TrendingRankings />
        <SuccessStories />
        <TrustIndicators />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;