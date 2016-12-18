import {
    StyleSheet,
    PixelRatio
} from 'react-native';

const PR = PixelRatio.get();
const ELASTIC_MAP = {
    height: {
        2: 1,
        3: 1
    },
    fontSize: {
        2: 1,
        3: 1.2
    },
    lineHeight: {
        2: 1,
        3: 1.2
    }
};

let repair = (styles) => {
    for (var style in styles) {
        for (var k in styles[style]) {
            if (ELASTIC_MAP[k] && ELASTIC_MAP[k][PR]) {
                styles[style][k] = styles[style][k] * ELASTIC_MAP[k][PR];
            }
        }
    }

    return styles;
};

let create = (styles) => {
    return StyleSheet.create(repair(styles));
};

export default {
    repair: repair,
    create: create
};
