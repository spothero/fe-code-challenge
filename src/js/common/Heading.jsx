
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TEXT_SIZE = {
    1: 'text-3xl',
    2: 'text-2xl',
    3: 'text-xl',
    4: 'text-lg',
    5: 'text-base',
    6: 'text-sm'
};

const Heading = ({level, className, ...props}) => {
    const Component = `h${level}`;

    return (
        <Component
            {...props}
            className={classNames('font-semibold', TEXT_SIZE[level], className)}
        />
    );
};

Heading.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
};

export default Heading;
