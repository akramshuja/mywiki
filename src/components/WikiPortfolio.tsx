import React from 'react';
import { WikiHeader } from './wiki/WikiHeader';
import { WikiSidebar } from './wiki/WikiSidebar';
import { WikiContent } from './wiki/WikiContent';
import { WikiInfoBox } from './wiki/WikiInfoBox';

export interface PersonalInfo {
  name: string;
  image?: string;
  tagline?: string;
  birthPlace?: string;
  otherNames?: string[];
  education: {
    institution: string;
    degree: string;
    year?: string;
  }[];
  occupations: string[];
  currentRole?: string;
  company?: string;
  skills?: string[];
  certifications?: string[];
  awards?: string[];
  [key: string]: any; // For additional custom fields
}

export interface ContentSection {
  id: string;
  title: string;
  content: string;
  subsections?: ContentSection[];
}

export interface WikiPortfolioConfig {
  personalInfo: PersonalInfo;
  sections: ContentSection[];
  tableOfContents?: boolean;
  customFields?: { [key: string]: any };
}

interface WikiPortfolioProps {
  config: WikiPortfolioConfig;
}

export const WikiPortfolio: React.FC<WikiPortfolioProps> = ({ config }) => {
  const { personalInfo, sections, tableOfContents = true } = config;

  return (
    <div className="min-h-screen bg-background">
      <WikiHeader name={personalInfo.name} tagline={personalInfo.tagline} />
      
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 lg:[grid-template-columns:1fr_3fr_1.5fr]">
          {/* Table of Contents Sidebar */}
          {tableOfContents && (
            <div className="order-3 lg:order-1">
              <WikiSidebar sections={sections} />
            </div>
          )}
          
          {/* Main Content */}
          <div className="order-2 lg:order-2">
            <WikiContent sections={sections} />
          </div>
          
          {/* Info Box */}
          <div className="order-1 lg:order-3">
            <WikiInfoBox personalInfo={personalInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};