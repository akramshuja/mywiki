import React from 'react';
import { PersonalInfo } from '../WikiPortfolio';

interface WikiInfoBoxProps {
  personalInfo: PersonalInfo;
}

export const WikiInfoBox: React.FC<WikiInfoBoxProps> = ({ personalInfo }) => {
  const {
    name,
    image,
    birthPlace,
    otherNames,
    education,
    occupations,
    currentRole,
    company,
    skills,
    certifications,
    awards,
    ...customFields
  } = personalInfo;

  const InfoRow: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
    <tr className="border-b border-border-light">
      <td className="wiki-table-header px-3 py-2 text-xs font-medium w-1/3 align-top break-words">
        {label}
      </td>
      <td className="px-3 py-2 text-xs text-foreground align-top break-words max-w-0">
        {value}
      </td>
    </tr>
  );

  return (
    <div className="wiki-infobox sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto w-full overflow-x-hidden">
      <div className="text-center p-4 border-b border-wiki-infobox-border">
        <h2 className="font-medium text-base mb-3">{name}</h2>
        
        {image && (
          <div className="mb-3">
            <img
              src={image}
              alt={name}
              className="w-48 h-48 object-cover mx-auto rounded border border-border"
            />
            <p className="text-xs text-muted-foreground mt-2">Professional Photo</p>
          </div>
        )}
      </div>

      <table className="w-full text-xs table-fixed">
        <tbody>
          {birthPlace && (
            <InfoRow label="Location" value={birthPlace} />
          )}
          
          {otherNames && otherNames.length > 0 && (
            <InfoRow 
              label="Also known as" 
              value={otherNames.join(', ')} 
            />
          )}
          
          {occupations && occupations.length > 0 && (
            <InfoRow 
              label="Occupation" 
              value={
                <div className="space-y-1">
                  {occupations.map((occupation, index) => (
                    <div key={index}>{occupation}</div>
                  ))}
                </div>
              } 
            />
          )}
          
          {currentRole && (
            <InfoRow label="Current Role" value={currentRole} />
          )}
          
          {company && (
            <InfoRow label="Organization" value={company} />
          )}
          
          {education && education.length > 0 && (
            <InfoRow 
              label="Education" 
              value={
                <div className="space-y-2">
                  {education.map((edu, index) => (
                    <div key={index} className="text-xs">
                      <div className="font-medium">{edu.institution}</div>
                      <div className="text-muted-foreground">
                        {edu.degree} {edu.year && `(${edu.year})`}
                      </div>
                    </div>
                  ))}
                </div>
              } 
            />
          )}
          
          {skills && skills.length > 0 && (
            <InfoRow 
              label="Key Skills" 
              value={
                <div className="flex flex-wrap gap-1 w-full">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="inline-block bg-accent text-accent-foreground px-2 py-1 rounded text-xs break-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              } 
            />
          )}
          
          {certifications && certifications.length > 0 && (
            <InfoRow 
              label="Certifications" 
              value={
                <div className="space-y-1">
                  {certifications.map((cert, index) => (
                    <div key={index} className="text-xs">{cert}</div>
                  ))}
                </div>
              } 
            />
          )}
          
          {awards && awards.length > 0 && (
            <InfoRow 
              label="Awards" 
              value={
                <div className="space-y-1">
                  {awards.map((award, index) => (
                    <div key={index} className="text-xs">{award}</div>
                  ))}
                </div>
              } 
            />
          )}
          
          {/* Render custom fields */}
          {Object.entries(customFields).map(([key, value]) => {
            if (value && key !== 'name' && key !== 'image' && key !== 'tagline') {
              return (
                <InfoRow 
                  key={key}
                  label={key.charAt(0).toUpperCase() + key.slice(1)} 
                  value={Array.isArray(value) ? value.join(', ') : String(value)} 
                />
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
};