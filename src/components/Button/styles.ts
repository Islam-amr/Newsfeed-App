import { StyleSheet, Text, View } from 'react-native'
import colors from '../../utils/colors'

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.WHITE,
        borderRadius: 5,
        minHeight: 40,
        maxHeight: 50
    },
    title: {
        fontSize: 18,
        color: colors.BLACK,
    }
})
