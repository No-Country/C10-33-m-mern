import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import LocationItem from '../LocationItem';
import {Container, Title} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native';
import BaseButton from '../BaseButton';
import {selectLocation} from '../../store/slices/locations';

const CustomDrawerContent = ({navigation, ...props}) => {
  const locations = useSelector(state => state.locations.list);
  const dispatch = useDispatch();

  const handleToggleDrawer = () => {
    navigation.toggleDrawer();
  };

  const handlePress = ({
    id,
    coordinates,
    name,
    address,
    city,
    openingTimes,
  }) => {
    dispatch(
      selectLocation({
        id,
        coordinates,
        name,
        address,
        city,
        openingTimes,
      }),
    );

    handleToggleDrawer();
  };

  const renderItem = ({item}) => {
    return (
      <BaseButton title="SALTAR" onPress={() => handlePress(item)}>
        <LocationItem data={item} {...props} />
      </BaseButton>
    );
  };

  return (
    <Container>
      <Title>Centros de GreenCycle</Title>

      <FlatList
        data={locations}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default CustomDrawerContent;
