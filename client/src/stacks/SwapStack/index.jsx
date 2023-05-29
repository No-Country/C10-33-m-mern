import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Swap from '../../screens/Swap';
import SwapConfirm from '../../screens/SwapConfirm';
import {Image, TouchableOpacity, View, Text} from 'react-native';

const CustomHeader = ({navigation}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      backgroundColor: '#ABE286',
      width: '100%',
      flex: 1,
      height: Platform.OS === 'ios' ? 100 : 70,
    }}>
    <Image source={require('../../../assets/Icons/tabbaricon.png')} />

    <View style={{width: 24}} />
  </View>
);

const SwapStack = () => {
  const SwapStackNav = createNativeStackNavigator();

  return (
    <SwapStackNav.Navigator>
      <SwapStackNav.Screen
        name="SwapScreen"
        component={Swap}
        options={{
          tabBarLabel: 'home',
          headerShown: true,
          tabBarIcon: ({color}) => <SwapIcon />,
          headerTitle: ({navigation}) => (
            <CustomHeader navigation={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#ABE286',
          },
          headerLeft: ({navigation}) => (
            <View
              style={{
                width: 100,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 16,
                backgroundColor: '#ABE286',
                height: Platform.OS === 'ios' ? 100 : 70,
              }}>
              <Image source={require('../../../assets/Icons/back.png')} />
            </View>
          ),
        }}
      />
      <SwapStackNav.Screen
        name="Canjear"
        component={SwapConfirm}
        options={{
          tabBarLabel: 'home',
          headerShown: true,
          tabBarIcon: ({color}) => <SwapIcon />,
          headerStyle: {
            backgroundColor: '#ABE286',
          },
          headerLeft: () => (
            <View
              style={{
                width: 100,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 16,
                backgroundColor: '#ABE286',
                height: Platform.OS === 'ios' ? 100 : 70,
              }}>
              <Image source={require('../../../assets/Icons/back.png')} />
            </View>
          ),
        }}
      />
    </SwapStackNav.Navigator>
  );
};

export default SwapStack;
