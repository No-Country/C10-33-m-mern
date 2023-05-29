import styled from 'styled-components/native';
import BaseButton from '../../components/BaseButton';
import {TextInput} from 'react-native';

const Container = styled.View`
  display: flex;
  background-color: #fff;
  height: 100%;

  align-items: center;
`;

const Title = styled.Text`
  color: #000;
  color: #94af9f;
  font-size: 32px;
`;

const TextInputComp = styled.Text`
  background-color: #e7f0e9;
  font-size: 32px;
  width: 100%;
  height: 200px;
  border-radius: 8px;
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

export {Container, Title, Button, TextInputComp};
