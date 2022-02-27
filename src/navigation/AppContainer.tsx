import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

// Botttom Tabs import
import BottomTabs from './BottomTabs'

const AppContainer = () => {
    return (
        <NavigationContainer>
            <BottomTabs />
        </NavigationContainer>
    )
}

export default AppContainer
