import React from 'react';
import { ContentSection } from '../WikiPortfolio';

interface WikiContentProps {
  sections: ContentSection[];
}

export const WikiContent: React.FC<WikiContentProps> = ({ sections }) => {
  const renderContent = (content: string) => {
    // Simple markdown-like parsing for links and formatting
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const italicRegex = /\*([^*]+)\*/g;
    
    let processedContent = content
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>')
      .replace(linkRegex, '<a href="$2" class="wiki-link" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(boldRegex, '<strong>$1</strong>')
      .replace(italicRegex, '<em>$1</em>');
    
    return { __html: `<p>${processedContent}</p>` };
  };

  const renderSection = (section: ContentSection, level = 1) => {
    const HeadingTag = `h${Math.min(level + 1, 6)}` as keyof JSX.IntrinsicElements;
    
    return (
      <section key={section.id} className="mb-8">
        <HeadingTag
          id={section.id}
          className={`wiki-heading text-${level === 1 ? 'xl' : level === 2 ? 'lg' : 'base'} scroll-mt-24`}
        >
          {section.title}
        </HeadingTag>
        
        <div className="wiki-content space-y-4">
          <div 
            dangerouslySetInnerHTML={renderContent(section.content)}
          />
        </div>
        
        {section.subsections && section.subsections.length > 0 && (
          <div className="mt-6 space-y-6">
            {section.subsections.map(subsection => renderSection(subsection, level + 1))}
          </div>
        )}
      </section>
    );
  };

  return (
    <main className="bg-background pt-8">
      <div className="prose prose-sm max-w-none">
        {sections.map(section => renderSection(section))}
      </div>
    </main>
  );
};