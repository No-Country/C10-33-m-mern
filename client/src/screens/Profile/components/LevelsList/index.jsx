import React, {useState} from 'react';
import {
  Container,
  Wrapper,
  ItemContainer,
  InnerWrapper,
  ItemTitle,
  ItemPoints,
  Button,
  ImageWrapper,
  Padlock,
} from './styles';
import {FlatList, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Bloqueado from '/assets/levelsIcons/Bloqueado.png';

const Item = ({item, onPress, type, currentLevel, currentPoints, navigate}) => {
  const isBlocked = currentLevel < item.level;

  return (
    <ItemContainer
      onPress={onPress}
      color={isBlocked ? 'rgba(184, 210, 113, 0.5)' : '#B8D271'}>
      <Wrapper>
        <InnerWrapper>
          <ItemTitle>{item.label}</ItemTitle>
          <ImageWrapper
            color={isBlocked ? 'rgba(184, 210, 113, 0.5)' : '#2E4A21'}>
            <Image source={item.icon} />
            {isBlocked && <Padlock source={Bloqueado} />}
          </ImageWrapper>
          <ItemPoints>{item.pointsNeeded} puntos</ItemPoints>
        </InnerWrapper>
      </Wrapper>
    </ItemContainer>
  );
};

const LevelsList = ({data, type, currentLevel, currentPoints}) => {
  const [selectedId, setSelectedId] = useState();
  const {navigate} = useNavigation();

  const renderItem = ({item}) => {
    const backgroundColor = item.level === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.level === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        type={type}
        currentPoints={currentPoints}
        currentLevel={currentLevel}
        onPress={() => setSelectedId(item.level)}
        backgroundColor={backgroundColor}
        textColor={color}
        navigate={navigate}
      />
    );
  };

  return (
    <Container>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.level}
        extraData={selectedId}
      />
    </Container>
  );
};

export default LevelsList;
