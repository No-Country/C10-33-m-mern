import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabStack} from '../TabStack';
import HamburgerMenu from '../../components/HamburgerMenu';

const HamburgerDrawerStack = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          zIndex: 100,
          width: 155,
          height: '91%',
        },
        headerShown: false,
        drawerPosition: 'right',
      }}
      drawerContent={props => <HamburgerMenu {...props} />}>
      <Drawer.Screen name="TabStack" component={TabStack} />
    </Drawer.Navigator>
  );
};

export default HamburgerDrawerStack;
