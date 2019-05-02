import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TextButton = ({
    className,
    children,
    href,
    iconPosition,
    block,
    disabled,
    loading,
    onClick,
    ...attrs
}) => {
    const classes = classNames(
        'TextButton',
        {'TextButton-block': block},
        {'TextButton-loading': loading},
        {[`TextButton-with-icon-${iconPosition}`]: iconPosition},
        className
    );
    const tag = (href) ? 'a' : 'button';
    const opts = {
        className: classes,
        disabled,
        onClick,
        href,
        ...attrs
    };

    if (!href) {
        opts.type = 'button';
    }

    return React.createElement(
        tag,
        opts,
        children
    );
};

TextButton.propTypes = {
    /** Additional class(es) to add to the component. */
    className: PropTypes.string,
    /** The markup node to insert into the button. */
    children: PropTypes.node,
    /** The url to send the link to, if applicable. If provided, will turn button into an anchor element. */
    href: PropTypes.node,
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

export default TextButton;
