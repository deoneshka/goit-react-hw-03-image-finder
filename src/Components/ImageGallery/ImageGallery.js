import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
    return (
        <ul className="ImageGallery">
            {images.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem key={id} image={webformatURL} onClick={() => onClick(largeImageURL)}/>
            ))}
        </ul>
    )
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};

export default ImageGallery;