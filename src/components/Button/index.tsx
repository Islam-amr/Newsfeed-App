import React from 'react'
import { Text, TouchableOpacity, ViewStyle, TextStyle, } from 'react-native'
import styles from './styles';

type ButtonProps = React.ComponentProps<typeof TouchableOpacity> & {
    title: string,
    buttonStyle?: ViewStyle,
    titleStyle?: TextStyle,
}

const Button = (props: ButtonProps) => {
    const { title, style, buttonStyle, titleStyle, ...restOfProps } = props
    return (
        <TouchableOpacity style={[styles.container, { ...buttonStyle }]} {...restOfProps} activeOpacity={0.6}>
            <Text style={[styles.title, { ...titleStyle }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button
