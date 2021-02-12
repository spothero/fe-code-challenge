const neutrals = {
    white: '#ffffff',
    pavement: {
        DEFAULT: '#f6f7f9',
        dark: '#E2E3E4'
    },
    dashboard: '#cbd4de',
    cement: '#5c7996',
    black: '#212121',
};

const darkBlue = {
    50: '#f4fafc',
    100: '#e4f7fb',
    200: '#bfebf6',
    300: '#92d9f4',
    400: '#51b7f0',
    500: '#2590ea',
    600: '#1a6cda',
    700: '#1b55b6',
    800: '#194185',
    900: '#002d5b',
};

const blue = {
    50: '#f6fbfd',
    100: '#e6f8fd',
    200: '#bfeafb',
    300: '#93d5fa',
    400: '#57acf9',
    500: '#0082ff',
    600: '#1a5bf1',
    700: '#1947d8',
    800: '#1536a4',
    900: '#122c7d',
};

const green = {
    50: '#eaf8f6',
    100: '#cef7ef',
    200: '#9cf3da',
    300: '#5beac0',
    400: '#19dc99',
    500: '#1dbd71',
    600: '#07b055',
    700: '#0c924a',
    800: '#107342',
    900: '#105d38',
};

const orange = {
    50: '#f9f5e5',
    100: '#faf0bd',
    200: '#f6e67c',
    300: '#f1d439',
    400: '#ffbf02',
    500: '#e19706',
    600: '#cf7404',
    700: '#ae5708',
    800: '#8e440e',
    900: '#743710',
};

const red = {
    50: '#fdf9f8',
    100: '#fdeef3',
    200: '#fbcee6',
    300: '#fba4d1',
    400: '#fc6bad',
    500: '#fc4086',
    600: '#f7265f',
    700: '#e01438',
    800: '#b4193c',
    900: '#901530',
};

const yellow = {
    50: '#f9f8eb',
    100: '#f9f4c7',
    200: '#f5ec82',
    300: '#fff000',
    400: '#dfc012',
    500: '#cfa206',
    600: '#b47e04',
    700: '#916007',
    800: '#72490c',
    900: '#5a3a0e',
};

const brand = {
    darkBlue: {
        ...darkBlue,
        DEFAULT: darkBlue['900'],
    },
    blue: {
        ...blue,
        DEFAULT: blue['500'],
    },
    green: {
        ...green,
        DEFAULT: green['500'],
    },
    orange: {
        ...orange,
        DEFAULT: orange['400'],
    },
    red: {
        ...red,
        DEFAULT: red['700'],
    },
    yellow: {
        ...yellow,
        DEFAULT: yellow['300'],
    },
};

const social = {
    behance: '#1769ff',
    dribbble: '#ea4c89',
    facebook: '#3b5998',
    github: '#cccccc',
    linkedin: '#007bb6',
    twitter: '#00aced',
    yelp: '#c41200',
};

const colors = {
    brand,
    social,
    neutrals,
};

export default colors;
