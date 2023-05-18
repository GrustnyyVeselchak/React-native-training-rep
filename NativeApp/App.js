import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScrean from './src/routs/home';
import AddScrean from './src/routs/add';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="HomeScrean"
            component={HomeScrean}
        />
        <Stack.Screen 
            name="AddScrean" 
            component={AddScrean}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
