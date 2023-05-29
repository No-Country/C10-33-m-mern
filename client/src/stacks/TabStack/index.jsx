import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../../screens/Home';
import SwapStack from '../SwapStack';
import {promiseWrapper} from '../../utils';
import {BarCodeScanner} from 'expo-barcode-scanner/build/BarCodeScanner';
import HamburgerStack from '../HamburgerStack';
import DrawerStack from '../DrawerStack';
import HomeIcon from '../../components/Icons/Home';
import SwapIcon from '../../components/Icons/SwapIcon';
import LocationIcon from '../../components/Icons/LocationIcon';
import ScannerIcon from '../../components/Icons/Scanner';
import HamburguerIcon from '../../components/Icons/HamburguerIcon';

const ScannerBase = () => <View style={{flex: 1, backgroundColor: 'red'}} />;

const requestPermission = async () => {
  const [data] = await promiseWrapper(BarCodeScanner.requestPermissionsAsync());

  return data?.status === 'granted';
};

const requestPermissionHandler = async ({navigate}) => {
  const [hasPermission] = await promiseWrapper(requestPermission());

  if (!hasPermission) return;

  navigate('Scannerscreen');
};

export const TabStack = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        labeled
        activeColor="#fff"
        inactiveColor="#fff"
        barStyle={{
          backgroundColor: '#000',
          paddingBottom: 12,
          width: '100%',
          display: 'flex',
          alignContent: 'center',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: Platform.OS === 'ios' ? 100 : 70,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={() => ({
            headerShown: true,
            tabBarLabel: 'Home',
            tabBarIcon: ({color, focused}) => (
              <HomeIcon color={focused ? 'black' : 'white'} />
            ),
          })}
        />
        <Tab.Screen
          name="Swap"
          component={SwapStack}
          options={{
            tabBarLabel: 'Beneficios',
            headerShown: true,
            tabBarIcon: ({color, focused}) => (
              <SwapIcon color={focused ? 'black' : 'white'} />
            ),
          }}
        />
        <Tab.Screen
          name="Scanner"
          component={ScannerBase}
          options={{
            headerShown: true,
            tabBarLabel: 'Escanear',
            tabBarIcon: ({color, focused}) => (
              <ScannerIcon color={focused ? 'black' : 'white'} />
            ),
          }}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault();
              requestPermissionHandler(navigation);
            },
          })}
        />
        <Tab.Screen
          name="DrawerStack"
          component={DrawerStack}
          options={{
            tabBarLabel: 'Centros',
            tabBarIcon: ({color, focused}) => (
              <LocationIcon color={focused ? 'black' : 'white'} />
            ),
          }}
        />
        <Tab.Screen
          name="HamburgerStack"
          component={HamburgerStack}
          options={{
            tabBarLabel: 'Más',
            headerShown: true,
            tabBarIcon: ({color, focused}) => (
              <HamburguerIcon color={focused ? 'black' : 'white'} />
            ),
          }}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.toggleDrawer();
            },
          })}
        />
      </Tab.Navigator>
    </>
  );
};
