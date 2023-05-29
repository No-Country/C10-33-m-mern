import * as React from 'react';
import Profile from '../Icons/Profile';
import {StyleSheet, Image} from 'react-native';
import FAQs from '../Icons/FAQs';
import News from '../Icons/News';
import Contact from '../Icons/Contact';
import {Container, StyledButton, Label, HeaderContainer} from './styles';

const HamburgerMenu = ({navigation}) => {
  return (
    <>
      <HeaderContainer>
        <Image source={require('/assets/Icons/GreenCycleCircleLogo.png')} />
      </HeaderContainer>

      <Container>
        <StyledButton
          onPress={() => {
            navigation.navigate('HamburgerStack', {screen: 'Profile'});
          }}>
          <Profile style={styles.icon} />
          <Label>Perfil</Label>
        </StyledButton>

        <StyledButton
          onPress={() => {
            navigation.navigate('HamburgerStack', {
              screen: 'More',
              params: {swipeId: 1},
            });
          }}>
          <FAQs style={styles.icon} />
          <Label>FAQs</Label>
        </StyledButton>

        <StyledButton
          onPress={() => {
            navigation.navigate('HamburgerStack', {
              screen: 'More',
              params: {swipeId: 0},
            });
          }}>
          <News style={styles.icon} />
          <Label>Novedades</Label>
        </StyledButton>

        <StyledButton
          onPress={() => {
            navigation.navigate('HamburgerStack', {
              screen: 'More',
              params: {swipeId: 2},
            });
          }}>
          <Contact style={styles.icon} />
          <Label>Contáctanos</Label>
        </StyledButton>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
  },
});

export default HamburgerMenu;
