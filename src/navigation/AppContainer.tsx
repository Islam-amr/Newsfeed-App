import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { NewsStackScreens } from './StackScreens'

const AppContainer = () => {
    return (
        <NavigationContainer>
            <NewsStackScreens />
        </NavigationContainer>
    )
}

export default AppContainer
