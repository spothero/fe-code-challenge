import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Box} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';

import {TextButton} from '../../theme/components/Button';
import SpotItem from '../../spot/SpotItem';

const useStyles = theme => makeStyles({
    location: {
        margin: '1rem 0'
    },
    breadcrumbsText: {
        display: 'flex',
        alignItems: 'center',
    },
    headerAreaThing: {
        width: '100%',
        padding: '2rem',
        height: '10rem',
        border: `1px solid ${theme.palette.neutrals.dashboard}`,
    }
});

const SpotList = ({
    spots,
    setSpot,
    selectedSpot,
    spotListWidth
}) => {
    const classes = useStyles(useTheme());
    // const spotFeatureHeight = '11.25rem';
    const handleDetailsClick = spot => setSpot(spot);

    return (
        <div className="SpotList">
            <Box
                component="div"
                className={classes.headerAreaThing}
            >
                <Box
                    component="div"
                    display="flex"
                    alignContent="center"
                >
                    <TextButton>Chicago</TextButton>
                    <Typography
                        className={classes.breadcrumbsText}
                    >&gt; Millennium Park
                    </Typography>
                </Box>
                <Typography
                    variant="h1"
                    className={classes.location}
                >
                    Millennium Park
                </Typography>
                <Typography variant="body2">{spots.length} Spots Available</Typography>
            </Box>
            <div className="SpotList-spots">
                {spots.map(spot => {
                    return (
                        <SpotItem
                            key={spot.id}
                            data={spot}
                            isSelected={selectedSpot && selectedSpot.id === spot.id}
                            onDetailsClick={handleDetailsClick}
                        />
                    );
                })}
            </div>
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
