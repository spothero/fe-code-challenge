const styles = {
    global: {
        'html, body': {
            color: 'brand.darkBlue.DEFAULT',
            fontFamily: 'Open Sans, sans-serif',
            bg: 'neutrals.pavement.DEFAULT'
        },
        p: {
            fontSize: '0.875rem'
        },
        a: {
            color: 'brand.blue.DEFAULT',
            transition: 'color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',

            _hover: {
                color: 'brand.blue.700',
                textDecoration: 'underline'
            }
        }
    }
};

export default styles;
