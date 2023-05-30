import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from '../../stacks/MainStack';
import AuthStack from '../../stacks/AuthStack';
import {AuthContextProvider} from '../../AuthContext';
import store from '../../store';
import {useAuth0} from 'react-native-auth0';

const Main = () => {
  const {user} = useAuth0();
  const loggedIn = user !== undefined && user !== null;

  const navTheme = {
    colors: {
      background: '#171717',
    },
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthContextProvider>
        <NavigationContainer theme={navTheme}>
          {!loggedIn ? <AuthStack /> : <MainStack />}
        </NavigationContainer>
      </AuthContextProvider>
    </SafeAreaView>
  );
};

export default Main;
