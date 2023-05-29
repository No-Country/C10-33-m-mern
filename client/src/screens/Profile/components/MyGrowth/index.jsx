import React from 'react';
import {
  Container,
  Box,
  BoxLabel,
  InnerWrapper,
  PointsTitle,
  PointsNumber,
  ListTitle,
  Separator,
} from './styles';
import {getCurrentLevel} from 'utils';
import {Image} from 'react-native';
import {steps} from 'utils';
import LevelsList from '../LevelsList';
import {ScrollView} from 'react-native';
const MyGrowth = ({data}) => {
  const {
    scores: {currentPoints, currentBottles},
  } = data;

  const {icon, level} = getCurrentLevel(currentPoints);
  const sortedSteps = steps.sort((a, b) => a.level - b.level);

  const filteredSortedSteps = sortedSteps;
  console.log('currentPoints ==', currentPoints);
  console.log('level ==', level);

  return (
    <ScrollView>
      <Container>
        <Image
          source={icon}
          style={{
            height: 80,
            width: 80,
            marginTop: 15,
            marginBottom: 10,
          }}
        />
        <PointsNumber>{currentBottles}</PointsNumber>
        <PointsTitle>Botellas recicladas</PointsTitle>
        <Separator />
        <ListTitle>Tu jardín</ListTitle>
        <LevelsList
          data={sortedSteps}
          currentLevel={level}
          currentPoints={currentPoints}
        />
      </Container>
    </ScrollView>
  );
};

export default MyGrowth;
