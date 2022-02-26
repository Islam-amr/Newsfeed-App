import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// all screens variables
import screens from '../utils/screens';

// screens import
import NewsScreen from '../screens/NewsScreen';

const Stack = createNativeStackNavigator();

const NewsStackScreens = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screens.NEWS_SCREEN} component={NewsScreen} options={{ title: 'News' }} />
        </Stack.Navigator>
    )
}

export { NewsStackScreens }
