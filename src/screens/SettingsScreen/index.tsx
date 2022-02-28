import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { EventRegister } from 'react-native-event-listeners';
import { Switch } from 'react-native-switch';

// styles import
import styles from './style'

// strings import
import STRINGS from '../../utils/strings'

// helpers import
import { useTheme } from '@react-navigation/native'

// components import
import RadioButton from '../../components/RadioButton';
import { changeLanguage } from '../../utils/helpers';
import { useCallback } from 'react';


const languageList = [{ key: 1, title: STRINGS.t('english'), value: 'en' }, { key: 2, title: STRINGS.t('arabic'), value: "ar" }]

const SettingsScreen = () => {
    const { colors } = useTheme()
    const [language, setLanguage] = useState<string>(STRINGS.language) // to store selected language
    const [darkMode, setDarkMode] = useState<boolean>(false) // to store selected language

    // to handle language toggle
    const onSelect = useCallback((item) => {
        setLanguage(item.value)
        if (language !== item.value) {
            changeLanguage()
        }
    }, [language])

    return (
        <View style={[styles.screenContainer, { backgroundColor: colors.primary }]}>
            <View style={{ flex: 0.2 }}>
                <RadioButton initialValue={language == 'en' ? 0 : 1} title={STRINGS.t('Language')} list={languageList} onSelect={onSelect} />
            </View>
            <View style={styles.darkmodeContainer}>
                <Text style={[styles.darkText, { color: colors.text }]}>{STRINGS.t('darkMode')}</Text>
                <Switch
                    containerStyle={styles.switch}
                    value={darkMode}
                    activeText={''}
                    inActiveText={''}
                    onValueChange={(v) => {
                        EventRegister.emit('changeThemeEvent', v)
                        setDarkMode(v)
                    }}
                />
            </View>
        </View>
    )
}

export default SettingsScreen
