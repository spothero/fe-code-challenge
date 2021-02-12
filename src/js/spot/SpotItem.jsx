import PropTypes from 'prop-types';
import React, {useMemo} from 'react';
import {Image, Box, Button, Grid, GridItem} from '@chakra-ui/react';

const styleProps = {
    item: isSelected => ({
        display: 'flex',
        position: 'relative',
        borderBottomWidth: '1px',
        padding: '1.25rem 1.5rem',
        borderBottomStyle: 'solid',
        borderBottomColor: 'neutrals.dashboard',
        backgroundColor: isSelected ? 'neutrals.pavement.DEFAULT' : 'transparent'
    }),
    image: {
        w: '9rem',
        h: '6rem',
        borderWidth: '1px',
        borderRadius: 'base',
        borderStyle: 'solid',
        borderColor: 'neutrals.dashboard',
    },
    details: {
        gap: 1,
        h: '6rem',
        ml: '1.25rem',
        templateRows: '1fr auto 1fr',
    },
    heading: {
        fontSize: 'large',
        fontWeight: 'semibold'
    },
    distance: {
        m: '0.25rem',
        fontSize: 'sm'
    },
    border: isSelected => ({
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 10,
        w: '0.25rem',
        position: 'absolute',
        bg: isSelected ? 'brand.green.DEFAULT' : 'transparent'
    })
};

const SpotItem = ({data, selectedSpotId, onDetailsClick, showDetails = true}) => {
    const isSelected = useMemo(() => data.id === selectedSpotId, [data.id, selectedSpotId]);

    const {
        title,
        image,
        distance,
    } = data;

    const handleClick = () => onDetailsClick(data);

    return (
        <Box {...styleProps.item(isSelected)}>
            <Box {...styleProps.border(isSelected)} />
            <Image
                src={image}
                fallbackSrc="https://via.placeholder.com/150"
                {...styleProps.image}
            />
            <Grid {...styleProps.details}>
                <GridItem
                    as="h2"
                    {...styleProps.heading}
                    isTruncated
                >
                    {title}
                </GridItem>

                <GridItem
                    as="p"
                    {...styleProps.distance}
                >
                    {distance}
                </GridItem>

                {showDetails && (
                    <GridItem>
                        <Button
                            variant="text"
                            onClick={handleClick}
                        >
                            Details
                        </Button>
                    </GridItem>
                )}
            </Grid>
        </Box>
    );
};

SpotItem.propTypes = {
    showDetails: PropTypes.bool,
    onDetailsClick: PropTypes.func,
    selectedSpotId: PropTypes.number,
    data: PropTypes.object.isRequired,
};

export default SpotItem;
