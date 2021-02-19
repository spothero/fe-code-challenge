const fontFamily = 'Open Sans, sans-serif';

const fontSizes = {
    'text-xs': '0.75rem',
    'text-sm': '0.875rem',
    'text-base': '1rem',
    'text-lg': '1.125rem',
    'text-xl': '1.25rem',
    'text-2xl': '1.5rem',
    'text-3xl': '1.875rem',
};

const fontWeight = {
    base: '400',
    semibold: '600',
    bold: '900',
};

const headers = {
    h1: {
        fontSize: fontSizes['text-3xl'],
        fontWeight: fontWeight.semibold,
    },
    h2: {
        fontSize: fontSizes['text-lg'],
        fontWeight: fontWeight.semibold,
    },
};

const text = {
    body2: {
        fontSize: fontSizes['text-sm'],
    },
};

const typography = {
    fontFamily,
    ...headers,
    ...text,
};

export default typography;
