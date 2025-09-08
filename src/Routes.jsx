import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import FarmerSuccessLeague from './pages/farmer-success-league-community-leaderboards';
import Homepage from './pages/homepage-ai-agricultural-intelligence-platform';
import CropChampionshipCenter from './pages/crop-championship-center-interactive-rankings';
import AIRankingEngineMethodologyShowcase from './pages/ai-ranking-engine-methodology-showcase';
import TreatmentRankingsPage from './pages/treatment-rankings-fertilizer-pesticide-intelligence';
import RegionalIntelligenceCenter from './pages/regional-intelligence-center-location-specific-insights';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AIRankingEngineMethodologyShowcase />} />
        <Route path="/farmer-success-league-community-leaderboards" element={<FarmerSuccessLeague />} />
        <Route path="/homepage-ai-agricultural-intelligence-platform" element={<Homepage />} />
        <Route path="/crop-championship-center-interactive-rankings" element={<CropChampionshipCenter />} />
        <Route path="/ai-ranking-engine-methodology-showcase" element={<AIRankingEngineMethodologyShowcase />} />
        <Route path="/treatment-rankings-fertilizer-pesticide-intelligence" element={<TreatmentRankingsPage />} />
        <Route path="/regional-intelligence-center-location-specific-insights" element={<RegionalIntelligenceCenter />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
