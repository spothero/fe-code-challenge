import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import React, {useEffect} from 'react';
import {push} from 'connected-react-router';

import Image from '../common/Image';
import Button from '../common/Button';
import Heading from '../common/Heading';

const styles = {
    confirmation: 'w-4/12 mx-auto my-16 Confirmation p-10 bg-neutrals-white rounded border border-neutrals-dashboard text-center',
    heading: 'text-center uppercase',
    image: 'block my-12 mx-auto rounded border border-solid border-neutrals-dashboard',
    button: 'mt-12'
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
        <div className={styles.confirmation}>
            <Heading
                level={1}
                className={styles.heading}
            >
                Park it like its hot!
            </Heading>
            <p>You successfully purchased parking at <strong>{selectedSpot.title}</strong> for <strong>${(selectedSpot.price / 100).toFixed(2)}</strong>.</p>
            <Image
                src={selectedSpot.image}
                className={styles.image}
            />
            <p>We emailed a receipt to <a href={`mailto:${email}`}>{email}</a>.</p>

            <Button
                color="primary"
                className={styles.button}
                onClick={handlePurchaseAnother}
            >
                Purchase Another Spot!
            </Button>
        </div>
    );
};

Confirmation.propTypes = {
    selectedSpot: PropTypes.object,
    pushTo: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
    const {
        checkout: {
            email
        },
        spot: {
            selected: selectedSpot
        }
    } = state;

    return {
        email,
        selectedSpot
    };
};

const mapDispatchToProps = {
    pushTo: push,
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
