import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import {TextButton} from '../../theme/components/Button';
import SpotItem from '../../spot/SpotItem';

const useStyles = makeStyles((theme) => ({
    spotList: {
        backgroundColor: `${theme.palette.neutrals.white}`,
        height: '100vh',
        width: '28.75rem',
        position: 'absolute',
        top: '0',
        left: '0',
        overflow: 'hidden',
    },
    spotListFeature: {
        width: '100%',
        padding: '2.188rem 2.188rem',
        border: `1px solid ${theme.palette.neutrals.dashboard}`,
    },
    location: {
        margin: '1rem 0',
    },
    breadcrumbsText: {
        display: 'flex',
        alignItems: 'center',
    },
    spotListSpots: {
        width: '100%',
        height: 'calc(100% - 180px)',
        overflowY: 'auto',
    },
}));

const SpotList = ({spots, setSpot, selectedSpot, spotListWidth}) => {
    const classes = useStyles();
    // const spotFeatureHeight = '11.25rem';
    const handleDetailsClick = (spot) => setSpot(spot);

    return (
        <div className={classes.spotList}>
            <Box component="div" className={classes.spotListFeature}>
                <Box component="div" display="flex" alignContent="center">
                    <TextButton>Chicago</TextButton>
                    <Typography className={classes.breadcrumbsText}>
                        &gt; Millennium Park
                    </Typography>
                </Box>
                <Typography variant="h1" className={classes.location}>
                    Millennium Park
                </Typography>
                <Typography variant="body2">
                    {spots.length} Spots Available
                </Typography>
            </Box>
            <Box component="div" className={classes.spotListSpots}>
                {spots.map((spot) => {
                    return (
                        <SpotItem
                            key={spot.id}
                            data={spot}
                            isSelected={
                                selectedSpot && selectedSpot.id === spot.id
                            }
                            onDetailsClick={handleDetailsClick}
                        />
                    );
                })}
            </Box>
        </div>
    );
};

SpotList.propTypes = {
    selectedSpot: PropTypes.object,
    setSpot: PropTypes.func.isRequired,
    spotListWidth: PropTypes.string.isRequired,
    spots: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SpotList;
