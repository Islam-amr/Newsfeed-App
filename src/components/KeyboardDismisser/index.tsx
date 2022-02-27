import React from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

type Props = {
    children?: React.ReactChild
};

const KeyboardDismisser: React.FC<Props> = (props) => {
    return (
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
            {props.children}
        </TouchableWithoutFeedback>
    )
}

export default KeyboardDismisser

