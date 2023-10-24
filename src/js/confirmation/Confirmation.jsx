import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import Button from '../common/Button';
import Image from '../common/Image';

const Confirmation = ({selectedSpot, pushTo, email}) => {
    useEffect(() => {
        // if you refresh on confirmation and there isn't a selectedSpot, make sure to go back to search and render nothing here
        if (!selectedSpot) {
            pushTo('/');
        }
    }, [selectedSpot, pushTo]);

    const onPurchaseAnotherClick = _ => {
        pushTo('/');
    };

    if (!selectedSpot) {
        return null;
    }

    return (
        <div className="Confirmation">
            <h1>Park it like its hot!</h1>
            <p>
                You successfully purchased parking at{' '}
                <strong>{selectedSpot.title}</strong> for{' '}
                <strong>${(selectedSpot.price / 100).toFixed(2)}</strong>.
            </p>
            <Image src={selectedSpot.image} />
            <p>
                We emailed a receipt to <a href={`mailto:${email}`}>{email}</a>.
            </p>
            <Button color="primary" onClick={onPurchaseAnotherClick}>
                Purchase Another Spot!
            </Button>
        </div>
    );
};

Confirmation.propTypes = {
    email: PropTypes.string.isRequired,
    selectedSpot: PropTypes.object,
    pushTo: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    const {
        checkout: {email},
        spot: {selected: selectedSpot},
    } = state;

    return {
        email,
        selectedSpot,
    };
};

const mapDispatchToProps = {
    pushTo: push,
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
