import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = isDisabled => [
    'pointer appearance-none select-none transition-colors',
    'relative inline-block whitespace-nowrap bg-none border-none m-0 p-0 outline-none',
    'font-openSans font-semibold text-brand-blue',
    'focus:outline-none active:outline-none',
    isDisabled ? 'cursor-not-allowed text-neutrals-dashboard' : 'hover:text-brands-blue-700'
];

const TextButton = ({
    href,
    className,
    ...attrs
}) => {
    const Component = href ? 'a' : 'button';

    const props = {
        href,
        className: classNames('TextButton', styles(attrs.disabled), className),
        ...attrs
    };

    if (!href) {
        props.type = 'button';
    }

    return (
        <Component {...props} />
    );
};

TextButton.propTypes = {
    /** Additional class(es) to add to the component. */
    className: PropTypes.string,
    /** The markup node to insert into the button. */
    children: PropTypes.node,
    /** The url to send the link to, if applicable. If provided, will turn button into an anchor element. */
    href: PropTypes.node,
    /** Whether the button is disabled or not. */
    disabled: PropTypes.bool,
    /**
     * The handler to execute when the button is clicked.
     *
     * @param {SyntheticEvent} evt - The React `SyntheticEvent`.
     */
    onClick: PropTypes.func
};

export default TextButton;
