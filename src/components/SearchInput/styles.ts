import { StyleSheet, Text, View } from 'react-native'
import colors from '../../utils/colors'

export default StyleSheet.create({
    searchContainer: {
        marginTop: 4,
        overflow: 'hidden',
        flexDirection: 'row',
        width: '100%',
        height: 50,
        backgroundColor: colors.BLACK,
        borderRadius: 14,
        borderColor: colors.LIGHT_GREY,
        borderWidth: 0.5
    },
    iconContainer: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: '50%',
        height: '50%'
    },
    inputContainer: {
        flex: 0.85
    },
    input: {
        width: '100%',
        height: '100%',
        color: colors.WHITE
    }
})
