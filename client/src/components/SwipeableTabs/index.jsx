import * as React from 'react';
import {Text, useWindowDimensions} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {Container} from './styles';
import {ScrollView} from 'react-native';
const renderTabBar = props => (
  <TabBar
    {...props}
    scrollEnabled
    indicatorStyle={{backgroundColor: 'black', margin: 14}}
    style={{backgroundColor: 'white'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          color: '#6A6C6E',
          fontSize: 18,
          fontWeight: 800,
          marginBottom: 28,
        }}>
        {route.title}
      </Text>
    )}
  />
);

/*
Receives data[] of type: 

data = [
    {
      key: Number,
      Component: [ReactComponent],
      title: string,
      data: Array,
    }
  ]
*/

const SwipeableTabs = ({data, selectedTab}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0 | selectedTab);
  const initialState = data.map(({key, title}) => ({key, title}));
  const [routes] = React.useState(initialState);

  // returns object of type {"key": [ReactComponent(props)]}
  const sceneObj = data?.reduce((accum, curr) => {
    const {key, Component, title = '', data = [], currentPoints = 0} = curr;

    const comp = () => (
      <Component data={data} type={title} currentPoints={currentPoints} />
    );

    return {...accum, [key]: comp};
  }, {});

  const renderScene = SceneMap(sceneObj);

  return (
    <Container>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </Container>
  );
};

export default SwipeableTabs;
