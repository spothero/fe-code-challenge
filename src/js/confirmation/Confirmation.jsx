/* eslint-disable indent */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import {Button} from '../theme/components/Button';
import Image from '../common/Image';

import {Typography, Link, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    confirmation: {
        width: '30%',
        margin: '2.5rem auto',
        padding: '1.5rem',
        border: `1px solid ${theme.palette.neutrals.dashboard}`,
        borderRadius: '0.5rem',
        backgroundColor: theme.palette.neutrals.white,
        textAlign: 'center'
    },
    anchor: theme.typography.anchor,
    heading: {
        margin: '0 0 1rem',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    text: {
        ...theme.typography.body2,
        padding: '0 2.5rem'
    },
    image: {
        margin: '2rem auto'
    },
    button: {
        margin: '2rem auto 0'
    }
}));

const Confirmation = ({
    email,
    pushTo,
    selectedSpot,
}) => {
    const classes = useStyles();
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
        <Box className={classes.confirmation}>
            <Typography
                variant="h1"
                className={classes.heading}
            >
                Park it like its hot!
            </Typography>
            <Typography className={classes.text}>
                You successfully purchased parking at <strong>{selectedSpot.title}</strong> for <strong>${(selectedSpot.price / 100).toFixed(2)}</strong>.
            </Typography>
            <Image
                src={selectedSpot.image}
                className={classes.image}
            />
            <Typography className={classes.text}>We emailed a receipt to{' '}
                <Link
                    className={classes.anchor}
                    href={`mailto:${email}`}
                >
                    {email}
                </Link>.
            </Typography>
            <Button
                color="primary"
                className={classes.button}
                onClick={handlePurchaseAnother}
            >
                Purchase Another Spot!
            </Button>
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
        email: 'testuser@spothero.com',
        selectedSpot
    };
};

const mapDispatchToProps = {
    pushTo: push,
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
