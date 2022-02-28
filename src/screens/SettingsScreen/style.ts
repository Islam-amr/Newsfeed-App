import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: colors.BLACK,
        paddingHorizontal: 14
    },
    darkmodeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    darkText: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});
