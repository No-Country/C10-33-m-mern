import React from 'react';
import {
  Container,
  Box,
  BoxLabel,
  InnerWrapper,
  PointsTitle,
  PointsNumber,
} from './styles';
import SwapIconOutlined from 'components/Icons/SwapIconOutlined';
import DonateHandOutlined from 'components/Icons/DonateHandOutlined';

const UserPoints = ({data}) => {
  const {
    scores: {currentPoints},
  } = data;

  return (
    <Container>
      <InnerWrapper>
        <PointsTitle>Tu puntaje</PointsTitle>
        <PointsNumber>{currentPoints}</PointsNumber>
      </InnerWrapper>

      <InnerWrapper>
        <Box>
          <SwapIconOutlined />
          <BoxLabel>Canjea</BoxLabel>
        </Box>

        <Box>
          <DonateHandOutlined />
          <BoxLabel>Dona</BoxLabel>
        </Box>
      </InnerWrapper>
    </Container>
  );
};

export default UserPoints;
