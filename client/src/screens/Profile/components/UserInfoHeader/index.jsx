import React from 'react';
import {Container, Title, InnerWrapper} from './styles';
import {Image} from 'react-native';
import Edit from 'components/Icons/Edit';

const UserInfoHeader = ({name}) => {
  return (
    <Container>
      <Image source={require('/assets/UserPhoto.png')} />
      <InnerWrapper>
        <Title>{name}</Title>
        <Edit />
      </InnerWrapper>
    </Container>
  );
};

export default UserInfoHeader;
