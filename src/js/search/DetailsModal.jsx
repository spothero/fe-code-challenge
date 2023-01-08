import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import Button from '../common/Button';
import {Modal, ModalHeader, ModalContent} from '../common/modal';

const DetailsModal = ({isOpen, title, price, onClose, description}) => {
    const history = useHistory();

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className="details-modal"
            dataTestId="details-modal"
        >
            <ModalHeader className="details-modal__header">
                Spot Details
            </ModalHeader>
            <ModalContent>
                <h2>{title}</h2>
                <p className="description">{description}</p>
                <div className="book-btn-wrapper">
                    <Button
                        type="button"
                        color="primary"
                        onClick={() => history.push(`/checkout`)}
                    >
                        ${(price / 100).toFixed(2)} | Book it!
                    </Button>
                </div>
            </ModalContent>
        </Modal>
    );
};

DetailsModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default DetailsModal;
