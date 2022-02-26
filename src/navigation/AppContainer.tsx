import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

// stacks import
import { NewsStackScreens } from './StackScreens'

const AppContainer = () => {
    return (
        <NavigationContainer>
            <NewsStackScreens />
        </NavigationContainer>
    )
}

export default AppContainer
