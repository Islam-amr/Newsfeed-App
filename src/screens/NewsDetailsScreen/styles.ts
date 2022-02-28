import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

const { width } = Dimensions.get('window')

export default StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: colors.BLACK,
        paddingHorizontal: 14,
    },
    articleImage: {
        width: '100%',
        height: 250
    },
    detailsCon: {
        marginTop: 12
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    descBody: {
        fontSize: 14,
        marginTop: 8,
        marginBottom: 18
    }
});
