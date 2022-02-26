import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>Navigation setup</Text>
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App
