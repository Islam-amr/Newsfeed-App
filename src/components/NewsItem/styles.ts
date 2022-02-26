import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
    cardContainer: {
        width: '100%',
        height: 160,
        overflow: 'hidden',
        borderWidth: 0.2,
        borderColor: colors.LIGHT_GREY,
        marginBottom: 18,
        borderRadius: 14
    },
    newsImage: {
        width: '100%',
        aspectRatio: 1.5,
        resizeMode: 'cover'
    },
    shadedLayerContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    linearContainer: {
        flex: 1
    },
    titleContainer: {
        flex: 1,
        padding: 10,
        flexDirection: 'column-reverse'
    },
    title: {
        fontSize: 14,
        color: colors.WHITE,
        fontWeight: '900'
    },
    author: {
        color: colors.WHITE,
        marginTop: 4,
        fontSize: 10
    }
});
