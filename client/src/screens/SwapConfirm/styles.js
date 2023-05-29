import styled from 'styled-components/native';
import BaseButton from '../../components/BaseButton';

const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #fff;
  padding: 16px;
  height: 100%;
  align-items: flex-start;
`;

const InnerWrapper = styled.View`
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex: 1;
  width: 100%;
`;

const Button = styled(BaseButton)`
  background-color: #dadd33;
  border-radius: 8px;
  margin-top: 48px;
  height: 48px;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PointsText = styled.Text`
  text-align: center;
  color: #2e4a21;
  font-size: 32px;
  font-weight: bold;
`;

const Title = styled.Text`
  text-align: center;
  color: #191c1a;
  font-size: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const SubTitle = styled.Text`
  text-align: center;
  color: #191c1a;
  font-size: 16px;
`;

const ProfileCircle = styled.View`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -50px;
  left: 70px;
  background-color: #f1f2b1;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const InnerProfileCircle = styled(ProfileCircle)`
  border: 1px solid green;
`;

export {
  Container,
  InnerWrapper,
  Button,
  PointsText,
  Title,
  SubTitle,
  ProfileCircle,
  InnerProfileCircle,
};
