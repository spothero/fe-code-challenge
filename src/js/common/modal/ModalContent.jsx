import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ModalContent = ({children, className}) => (
    <div className={classNames('Modal__content', className)}>{children}</div>
);

ModalContent.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default ModalContent;
