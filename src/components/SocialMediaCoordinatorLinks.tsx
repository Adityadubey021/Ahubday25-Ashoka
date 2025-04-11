
import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

export interface SocialLink {
  type: 'linkedin' | 'instagram';
  url: string;
}

interface SocialMediaCoordinatorLinksProps {
  links: SocialLink[];
  className?: string;
}

const SocialMediaCoordinatorLinks: React.FC<SocialMediaCoordinatorLinksProps> = ({ links, className = "" }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'linkedin':
        return <Linkedin size={18} />;
      case 'instagram':
        return <Instagram size={18} />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex space-x-3 ${className}`}>
      {links.map((link, index) => (
        <a 
          key={index} 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gray-100 p-1.5 rounded-full hover:bg-gray-200 text-festival-purple transition-colors"
          aria-label={`${link.type} link`}
        >
          {getIcon(link.type)}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaCoordinatorLinks;
