import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native';
import { EventRegister } from 'react-native-event-listeners'
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';

// Botttom Tabs import
import BottomTabs from './BottomTabs'

// colors import
import colors from '../utils/colors'

const DarkMode = {
    ...DarkTheme,
    colors: {
        primary: '#000',
        background: '#fff',
        card: 'rgb(255, 255, 255)',
        text: '#fff',
        border: 'rgba(0,0,0,0.5)',
        notification: 'rgb(255, 69, 58)',
        inactiveTab: "rgba(255,255,255,0.9)"
    },
};

const LightMode = {
    ...DefaultTheme,
    colors: {
        primary: '#fff',
        background: '#000',
        card: 'rgb(255, 255, 255)',
        text: '#000',
        border: 'rgba(0,0,0,0.5)',
        notification: 'rgb(255, 69, 58)',
        inactiveTab: "rgba(0,0,0,0.5)"
    },
};

const AppContainer = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false)

    useEffect(() => {
        let eventListener = EventRegister.addEventListener('changeThemeEvent', (data) => {
            setDarkMode(data)
        })
        return () => EventRegister.removeEventListener(eventListener)
    }, [])

    return (
        <>
            <StatusBar backgroundColor={darkMode ? colors.BLACK : colors.WHITE} barStyle={darkMode ? 'light-content' : 'dark-content'} />
            <NavigationContainer theme={darkMode ? DarkMode : LightMode}>
                <BottomTabs />
            </NavigationContainer>
        </>
    )
}

export default AppContainer
