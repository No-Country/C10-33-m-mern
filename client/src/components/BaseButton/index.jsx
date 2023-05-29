import React from 'react';
import {View, Pressable, Animated, Image, StyleSheet} from 'react-native';
import {TextComp, Container} from './styles';

const BaseButton = ({children, title, onPress, ...props}) => {
  const animated = new Animated.Value(1);

  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.4,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      {...props}>
      <Animated.View
        style={[
          {
            opacity: animated,
          },
        ]}>
        {children ? children : <TextComp color={props.color}>{title}</TextComp>}
      </Animated.View>
    </Pressable>
  );
};

export default BaseButton;
