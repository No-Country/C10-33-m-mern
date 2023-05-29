import React from 'react';
import {
  Container,
  Title,
  InnerWrapper,
  LocationWrapper,
  TextComp,
  BoldText,
  OpeningsTimeWrapper,
  OpenText,
  Circle,
} from './styles';
import {Image} from 'react-native';

const LocationItem = ({data}) => {
  const {id, name, address, city, openingTimes} = data;

  return (
    <Container>
      <Title>{name}</Title>
      <InnerWrapper>
        <Image
          source={require('/assets/GreenMapMarker.png')}
          style={{width: 35, height: 50, marginRight: 15}}
        />
        <LocationWrapper>
          <TextComp>{address}</TextComp>
          <BoldText>
            Ubicado en: <TextComp>{city}</TextComp>
          </BoldText>
        </LocationWrapper>
      </InnerWrapper>
      <OpeningsTimeWrapper>
        <Circle />
        <OpenText>Abierto</OpenText>
        <TextComp>{openingTimes}</TextComp>
      </OpeningsTimeWrapper>
    </Container>
  );
};

export default LocationItem;
