import {createStackNavigator} from '@react-navigation/stack';
import sOne from '../screens/One';
import sTwo from '../screens/Two';
import React from 'react';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={sOne} />
      <Stack.Screen name="Settings" component={sTwo} />
    </Stack.Navigator>
  );
}

export default MyStack;
