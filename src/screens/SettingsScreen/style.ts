import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: colors.BLACK,
        paddingHorizontal: 14
    },
    darkmodeContainer: {
        justifyContent: 'center'
    },
    darkText: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 16,
    },
    switch: {
        marginTop: 12
    }
});
