import {extendTheme} from '@chakra-ui/react';

import styles from './styles';
import * as foundation from './foundation';

import * as components from './components';

const overrides = {
    initialColorMode: 'light',
    useSystemColorMode: false,
    styles,
    ...foundation,
    components
};

export default extendTheme(overrides);
