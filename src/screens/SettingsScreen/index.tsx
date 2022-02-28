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


const SettingsScreen = () => {
    const { colors } = useTheme()
    const [darkMode, setDarkMode] = useState<boolean>(false)

    return (
        <View style={[styles.screenContainer, { backgroundColor: colors.primary }]}>
            <View style={styles.darkmodeContainer}>
                <Text style={[styles.darkText, { color: colors.text }]}>{STRINGS.t('darkMode')}</Text>
                <Switch
                    containerStyle={{ marginHorizontal: 14 }}
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
