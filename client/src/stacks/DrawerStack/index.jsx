import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../../components/DrawerContent';
import Map from '../../screens/Map';

const DrawerStack = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          zIndex: 100,
          width: '100%',
        },
        headerShown: false,
        drawerPosition: 'right',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Map" component={Map} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
