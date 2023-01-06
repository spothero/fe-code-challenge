import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ModalHeader = ({children, className}) => (
    <div className={classnames('Modal__header', className)}>
        <h2>{children}</h2>
    </div>
);

ModalHeader.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default ModalHeader;
