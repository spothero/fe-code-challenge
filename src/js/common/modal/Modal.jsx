import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Modal = ({isOpen, className, children, onClose, dataTestId}) => {
    const classes = classNames('Modal', className, {'Modal--show': isOpen});

    return (
        <div
            className={classes}
            data-testid={dataTestId}
        >
            <div className="Modal__dialog">
                <span
                    className="close-icon"
                    data-testid="close"
                    onClick={onClose}
                >
                    X
                </span>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    dataTestId: PropTypes.string,
};

export default Modal;
