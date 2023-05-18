import React from 'react';
import { Link } from 'react-router-dom';

interface ExternalLinkProps{
    url: string
}

const ExternalLink = ({url}: ExternalLinkProps) => {
      return (
            <div>
                  <Link
                        to={url}
                        target="_blank"
                        rel="noopener noreferrer"
                  >Lien
                  </Link>
                        
            </div>
      );
};
// "https://booki-projet-2-openclassroom.vercel.app/"
export default ExternalLink;
