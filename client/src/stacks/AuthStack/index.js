import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Welcome from '../../screens/Welcome';
import Register from '../../screens/Register';

const AuthStackNav = createNativeStackNavigator();

const AuthStack = () => (
  <AuthStackNav.Navigator>
    <AuthStackNav.Screen
      name="Welcome"
      component={Welcome}
      options={{
        headerShown: false,
      }}
    />
    <AuthStackNav.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    />
    <AuthStackNav.Screen
      name="Register"
      component={Register}
      options={{
        headerShown: false,
      }}
    />
  </AuthStackNav.Navigator>
);

export default AuthStack;
