/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import './MyImageGallery.css'; // 팝업을 위한 CSS 임포트

const MyImageGallery = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const handleScreenChange = (isFullScreen) => {
    if (isFullScreen) {
      if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('portrait').catch(function (error) {
          console.log('Orientation lock failed:', error);
        });
      }
    } else {
      if (screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock();
      }
    }
  };

  const renderGalleryItem = (item) => (
    <div onClick={() => openPopup(item.original)}>
      <img src={item.original} alt="" style={{ cursor: 'pointer', width: '100%' }} />
    </div>
  );

  return (
    <div>
      <ImageGallery
        items={items}
        showPlayButton={false}
        showFullscreenButton={true}
        renderItem={renderGalleryItem}
        onScreenChange={handleScreenChange}
      />

      {isOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Expanded view" style={{ width: '100%' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyImageGallery;

