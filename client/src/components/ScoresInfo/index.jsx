import React from 'react';
import {
  Container,
  UserInfo,
  PointsTitle,
  PointsNumber,
  TabLists,
  GrowthIndicator,
  GrowthTitle,
} from './styles';
import {Image} from 'react-native';

const ScoresInfo = ({currentPoints, currentLevel, icon}) => {
  return (
    <Container>
      <UserInfo>
        <PointsTitle>Tu puntaje</PointsTitle>
        <PointsNumber>{currentPoints}</PointsNumber>
      </UserInfo>

      <GrowthIndicator>
        <GrowthTitle>Tu crecimiento</GrowthTitle>
        <Image
          source={icon}
          style={{
            height: 65,
            width: 65,
            marginRight: 40,
          }}
        />
      </GrowthIndicator>
    </Container>
  );
};

export default ScoresInfo;
