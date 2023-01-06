import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';

import {updateSelected} from '../spot/spot-actions';

const Checkout = ({selectedSpot, history}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const {firstName, lastName, email, phone} = formData;

    useEffect(() => {
        if (!selectedSpot) {
            history.push('/');
        }
    }, [selectedSpot, history]);

    const handleInputChange = event => {
        const {value} = event.target;

        setFormData(prevState => ({...prevState, [event.target.name]: value}));
    };

    const handleCreateReservation = async event => {
        event.preventDefault();

        const {
            data: {id},
        } = await axios.post('/reservations', {
            spotId: selectedSpot.id,
            ...formData,
        });

        history.push(`/confirmation/${id}`);
    };

    return (
        <div className="Checkout">
            <div className="Checkout-header">
                <Link to="/">{'<'}Back to Search</Link>
            </div>
            <form onSubmit={handleCreateReservation}>
                <div>
                    <label>First Name</label>
                    <input
                        value={firstName}
                        onChange={handleInputChange}
                        name="firstName"
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        value={lastName}
                        onChange={handleInputChange}
                        name="lastName"
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        value={email}
                        onChange={handleInputChange}
                        name="email"
                    />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input
                        value={phone}
                        onChange={handleInputChange}
                        name="phone"
                    />
                </div>
                <div>
                    <button type="submit">Book</button>
                </div>
            </form>
        </div>
    );
};

Checkout.propTypes = {
    history: PropTypes.object.isRequired,
    selectedSpot: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
