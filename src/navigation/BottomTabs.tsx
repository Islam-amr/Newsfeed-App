import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FastImage from 'react-native-fast-image';
import { useTheme } from '@react-navigation/native';

// stacks import
import { NewsStackScreens, SettingsStackScreens } from './StackScreens'

// colors import
import colors from '../utils/colors';

// images import
import images from '../utils/images';

// strings import
import STRINGS from '../utils/strings';

const Tab = createBottomTabNavigator();

const TAB_STYLE = { width: 20, height: 20 }

const BottomTabs = () => {
    const { colors } = useTheme()
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: colors.primary }, tabBarActiveTintColor: colors.primary }}>
            <Tab.Screen
                name="News"
                component={NewsStackScreens}
                options={{
                    title: STRINGS.t('newsScreen'),
                    tabBarActiveTintColor: colors.background,
                    tabBarInactiveTintColor: colors.inactiveTab,
                    tabBarIcon: ({ color }) => (<FastImage source={images.NEWS} style={TAB_STYLE} tintColor={color} />)
                }} />
            <Tab.Screen
                name="Settings"
                component={SettingsStackScreens}
                options={{
                    title: STRINGS.t('settings'),
                    tabBarActiveTintColor: colors.background,
                    tabBarInactiveTintColor: colors.inactiveTab,
                    tabBarIcon: ({ color }) => (<FastImage source={images.SETTINGS} style={TAB_STYLE} tintColor={color} />)
                }} />
        </Tab.Navigator>
    )
}

export default BottomTabs
