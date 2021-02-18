import {withStyles} from '@material-ui/core/styles';
import {default as MUButton} from '@material-ui/core/Button';

const baseStyle = {
    margin: 0,
    border: 'none',
    outline: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    fontWeight: '600',
    userSelect: 'none',
    appearance: 'none',
    background: 'none',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    position: 'relative',
    padding: '0.5rem 2rem',
    display: 'inline-block',
    borderRadius: '0.25rem',
    textTransform: 'capitalize',
    transition: 'background-color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), border 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
};

const BaseButton = withStyles({
    root: baseStyle
})(MUButton);

export const Button = withStyles(theme => ({
    root: {
        color: theme.palette.neutrals.white,
        background: theme.palette.brand.blue.DEFAULT,
        border: `1px solid ${theme.palette.brand.blue.DEFAULT}`,
        '&:hover': {
            background: theme.palette.brand.blue['700'],
            borderColor: theme.palette.brand.blue['700']
        }
    }
}))(BaseButton);

export const TextButton = withStyles(theme => ({
    root: {
        padding: 0,
        borderRadius: 'none',
        textAlign: 'initial',
        color: theme.palette.brand.blue.DEFAULT,
        transition: 'color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        '&:hover': {
            background: 'none',
            color: theme.palette.brand.blue['700'],
        }
    }
}))(BaseButton);
