
import React from 'react';
import { Linkedin, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

export interface SocialLink {
  type: 'linkedin' | 'instagram' | 'facebook' | 'youtube' | 'twitter';
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
      case 'twitter':
        return <Twitter size={20} />;
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
          className="bg-black/20 p-2 rounded-full hover:bg-black/30 transition-colors"
          aria-label={`${link.type} link`}
        >
          {getIcon(link.type)}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
