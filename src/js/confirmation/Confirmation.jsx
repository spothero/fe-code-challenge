import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {Image, Box, Button, Text, Heading} from '@chakra-ui/react';

const styleProps = {
    confirmation: {
        w: '100vw',
        display: 'flex',
        justifyContent: 'center',
    },
    modal: {
        width: '30%',
        flexGrow: '0',
        minWidth: '20rem',
        padding: '1.5rem',
        margin: '2.5rem 0',
        borderWidth: '1px',
        borderRadius: 'lg',
        textAlign: 'center',
        borderStyle: 'solid',
        bg: 'neutrals.white',
        borderColor: 'neutrals.dashboard.DEFAULT',
    },
    heading: {
        fontSize: '3xl',
        lineHeight: '1.2',
        textAlign: 'center',
        fontWeight: 'semibold',
        textTransform: 'uppercase',
    },
    message: {
        p: '1.5rem 2.5rem'
    },
    image: {
        m: '0 auto',
        w: '9rem',
        h: '6rem',
        borderWidth: '1px',
        borderRadius: 'base',
        borderStyle: 'solid',
        borderColor: 'neutrals.dashboard',
    }
};
const Confirmation = ({
    email,
    pushTo,
    selectedSpot,
}) => {
    const handlePurchaseAnother = evt => pushTo('/');

    useEffect(() => {
        if (!selectedSpot) {
            pushTo('/');
        }
    });

    if (!selectedSpot) {
        return null;
    }

    return (
        <Box {...styleProps.confirmation}>
            <Box {...styleProps.modal}>
                <Heading
                    as="h1"
                    {...styleProps.heading}
                >
                    Park it like its hot!
                </Heading>
                <Text
                    {...styleProps.message}
                    as="p"
                >
                    You successfully purchased parking at <strong>{selectedSpot.title}</strong> for <strong>${(selectedSpot.price / 100).toFixed(2)}</strong>.
                </Text>

                <Image
                    src={selectedSpot.image}
                    {...styleProps.image}
                />

                <Text
                    {...styleProps.message}
                    as="p"
                >
                    We emailed a receipt to <a href={`mailto:${email}`}>{email}</a>.
                </Text>

                <Button
                    variant="primary"
                    onClick={handlePurchaseAnother}
                >
                    Purchase Another Spot!
                </Button>
            </Box>
        </Box>
    );
};

Confirmation.propTypes = {
    selectedSpot: PropTypes.object,
    pushTo: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
    const {
        spot: {
            selected: selectedSpot
        }
    } = state;

    return {
        email: 'tyler.scott.14@gmail.com',
        selectedSpot
    };
};

const mapDispatchToProps = {
    pushTo: push,
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
