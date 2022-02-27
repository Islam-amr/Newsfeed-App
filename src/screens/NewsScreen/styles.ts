import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

const { width } = Dimensions.get('window')

export default StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: colors.BLACK,
        paddingHorizontal: 14
    },
    marginContainer: {
        marginVertical: 14
    },
    skeletonCard: {
        opacity: 0.2,
        height: 160,
        width: width - width * 0.07,
        borderRadius: 14
    }
});
