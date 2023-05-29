import styled from 'styled-components/native';
import BaseButton from '../BaseButton';
import {getScale} from '../../utils';
import {ImageBackground} from 'react-native';

const {horizontalScale, verticalScale} = getScale();

const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #fff;
`;

const ItemContainer = styled(ImageBackground)`
  padding: 20px;
  margin: 8px;
  height: ${verticalScale(160)}px;
  width: ${horizontalScale(300)}px;

  border-radius: 14px;
`;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const InnerWrapper = styled.View`
  align-items: flex-end;
`;

const ItemTitle = styled.Text`
  font-size: 24px;

  font-weight: bold;
  color: #fff;
`;

const ItemPoints = styled.Text`
  font-size: 18px;
`;

const Button = styled(BaseButton)`
  margin-top: 11px;
  height: 48px;
`;

export {
  Container,
  ItemContainer,
  Wrapper,
  ItemTitle,
  ItemPoints,
  InnerWrapper,
  Button,
};
