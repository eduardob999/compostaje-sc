import React from 'react';

const EmbedSite = ({ src, title }) => {
  return (
    <div className="relative aspect-w-16 aspect-h-9">
      <iframe
        title={title}
        src={src}
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default EmbedSite;
