import * as React from 'react';
import {
  SlideTitle,
  Container,
  InlineContainer,
  SlidesContainer,
  SlideView,
  SlideText,
} from './styles';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Auth0 from 'react-native-auth0';
import jwtDecode from 'jwt-decode';
import config from '../../../auth0-configuration';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../../store/slices/user';
import AppIntroSlider from 'react-native-app-intro-slider';
import BaseButton from '../../components/BaseButton';
import {useAuth0} from 'react-native-auth0';

const slides = [
  {
    key: '1',
    title: 'Dirígete a tu  centro de reciclaje más cercano',
    text: 'Usa tu buscador de centros cercanos',
    image: require('../../../assets/Onboarding1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: 'Ingresa el envase  que queres reciclar',
    text: 'Puede ser de plástico o vidrio',
    image: require('../../../assets/Onboarding2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: 'Escanea el código QR y suma puntos',
    text: '',
    image: require('../../../assets/Onboarding3.png'),
    backgroundColor: '#22bcb5',
  },
];

const Welcome = () => {
  const idTokenExists = useSelector(state => state.user.idToken);
  const {navigate} = useNavigation();
  const {authorize, getCredentials} = useAuth0();
  const [slidersViewed, setSlidersViewed] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (idTokenExists) navigate('Home');
  }, [idTokenExists]);

  _renderItem = ({item}) => {
    return (
      <SlideView>
        <Image source={item.image} />
        <SlideTitle>{item.title}</SlideTitle>
        <SlideText>{item.text}</SlideText>
      </SlideView>
    );
  };

  const onLogin = async () => {
    try {
      await authorize({scope: 'openid profile email'});
      const {idToken} = await getCredentials();
      const user_details = jwtDecode(idToken);
      const {nickname} = user_details;
      dispatch(signIn({idToken, name: nickname}));
    } catch (e) {
      console.log(e);
    }
  };

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setSlidersViewed(true);
  };

  return (
    <Container>
      <InlineContainer>
        <BaseButton title="SALTAR" onPress={() => onLogin()} />
      </InlineContainer>
      <SlidesContainer>
        <AppIntroSlider renderItem={this._renderItem} data={slides} />
      </SlidesContainer>
    </Container>
  );
};

export default Welcome;
