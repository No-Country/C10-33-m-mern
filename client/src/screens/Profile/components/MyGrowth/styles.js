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
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;

  background-color: #fff;
`;

const ImageWrapper = styled(InnerWrapper)`
  background-color: grey;
`;

const Box = styled.View`
  width: 144px;
  height: 96px;
  justify-content: center;
  align-items: center;
  background: #f1f2b1;
  border-radius: 8px;
`;

const Separator = styled.View`
  width: 80%;
  height: 2px;
  background-color: #b8d271;
`;

const PointsTitle = styled.Text`
  color: #2e4a21;
  font-size: 22px;
  margin-bottom: 14px;
`;

const BoxLabel = styled.Text`
  color: #2e4a21;
  font-size: 16px;
  text-transform: uppercase;
`;
const PointsNumber = styled.Text`
  color: #2e4a21;
  font-size: 40px;
  font-weight: bold;
`;

const ListTitle = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
`;
export {
  Container,
  Box,
  BoxLabel,
  InnerWrapper,
  PointsTitle,
  PointsNumber,
  ListTitle,
  Separator,
  ImageWrapper,
};
