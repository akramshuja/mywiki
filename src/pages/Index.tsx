import React from 'react';
import { WikiPortfolio } from '../components/WikiPortfolio';
import { defaultConfig } from '../data/portfolioConfig';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WikiPortfolio config={defaultConfig} />
    </div>
  );
};

export default Index;
