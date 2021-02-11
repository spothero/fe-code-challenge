import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
    onLoad,
    className,
    ...imgAttributes
}) => (
    <img
        className={className}
        alt=""
        {...imgAttributes}
        onLoad={onLoad}
    />
);

Image.propTypes = {
    /** Additional class(es) to add to the component. */
    className: PropTypes.string,
    /** Optional function to execute when the image is loaded. */
    onLoad: PropTypes.func
};

export default Image;
