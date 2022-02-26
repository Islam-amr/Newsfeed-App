import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// all screens variables
import screens from '../utils/screens';

// screens import
import NewsScreen from '../screens/NewsScreen';

// colors import
import colors from '../utils/colors';

const headerStyle = {
    backgroundColor: colors.BLACK
}
const headerTitleStyle = {
    color: colors.WHITE,
    fontSize: 24,
    fontWeight: 'bold'
}

const Stack = createNativeStackNavigator();

const NewsStackScreens = () => {
    return (
        <Stack.Navigator screenOptions={{ headerStyle, headerTitleStyle }}>
            <Stack.Screen name={screens.NEWS_SCREEN} component={NewsScreen} options={{ title: 'News' }} />
        </Stack.Navigator>
    )
}

export { NewsStackScreens }
