import { StyleSheet, Text, View } from 'react-native'
import colors from '../../utils/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 5
    },
    headerTitle: {
        fontSize: 18,
        color: colors.WHITE,
        fontWeight: 'bold',
        marginBottom: 14,
        textAlign: 'left'
    },
    listContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    touchArea: {
        flexDirection: 'row',
        flex: 1,
        paddingBottom: 12,
    },
    radioButton: {
        width: 20,
        height: 20,
        backgroundColor: 'white',
        borderRadius: 20 / 2,
        marginEnd: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioTxt: {
        fontSize: 16,
        color: colors.WHITE
    },
    activeCircle: {
        width: 13,
        height: 13,
        borderRadius: 13 / 2,
        backgroundColor: colors.BLACK
    }
})
