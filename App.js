import React from 'react';
import { Home, PlantDetails } from './screens/index';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import tabs from './navigation/tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown:false
      }}
      initialRouteName='Tabs'
      >
        <Stack.Screen component={tabs} name={'Tabs'} options={{headerShown:false}}  />
        <Stack.Screen component={PlantDetails} name={'PlantDetails'} options={{headerShown:false}}  />
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;