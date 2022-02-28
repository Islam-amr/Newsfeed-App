import React, { createRef, RefObject } from 'react'
import { TextInput, View, TouchableOpacity, ViewStyle } from 'react-native'
import FastImage from 'react-native-fast-image';
import { useTheme } from '@react-navigation/native';

// images import
import images from '../../utils/images';

// styles import
import styles from './styles';

// strings import
import strings from '../../utils/strings'

type SearchInputProps = React.ComponentType<typeof TextInput> & {
    inputContainerStyle?: ViewStyle
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
    const { colors } = useTheme()
    const { inputContainerStyle, ...restOfProps } = props
    const inputRef: RefObject<TextInput> = createRef();
    return (
        <TouchableOpacity activeOpacity={1} style={[styles.searchContainer, { backgroundColor: colors.primary, borderColor: colors.inactiveTab }]} onPress={() => inputRef.current.focus()}>
            <View style={styles.iconContainer}>
                <FastImage source={images.SEARCH} style={styles.icon} resizeMode={'contain'} tintColor={colors.text} />
            </View>
            <View style={[styles.inputContainer, { ...inputContainerStyle }]}>
                <TextInput ref={inputRef} placeholder={strings.t('search')} placeholderTextColor={colors.text} style={[styles.input, { color: colors.text }]} {...restOfProps} />
            </View>
        </TouchableOpacity >
    )
}

export default SearchInput
