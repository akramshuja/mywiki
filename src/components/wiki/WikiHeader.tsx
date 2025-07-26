import React from 'react';

interface WikiHeaderProps {
  name: string;
  tagline?: string;
}

export const WikiHeader: React.FC<WikiHeaderProps> = ({ name, tagline }) => {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-40">
      <div className="bg-secondary/50">
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-normal text-foreground mb-1">{name}</h1>
          {tagline && (
            <p className="text-muted-foreground text-base italic">{tagline}</p>
          )}
        </div>
      </div>
    </header>
  );
};