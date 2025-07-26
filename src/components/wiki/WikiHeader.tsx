import React from 'react';

interface WikiHeaderProps {
  name: string;
  tagline?: string;
}

export const WikiHeader: React.FC<WikiHeaderProps> = ({ name, tagline }) => {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-40">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-xs text-muted-foreground">
              From Portfolio, the professional encyclopedia
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="border-t border-border-light bg-secondary/50">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-normal text-foreground mb-1">{name}</h1>
          {tagline && (
            <p className="text-muted-foreground text-base italic">{tagline}</p>
          )}
        </div>
      </div>
    </header>
  );
};