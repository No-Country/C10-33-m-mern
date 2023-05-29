import styled from 'styled-components/native';
import BaseButton from 'components/BaseButton';
import {Image} from 'react-native';

const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #fff;
`;

const ItemContainer = styled.TouchableOpacity`
  padding: 20px;
  margin: 8px;
  height: 176px;
  border: 1px solid #2e4a21;
  border-radius: 14px;
  background-color: ${({color}) => color};
`;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Padlock = styled(Image)`
  position: absolute;
  top: 15px;
  right: 10px;
  left: 22px;
  bottom: 10px;
`;

const InnerWrapper = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled(InnerWrapper)`
  position: relative;
  border: 2px solid #2e4a21;
  background-color: ${({color}) => color};
  border-radius: 35px;
  padding: 6px;
`;
const ItemTitle = styled.Text`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
`;

const ItemPoints = styled.Text`
  font-size: 18px;
`;

const Button = styled(BaseButton)`
  background-color: #dadd33;
  border-radius: 8px;
  margin-top: 11px;
  height: 48px;
  width: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  Container,
  ItemContainer,
  Wrapper,
  ItemTitle,
  ItemPoints,
  InnerWrapper,
  Button,
  ImageWrapper,
  Padlock,
};
