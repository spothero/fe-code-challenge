import colors from './colors';

const fontFamily = 'Open Sans, sans-serif';

const fontSizes = {
    'text-xs': '0.75rem',
    'text-sm': '0.875rem',
    'text-base': '1rem',
    'text-lg': '1.125rem',
    'text-xl': '1.25rem',
    'text-2xl': '1.5rem',
    'text-3xl': '1.875rem'
};

const fontWeightSemiBold = 600;
const fontWeightBold = 900;

const headers = {
    h1: {
        fontSize: fontSizes['text-3xl'],
        fontWeight: fontWeightSemiBold,
    }
};

const text = {
    body2: {
        fontSize: fontSizes['text-sm']
    },
    anchor: {
        fontFamily,
        color: colors.brand.blue.DEFAULT,
        textDecoration: 'none',
        '&:hover': {
            color: colors.brand.blue[700]
        }
    }
};

const typography = {
    fontFamily,
    ...headers,
    ...text,
    fontWeightSemiBold,
    fontWeightBold
};

export default typography;
