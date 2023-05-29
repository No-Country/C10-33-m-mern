import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {getScale} from 'utils';
import BaseButton from 'components/BaseButton';

const {horizontalScale, verticalScale} = getScale();

const Container = styled.View`
  display: flex;
  flex: 1;

  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: '#B8B8B8',
})`
  width: 100%;
  height: 49px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: #e3e4d3;
  border-radius: 8px;

  margin-bottom: 16px;
`;

const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 72px;
  color: #000;
  background-color: #6ac52d;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
const Fields = styled.View`
  display: flex;
  flex: 1;
  background-color: #fff;
  width: 100%;
  margin-top: ${verticalScale(18)}px;
  align-items: flex-start;
`;
const PointsTitle = styled.Text`
  margin-left: 16px;
  color: #fff;
  font-size: 22px;
`;

const Button = styled(BaseButton)`
  background-color: #dadd33;
  border-radius: 8px;
  margin-top: 11px;
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled(Button)`
  background-color: #fff;
`;

export {
  Container,
  StyledInput,
  Fields,
  UserInfo,
  PointsTitle,
  Button,
  CloseButton,
};
