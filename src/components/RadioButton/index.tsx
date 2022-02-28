import React, { useState, memo, useCallback } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

// styles import
import styles from './styles';

// strings import
import STRINGS from '../../utils/strings'

interface EnumList {
    key: number, value: string, title: string
}

interface RadioButtonProps {
    title?: string,
    initialValue?: number | undefined,
    list: EnumList[],
    onSelect: (result: string) => void,
}

const RadioButton: React.FC<RadioButtonProps> = (props) => {
    const { colors } = useTheme()
    const { title, initialValue, list, onSelect } = props

    // to set the initial selected radio if needed 
    const [selectedButton, setSelectedButton] = useState<any>(initialValue ? list[initialValue as number] : list[0])

    // to update selection and return value in onSelect getter function
    const selectHandler = useCallback((index: string, item: any) => {
        setSelectedButton(item);
        onSelect({ ...item, index });
    }, [selectedButton])

    const renderRadioButtons = ({ item, index }: any) => {
        let isActive = selectedButton === item
        return (
            <View style={styles.radioContainer}>
                <TouchableOpacity activeOpacity={0.7} style={styles.touchArea} onPress={() => selectHandler(index, item)}>
                    <View style={[styles.radioButton, isActive && { borderColor: colors.text }]} >
                        {isActive && <View style={styles.activeCircle} />}
                    </View>
                    <Text style={[styles.radioTxt, { color: colors.text }]}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {title && <Text style={[styles.headerTitle, { color: colors.text }]}>{STRINGS.t('language')}</Text>}
            <View style={styles.listContainer}>
                <FlatList scrollEnabled={false} data={list} keyExtractor={item => item.key.toString()} renderItem={renderRadioButtons} />
            </View>
        </View>
    )
}

export default memo(RadioButton)
