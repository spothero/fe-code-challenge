import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Image = ({ className, onLoad, ...imgAttributes }) => (
    <img
        className={classNames(
            className,
            `Image has-radius has-border-light-hover`
        )}
        alt=""
        {...imgAttributes}
        onLoad={onLoad}
    />
);

Image.propTypes = {
    /** Additional class(es) to add to the component. */
    className: PropTypes.string,
    /** Optional function to execute when the image is loaded. */
    onLoad: PropTypes.func,
};

export default Image;
