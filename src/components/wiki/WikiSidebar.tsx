import React from 'react';
import { ContentSection } from '../WikiPortfolio';

interface WikiSidebarProps {
  sections: ContentSection[];
}

export const WikiSidebar: React.FC<WikiSidebarProps> = ({ sections }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderTableOfContents = (sections: ContentSection[], level = 0) => {
    return sections.map((section) => (
      <div key={section.id} className={`${level > 0 ? 'ml-4' : ''}`}>
        <button
          onClick={() => scrollToSection(section.id)}
          className={`block w-full text-left py-1 px-2 rounded text-sm hover:bg-accent transition-colors ${
            level === 0 ? 'font-medium text-foreground' : 'text-muted-foreground'
          }`}
        >
          {level > 0 && <span className="text-muted-foreground mr-2">└</span>}
          {section.title}
        </button>
        {section.subsections && section.subsections.length > 0 && (
          <div className="ml-2">
            {renderTableOfContents(section.subsections, level + 1)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <nav className="wiki-sidebar sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="bg-secondary border border-border rounded p-4">
        <h3 className="font-medium text-foreground mb-3 text-sm">Contents</h3>
        <div className="space-y-1">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="block w-full text-left py-1 px-2 rounded text-sm font-medium text-foreground hover:bg-accent transition-colors"
          >
            (Top)
          </button>
          {renderTableOfContents(sections)}
        </div>
      </div>
    </nav>
  );
};