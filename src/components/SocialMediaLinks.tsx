
import React from 'react';
import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

export interface SocialLink {
  type: 'linkedin' | 'instagram' | 'facebook' | 'youtube';
  url: string;
}

interface SocialMediaLinksProps {
  links: SocialLink[];
  className?: string;
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({ links, className = "" }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'instagram':
        return <Instagram size={20} />;
      case 'facebook':
        return <Facebook size={20} />;
      case 'youtube':
        return <Youtube size={20} />;
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
          className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
          aria-label={`${link.type} link`}
        >
          {getIcon(link.type)}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
