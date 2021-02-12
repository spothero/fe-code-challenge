import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Box} from '@chakra-ui/react';

import SpotList from './spot-list/SpotList';
import {updateSelected} from '../spot/spot-actions';

const Search = ({
    selectedSpot,
    spots,
    setSpot
}) => {
    const spotListWidth = '460px';

    return (
        <Box
            w="100vw"
            h="100vh"
        >
            <SpotList
                spots={spots}
                setSpot={setSpot}
                selectedSpot={selectedSpot}
                spotListWidth={spotListWidth}
            />
            <Box
                top="0"
                bottom="0"
                h="100vh"
                right="0"
                position="absolute"
                bg="neutrals.pavement.DEFAULT"
                w={`calc(100vw - ${spotListWidth})`}
            />
        </Box>
    );
};

Search.propTypes = {
    selectedSpot: PropTypes.object,
    spots: PropTypes.arrayOf(PropTypes.object).isRequired,
    setSpot: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    const {
        spot: {
            selected: selectedSpot
        }
    } = state;

    return {
        selectedSpot
    };
};

const mapDispatchToProps = {
    setSpot: updateSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
