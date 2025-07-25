import React, { useState } from 'react';
import { WikiPortfolio } from '../components/WikiPortfolio';
import { defaultConfig, sampleHRConfig, sampleSalesConfig } from '../data/portfolioConfig';
import { Button } from '../components/ui/button';

const Index = () => {
  const [currentConfig, setCurrentConfig] = useState(defaultConfig);
  const [configName, setConfigName] = useState('IT Professional');

  const configs = [
    { name: 'IT Professional', config: defaultConfig },
    { name: 'HR Leader', config: sampleHRConfig },
    { name: 'Sales Director', config: sampleSalesConfig },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Demo Switcher */}
      <div className="bg-muted border-b border-border">
        <div className="max-w-screen-xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-sm font-medium text-foreground">Portfolio Demo:</h2>
              <div className="flex space-x-2">
                {configs.map(({ name, config }) => (
                  <Button
                    key={name}
                    variant={configName === name ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setCurrentConfig(config);
                      setConfigName(name);
                    }}
                    className="text-xs"
                  >
                    {name}
                  </Button>
                ))}
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              Wikipedia-style Portfolio • Fully Configurable via JSON
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <WikiPortfolio config={currentConfig} />
    </div>
  );
};

export default Index;
