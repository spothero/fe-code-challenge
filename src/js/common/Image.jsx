import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    image: {
        borderRadius: '0.25rem',
        border: `1px solid ${theme.palette.neutrals.dashboard}`,
    },
}));

const Image = ({className, onLoad, ...imgAttributes}) => {
    const classes = useStyles();

    return (
        <img
            className={(classNames(className, 'Image'), classes.image)}
            alt=""
            {...imgAttributes}
            onLoad={onLoad}
        />
    );
};

Image.propTypes = {
    /** Additional class(es) to add to the component. */
    className: PropTypes.string,
    /** Optional function to execute when the image is loaded. */
    onLoad: PropTypes.func,
};

export default Image;
