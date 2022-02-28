import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';

// all screens variables
import screens from '../utils/screens';

// screens import
import NewsScreen from '../screens/NewsScreen';
import SettingsScreen from '../screens/SettingsScreen';

// colors import
import colors from '../utils/colors';

// string import
import strings from '../utils/strings'
import NewsDetailsScreen from '../screens/NewsDetailsScreen';

const Stack = createNativeStackNavigator();

const NewsStackScreens = () => {
    const { colors } = useTheme()
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.primary, },
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerTintColor: colors.background,
            headerTitleAlign: 'center', headerTitleStyle: { color: colors.text, fontSize: 24, fontWeight: 'bold' }
        }}>
            <Stack.Screen name={screens.NEWS_SCREEN} component={NewsScreen} options={{ title: strings.t('newsScreen') }} />
            <Stack.Screen name={screens.NEWS_DETAILS_SCREEN} component={NewsDetailsScreen} options={{ title: strings.t('details') }} />
        </Stack.Navigator>
    )
}

const SettingsStackScreens = () => {
    const { colors } = useTheme()
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.primary },
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center', headerTitleStyle: { color: colors.text, fontSize: 24, fontWeight: 'bold' }
        }}>
            <Stack.Screen name={screens.SETTINGS_SCREEN} component={SettingsScreen} options={{ title: strings.t('settings') }} />
        </Stack.Navigator>
    )
}


export { NewsStackScreens, SettingsStackScreens }
