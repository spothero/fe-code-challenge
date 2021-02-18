import {createMuiTheme} from '@material-ui/core/styles';

import {colors, typography} from './foundation';

const styles = {
    typography,
    palette: colors,
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    color: colors.brand.darkBlue[900]
                }
            }
        }
    }
};

export default createMuiTheme(styles);
