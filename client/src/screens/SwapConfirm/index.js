import React, {useRef, useEffect} from 'react';
import {
  Container,
  InnerWrapper,
  Button,
  PointsText,
  Title,
  SubTitle,
  ProfileCircle,
} from './styles';
import {Image, Animated, Easing} from 'react-native';
import {Provider, Portal, Modal} from 'react-native-paper';
import {updateScore} from '../../store/slices/scores';
import {useDispatch, useSelector} from 'react-redux';

const SwapConfirm = ({route, navigation, ...props}) => {
  const scores = useSelector(state => state.scores);
  const {currentPoints, currentBottles, currentWeight} = scores;
  const {points, entityName, entityId, icon, type} = route.params;
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const dispatch = useDispatch();

  // animation
  const translation = useRef(new Animated.Value(800)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 0,
      duration: 1300,
      easing: Easing.easeInOut,
      useNativeDriver: true,
    }).start();
  }, [translation]);

  const hideModal = () => {
    // refactor to DRY:
    const scoresToUpdate = {
      currentPoints: currentPoints - points,
      currentBottles: currentBottles,
      currentWeight: currentWeight,
    };

    dispatch(updateScore(scoresToUpdate));
    setVisible(false);
    return navigation.navigate('SwapScreen');
  };

  const handleOnPress = () => showModal(true);

  return (
    <Provider>
      <Container>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={{
              width: 237,
              height: 237,
              position: 'relative',
              backgroundColor: '#f1f2b1',
              borderRadius: 8,
              alignSelf: 'center',
              opacity: translation.interpolate({
                inputRange: [0, 800],
                outputRange: [1, 0],
              }),
              transform: [
                {translateY: translation},
                {
                  rotate: translation.interpolate({
                    inputRange: [0, 800],
                    outputRange: ['0deg', '180deg'],
                  }),
                },
              ],
            }}>
            <ProfileCircle>
              <Image
                source={require('../../../assets/PersonProfileCircle.png')}
                style={{
                  height: 90,
                  width: 90,
                }}
              />
            </ProfileCircle>
            <Title>{type === 'Canjear' ? 'Canjeaste' : 'Donaste'}</Title>
            <PointsText>{points} puntos</PointsText>
            <SubTitle>¡Muchas gracias!</SubTitle>
          </Modal>
        </Portal>

        <Title>Estás a punto de {type}...</Title>
        <InnerWrapper>
          <Image source={icon} />
          <PointsText>{points} puntos</PointsText>
          <SubTitle>{entityName}</SubTitle>
          <Button title={type} onPress={handleOnPress} />
        </InnerWrapper>
      </Container>
    </Provider>
  );
};

export default SwapConfirm;
