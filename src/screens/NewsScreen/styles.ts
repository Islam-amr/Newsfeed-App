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
        marginTop: 14
    },
    skeletonCard: {
        height: 160,
        width: width - width * 0.07,
        borderRadius: 14,
    },
    errorContainer: {
        flex: 1,
        backgroundColor: colors.BLACK,
        justifyContent: 'center',
        alignItems: "center"
    },
    errorImage: {
        width: 120,
        aspectRatio: 1.5
    },
    error: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 12,
        textAlign: "center"
    },
    buttonStyle: {
        marginTop: 12
    }
});
