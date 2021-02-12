import React from 'react';
import PropTypes from 'prop-types';
import {Button, Heading, Box, Text} from '@chakra-ui/react';

import SpotItem from '../../spot/SpotItem';

const SpotList = ({
    spots,
    setSpot,
    selectedSpot,
    spotListWidth
}) => {
    const spotFeatureHeight = '11.25rem';
    const handleDetailsClick = spot => setSpot(spot);

    return (
        <Box
            top="0"
            left="0"
            h="100vh"
            overflow="hidden"
            w={spotListWidth}
            position="absolute"
            bgColor="neutrals.white"
            borderRightWidth="1px"
            borderRightStyle="solid"
            borderRightColor="neutrals.dashboard"
        >
            <Box
                w="100%"
                p="2rem"
                h={spotFeatureHeight}
                borderBottomWidth="1px"
                borderBottomStyle="solid"
                borderBottomColor="neutrals.dashboard"
            >
                <Box
                    display="flex"
                    alignContent="center"
                >
                    <Button variant="text">Chicago</Button>&nbsp;&gt; Millennium Park
                </Box>
                <Heading
                    my="0.5rem"
                    fontSize="3xl"
                    fontWeight="semibold"
                >
                    Millennium Park
                </Heading>
                <Text
                    as="p"
                    fontSize="sm"
                >
                    {`${spots.length} Spots Available`}
                </Text>
            </Box>

            <Box
                w="100%"
                overflowY="auto"
                h={`calc(100vh - ${spotFeatureHeight})`}
                data-testid="SpotList-spots"
            >
                {spots.map(spot => (
                    <SpotItem
                        data={spot}
                        key={spot.id}
                        onDetailsClick={handleDetailsClick}
                        selectedSpotId={selectedSpot?.id || -1}
                    />
                ))}
            </Box>

        </Box>
    );
};

SpotList.propTypes = {
    selectedSpot: PropTypes.object,
    setSpot: PropTypes.func.isRequired,
    spotListWidth: PropTypes.string.isRequired,
    spots: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SpotList;
