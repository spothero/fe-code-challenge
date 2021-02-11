import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const style = {
    pseudo: 'focus:outline-none active:outline-none disabled:cursor-not-allowed',
    font: 'font-openSans font-semibold text-2xl text-center',
    base: 'py-4 px-12 rounded border border-solid whitespace-nowrap pointer inline-block select-none appearance-none relative outline-none transition-all',
    primary: isDisabled => `bg-brand-blue text-neutrals-white border-brand-blue ${isDisabled ? 'bg-neutrals-dashboard text-white border-neutrals-dashboard' : 'hover:bg-brand-blue-700 hover:border-brand-blue-700'}`,
    secondary: isDisabled => `bg-neutrals-white text-brand-blue border-neutrals-dashboard ${isDisabled ? 'bg-neutrals-pavement text-neutrals-cement border-neutrals-dashboard' : 'hover:border-brand-blue'}`,
};

const Button = ({
    type,
    color,
    onClick,
    children,
    disabled,
    className,
    ...attrs
}) => {
    const classes = classNames(
        style.base,
        style.font,
        style[color](disabled),
        className
    );

    return (
        <button
            type={type}
            onClick={onClick}
            className={classes}
            disabled={disabled}
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
    color: PropTypes.oneOf(['primary', 'secondary']),
    /** Whether the button is disabled or not. */
    disabled: PropTypes.bool,
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
