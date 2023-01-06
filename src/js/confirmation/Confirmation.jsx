import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Button from '../common/Button';
import Image from '../common/Image';
import {updateSelected} from '../spot/spot-actions';

const Confirmation = ({selectedSpot, setSpot, history}) => {
    const {reservationId} = useParams();
    const [reservation, setReservation] = useState({});
    const {email} = reservation;

    useEffect(() => {
        if (!reservationId) {
            history.push('/');

            return;
        }

        const fetchReservation = async () => {
            const {data} = await axios.get(`/reservations/${reservationId}`);
            const {data: spot} = await axios.get(`/spots/${data.spotId}`);

            setReservation(data);
            setSpot(spot);
        };

        fetchReservation();
    }, [history, reservationId, setSpot]);

    const onPurchaseAnotherClick = () => {
        history.push('/');
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
    selectedSpot: PropTypes.object,
    setSpot: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    const {
        spot: {selected: selectedSpot},
    } = state;

    return {
        selectedSpot,
    };
};

const mapDispatchToProps = {
    setSpot: updateSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
