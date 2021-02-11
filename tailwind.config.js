const colors = require('./tailwind/colors');
const spacing = require('./tailwind/spacing');
const maxHeight = require('./tailwind/maxHeight');
const fontFamily = require('./tailwind/fontFamily');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        maxHeight,
        fontFamily,
        extend: {
            colors,
            spacing,
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
