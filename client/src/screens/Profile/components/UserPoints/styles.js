import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #fff;
  width: 100%;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
`;

const InnerWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  gap: 15px;
`;
const Box = styled.View`
  width: 144px;
  height: 96px;
  justify-content: center;
  align-items: center;
  background: #f1f2b1;
  border-radius: 8px;
`;
const PointsTitle = styled.Text`
  color: #2e4a21;
  font-size: 22px;
`;

const BoxLabel = styled.Text`
  color: #2e4a21;
  font-size: 16px;
  text-transform: uppercase;
`;
const PointsNumber = styled.Text`
  color: #2e4a21;
  font-size: 48px;
  font-weight: bold;
`;

export {Container, Box, BoxLabel, InnerWrapper, PointsTitle, PointsNumber};
