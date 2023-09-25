import React from 'react';
import userEvent from '@testing-library/user-event';
import {screen, render as rtlRender} from '@testing-library/react';

import Button from './Button';

const render = ({buttonText, ...props}) =>
    rtlRender(<Button {...props}>{buttonText}</Button>);

describe('<Button />', () => {
    const buttonText = 'Button';

    it('renders as expected', () => {
        render({buttonText});

        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText(buttonText)).toBeInTheDocument();
    });

    it('is clickable', () => {
        const onClick = jest.fn();

        render({buttonText, onClick});

        expect(onClick).toHaveBeenCalledTimes(0);

        userEvent.click(screen.getByRole('button'));

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('can be disabled', () => {
        const onClick = jest.fn();

        render({buttonText, onClick, disabled: true});

        expect(onClick).toHaveBeenCalledTimes(0);

        userEvent.click(screen.getByRole('button'));

        expect(onClick).toHaveBeenCalledTimes(0);
    });
});
