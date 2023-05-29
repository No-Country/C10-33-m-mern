import styled from 'styled-components/native';
import BaseButton from '../BaseButton';

const InnerContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
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

export {InnerContainer, Title, SubTitle, Button};
