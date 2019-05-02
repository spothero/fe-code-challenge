import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
    className,
    children,
    type,
    color,
    iconPosition,
    block,
    disabled,
    loading,
    onClick,
    ...attrs
}) => {
    const classes = classNames(
        'Button',
        {[`Button-${color}`]: color},
        {'Button-block': block},
        {'Button-loading': loading},
        {[`Button-with-icon-${iconPosition}`]: iconPosition},
        className
    );

    return (
        <button
            className={classes}
            type={type}
            disabled={disabled}
            onClick={onClick}
            {...attrs}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    /** Additional class(es) to add to the component. */
    className: PropTypes.string,
    /** The markup node to insert into the button. */
    children: PropTypes.node,
    /** The type of button that is rendered. */
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    /** The color of the button. */
    color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    /** If an icon is provided, whether to add the margin to the icon on the left or right side. */
    iconPosition: PropTypes.oneOf(['left', 'right']),
    /** Whether the button should display as a block level element. */
    block: PropTypes.bool,
    /** Whether the button is disabled or not. */
    disabled: PropTypes.bool,
    /** Whether to show a loading animation inside of the button. */
    loading: PropTypes.bool,
    /**
     * The handler to execute when the button is clicked.
     *
     * @param {SyntheticEvent} evt - The React `SyntheticEvent`.
     */
    onClick: PropTypes.func
};

Button.defaultProps = {
    type: 'button'
};

export default Button;
