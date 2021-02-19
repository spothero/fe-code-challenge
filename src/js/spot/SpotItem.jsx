import React from 'react';
import PropTypes from 'prop-types';
import Image from '../common/Image';
import {TextButton} from '../theme/components/Button';
import {Typography, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    spotItem: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-between',
        padding: '1.25rem 1.563rem',
        borderBottom: `1px solid ${theme.palette.neutrals.pavement.dark}`,
    },
    spotItemInfo: {
        width: '100%',
        marginLeft: '1.563rem',
    },
    spotItemTitle: {
        marginBottom: '1rem',
    },
    spotItemDetailsButton: {
        marginTop: '1rem',
        fontSize: '0.875rem',
    },
}));

const SpotItem = ({data, isSelected, onDetailsClick, showDetails = true}) => {
    const classes = useStyles();
    const {title, image, distance} = data;

    const handleClick = () => onDetailsClick(data);

    return (
        <Box component="div" className={classes.spotItem}>
            <Image src={image} />
            <Box component="div" className={classes.spotItemInfo}>
                <Typography variant="h2" className={classes.spotItemTitle}>
                    {title}
                </Typography>
                <Typography variant="body2">{distance}</Typography>
                {showDetails && (
                    <TextButton
                        onClick={handleClick}
                        className={classes.spotItemDetailsButton}
                    >
                        Details
                    </TextButton>
                )}
            </Box>
        </Box>
    );
};

SpotItem.propTypes = {
    isSelected: PropTypes.bool,
    showDetails: PropTypes.bool,
    onDetailsClick: PropTypes.func,
    data: PropTypes.object.isRequired,
};

export default SpotItem;
