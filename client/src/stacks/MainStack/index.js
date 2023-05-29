import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Scanner from '../../screens/Scanner';
import HamburgerDrawerStack from '../HamburgerDrawerStack';

const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HamburgerDrawerStack"
        component={HamburgerDrawerStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Scannerscreen"
        component={Scanner}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
