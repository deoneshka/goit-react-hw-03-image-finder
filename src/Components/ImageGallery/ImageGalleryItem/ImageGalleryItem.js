import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, onClick }) => {
    return (
        <li className="ImageGalleryItem" onClick={onClick}>
            <img src={image} alt="" className="ImageGalleryItem-image" />
        </li>
    )
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;