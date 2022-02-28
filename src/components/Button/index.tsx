import React from 'react'
import { Text, TouchableOpacity, ViewStyle, TextStyle, } from 'react-native'
import { useTheme } from '@react-navigation/native';

// styles import
import styles from './styles';

type ButtonProps = React.ComponentProps<typeof TouchableOpacity> & {
    title: string,
    buttonStyle?: ViewStyle,
    titleStyle?: TextStyle,
}

const Button = (props: ButtonProps) => {
    const { colors } = useTheme()
    const { title, style, buttonStyle, titleStyle, ...restOfProps } = props
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: colors.background }, { ...buttonStyle }]} {...restOfProps} activeOpacity={0.6}>
            <Text style={[styles.title, { color: colors.primary }, { ...titleStyle }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button
