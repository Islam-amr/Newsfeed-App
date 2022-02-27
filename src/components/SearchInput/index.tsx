import React, { createRef, RefObject } from 'react'
import { TextInput, View, TouchableOpacity, ViewStyle } from 'react-native'
import FastImage from 'react-native-fast-image';

// colors import
import colors from '../../utils/colors';

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
    const { inputContainerStyle, ...restOfProps } = props
    const inputRef: RefObject<TextInput> = createRef();
    return (
        <TouchableOpacity activeOpacity={1} style={styles.searchContainer} onPress={() => inputRef.current.focus()}>
            <View style={styles.iconContainer}>
                <FastImage source={images.SEARCH} style={styles.icon} resizeMode={'contain'} tintColor={colors.WHITE} />
            </View>
            <View style={[styles.inputContainer, { ...inputContainerStyle }]}>
                <TextInput ref={inputRef} placeholder={strings.t('search')} placeholderTextColor={colors.WHITE} style={styles.input} {...restOfProps} />
            </View>
        </TouchableOpacity >
    )
}

export default SearchInput
