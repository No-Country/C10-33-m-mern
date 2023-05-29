import React from 'react';
import {
  Container,
  PointsTitle,
  PointsNumber,
  HeaderSection,
  ProgressSection,
  PointsWrapper,
  WelcomeWrapper,
  WelcomeTitle,
  WelcomeText,
  InnerWrapper,
  RowWrapper,
  ProgressBarWrapper,
  ProgressBarText,
  Title,
} from './styles';
import {useAuth0} from 'react-native-auth0';
import {useDispatch, useSelector} from 'react-redux';
import {signOut} from '../../store/slices/user';
import Rule from '../../components/Icons/Rule';
import {Image, ScrollView} from 'react-native';
import {getCurrentLevel} from 'utils';
import * as Progress from 'react-native-progress';
import Bottle from '../../components/Icons/Bottle';
import NewsList from '../../components/NewsList';

const Home = () => {
  const state = useSelector(state => state);
  const {news: NewsData, scores, user: userState} = state;

  const {currentPoints} = scores;
  const {name} = userState;
  const {icon, level} = getCurrentLevel(currentPoints);

  const {authorize, clearSession, user, getCredentials, error} = useAuth0();
  const dispatch = useDispatch();

  const onLogout = async () => {
    dispatch(signOut());
    await clearSession({federated: true}, {localStorageOnly: false});
  };

  return (
    <Container>
      <ScrollView>
        <HeaderSection
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#D4FC79', '#96E6A1']}>
          <WelcomeWrapper>
            <WelcomeTitle>¡Hola, {name}!</WelcomeTitle>
            <WelcomeText>
              Mantén tus puntos en aumento visitando la estación de reciclaje
              con frecuencia.
            </WelcomeText>
          </WelcomeWrapper>

          <PointsWrapper>
            <Bottle />
            <PointsNumber>{currentPoints}</PointsNumber>
            <PointsTitle>Pts.</PointsTitle>
          </PointsWrapper>
        </HeaderSection>

        <Title>Tu progreso</Title>

        <ProgressSection>
          <InnerWrapper>
            <RowWrapper>
              <ProgressBarWrapper>
                <Progress.Bar
                  progress={0.3}
                  width={170}
                  height={70}
                  color="#B8D271"
                  borderColor="#2E4A21"
                  borderWidth={1}
                  borderRadius={10}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    transform: [
                      {
                        translateX: -55,
                      },
                      {
                        translateY: -50,
                      },
                      {rotate: '-90deg'},
                    ],
                  }}
                />
                <ProgressBarText>18gr</ProgressBarText>
              </ProgressBarWrapper>
            </RowWrapper>
            <Title>Plástico</Title>
          </InnerWrapper>

          <InnerWrapper>
            <RowWrapper>
              <Image
                source={icon}
                style={{
                  height: 110,
                  width: 110,
                }}
              />
              <Rule />
            </RowWrapper>
            <Title>Crecimiento</Title>
          </InnerWrapper>
        </ProgressSection>

        <NewsList data={NewsData} horizontal />
      </ScrollView>
    </Container>
  );
};

export default Home;
