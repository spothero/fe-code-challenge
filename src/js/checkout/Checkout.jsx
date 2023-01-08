import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateSelected} from '../spot/spot-actions';
import Image from '../common/Image';
import Button from '../common/Button';

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
            <div className="Checkout-container">
                <div className="Checkout-header">
                    <Link to="/">{'<'}Back to Search</Link>
                </div>
                <div className="Checkout-details">
                    <Image src={selectedSpot.image} />
                    <div className="SpotItem-info">
                        <h2>{selectedSpot.title}</h2>
                        <p>{selectedSpot.distance}</p>
                    </div>
                </div>
                <div className="Checkout-form">
                    <form onSubmit={handleCreateReservation}>
                        <div className="form-control">
                            <label>
                                <p>First Name</p>
                            </label>
                            <input
                                value={firstName}
                                onChange={handleInputChange}
                                name="firstName"
                            />
                        </div>
                        <div className="form-control">
                            <label>
                                <p>Last Name</p>
                            </label>
                            <input
                                value={lastName}
                                onChange={handleInputChange}
                                name="lastName"
                            />
                        </div>
                        <div className="form-control">
                            <label>Email</label>
                            <input
                                value={email}
                                type="email"
                                onChange={handleInputChange}
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label>Phone Number</label>
                            <input
                                value={phone}
                                onChange={handleInputChange}
                                name="phone"
                                required
                            />
                        </div>
                        <div className="Checkout-submit-button">
                            <Button color="quaternary" type="submit">
                                Purchase for $
                                {(selectedSpot.price / 100).toFixed(2)}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
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
