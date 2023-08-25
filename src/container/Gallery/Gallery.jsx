import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../API';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />

        <h1 className="headtext__cormorant">
          Photo Gallery
        </h1>

        <p
          className="p__opensans"
          style={{ color: '#AAA', marginTop: '2rem' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>

        <button
          type="button"
          className="custom__button"
        >
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        <div
          className="app__gallery-images_container"
          ref={scrollRef}
        >
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, id) => (
            <div
              className="app__gallery-images_card
              flex__center"
              key={id}
            >
              <img
                src={image}
                alt="gallery_image"
              />

              <a href="https://www.instagram.com/">
                <BsInstagram className="gallery__image-icon" />
              </a>
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => handleScroll('left')}
          />

          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => handleScroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
