// src/components/RelatedImages.js

import React, { useState } from 'react';

const RelatedImages = () => {
  const [showRelatedImages, setShowRelatedImages] = useState(false);

  const handleImageClick = () => {
    setShowRelatedImages(!showRelatedImages);
  };

  return (
    <div className="section-content">
      <img
        src="your-main-image-url.jpg"
        alt="Main"
        onClick={handleImageClick}
      />

      {showRelatedImages && (
        <div className="related-images-container">
          <img src="https://www.shutterstock.com/image-photo/elearning-education-internet-lessons-online-260nw-2158034833.jpg "alt="Related 1" />
         </div>
      )}
    </div>
  );
};

export default RelatedImages;
