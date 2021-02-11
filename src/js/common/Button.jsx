import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BUTTON_TYPES = {
    button: 'button',
    submit: 'submit',
    reset: 'reset'
};

const BUTTON_COLORS = {
    primary: 'primary',
    secondary: 'secondary'
};

const style = {
    pseudo: 'focus:outline-none active:outline-none disabled:cursor-not-allowed',
    font: 'font-openSans font-semibold text-2xl text-center',
    base: 'py-4 px-12 rounded border border-solid whitespace-nowrap pointer inline-block select-none appearance-none relative outline-none transition-all',
    [BUTTON_COLORS.primary]: isDisabled => `bg-brand-blue text-neutrals-white border-brand-blue ${isDisabled ? 'bg-neutrals-dashboard text-white border-neutrals-dashboard' : 'hover:bg-brand-blue-700 hover:border-brand-blue-700'}`,
    [BUTTON_COLORS.secondary]: isDisabled => `bg-neutrals-white text-brand-blue border-neutrals-dashboard ${isDisabled ? 'bg-neutrals-pavement text-neutrals-cement border-neutrals-dashboard' : 'hover:border-brand-blue'}`,
};

const Button = ({
    onClick,
    children,
    disabled,
    className,
    type = BUTTON_TYPES.button,
    color = BUTTON_COLORS.primary,
    ...attrs
}) => (
    <button
        type={type}
        onClick={onClick}
        className={classNames(
            style.base,
            style.font,
            style[color](disabled),
            className
        )}
        disabled={disabled}
        {...attrs}
    >
        {children}
    </button>
);

Button.propTypes = {
    /** Additional class(es) to add to the component. */
    className: PropTypes.string,
    /** The markup node to insert into the button. */
    children: PropTypes.node,
    /** The type of button that is rendered. */
    type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
    /** The color of the button. */
    color: PropTypes.oneOf(Object.values(BUTTON_COLORS)),
    /** Whether the button is disabled or not. */
    disabled: PropTypes.bool,
    /**
     * The handler to execute when the button is clicked.
     *
     * @param {SyntheticEvent} evt - The React `SyntheticEvent`.
     */
    onClick: PropTypes.func
};

export default Button;
