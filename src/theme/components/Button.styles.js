const baseStyle = {
    m: 0,
    p: '0.5rem 2rem',
    fontSize: 'sm',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    userSelect: 'none',
    appearance: 'none',
    background: 'none',
    whiteSpace: 'nowrap',
    borderRadius: 'base',
    position: 'relative',
    fontWeight: 'semibold',
    display: 'inline-block',
    transition: 'background-color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), border 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
};
const sizes = {};

const variants = {
    primary: {
        color: 'neutrals.white',
        bg: 'brand.blue.DEFAULT',
        border: '1px solid brand.blue.DEFAULT',
        _hover: {
            bg: 'brand.blue.700',
            borderColor: 'brand.blue.700'
        }
    },
    text: {
        padding: 0,
        borderRadius: 'none',
        textAlign: 'initial',
        color: 'brand.blue.DEFAULT',
        transition: 'color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        _hover: {
            color: 'brand.blue.700'
        }
    }
};
const defaultProps = {};

export default {
    baseStyle,
    sizes,
    variants,
    defaultProps
};
