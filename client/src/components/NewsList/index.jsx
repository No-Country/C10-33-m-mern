import React, {useState} from 'react';
import {
  Container,
  Wrapper,
  ItemContainer,
  InnerWrapper,
  ItemTitle,
  ItemPoints,
  Button,
} from './styles';
import {FlatList, Image} from 'react-native';
import {ImageBackground} from 'react-native';

const Item = ({item, onPress, type}) => {
  const handleOnPress = () => {
    console.log('clicked !');
  };

  return (
    <ItemContainer
      imageStyle={{borderRadius: 10}}
      source={item.photo}
      resizeMode="cover">
      <ItemTitle numberOfLines={3}>{item.title}</ItemTitle>

      <InnerWrapper>
        <Button
          title="Seguir leyendo..."
          color="#fff"
          onPress={handleOnPress}
        />
      </InnerWrapper>
    </ItemContainer>
  );
};

const NewsList = ({data, horizontal}) => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  return (
    <Container>
      <FlatList
        data={data}
        horizontal={horizontal}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </Container>
  );
};

export default NewsList;
