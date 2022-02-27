import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FastImage from 'react-native-fast-image';

// stacks import
import { NewsStackScreens, SettingsStackScreens } from './StackScreens'

// colors import
import colors from '../utils/colors';

// images import
import images from '../utils/images';

const Tab = createBottomTabNavigator();

const TAB_STYLE = { width: 20, height: 20 }

const BottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: colors.BLACK }, tabBarActiveTintColor: colors.WHITE }}>
            <Tab.Screen
                name="News"
                component={NewsStackScreens}
                options={{
                    tabBarIcon: ({ color }) => (<FastImage source={images.NEWS} style={TAB_STYLE} tintColor={color} />)
                }} />
            <Tab.Screen
                name="Settings"
                component={SettingsStackScreens}
                options={{
                    tabBarIcon: ({ color }) => (<FastImage source={images.SETTINGS} style={TAB_STYLE} tintColor={color} />)
                }} />
        </Tab.Navigator>
    )
}

export default BottomTabs
