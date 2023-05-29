import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from '../../stacks/MainStack';
import AuthStack from '../../stacks/AuthStack';
import {AuthContextProvider} from '../../AuthContext';
import store from '../../store';

const Main = () => {
  const [auth, setAuth] = React.useState(() => store.getState().user);
  const navTheme = {
    colors: {
      background: '#171717',
    },
  };

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setAuth(store.getState().user.isLoggedIn);
    });

    console.log('auth = ', auth);
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthContextProvider>
        <NavigationContainer theme={navTheme}>
          {!auth ? <AuthStack /> : <MainStack />}
        </NavigationContainer>
      </AuthContextProvider>
    </SafeAreaView>
  );
};

export default Main;
