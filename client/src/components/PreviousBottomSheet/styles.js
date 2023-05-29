import styled from 'styled-components/native';
import BaseButton from '../BaseButton';

const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #fff;
`;

const InnerContainer = styled.View`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  padding-top: 21px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 18px;
  margin-bottom: 21px;
`;

const SubTitle = styled.Text`
  font-size: 18px;
  letter-spacing: 0.4px;
`;

const Button = styled(BaseButton)`
  background-color: #b8d271;
  border-radius: 8px;
  margin-top: 16px;
  height: 48px;
  width: 128px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const OutlinedButton = styled(Button)`
  background-color: #fff;
  border: 1px solid #b8d271;
`;

export {Container, InnerContainer, Title, SubTitle, Button, OutlinedButton};
