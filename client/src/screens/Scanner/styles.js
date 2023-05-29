import styled from 'styled-components/native';
import {getScale} from '../../utils';
import {Modal, Text, Portal} from 'react-native-paper';

const {horizontalScale, verticalScale} = getScale();

const Wrapper = styled.View`
  display: flex;
  flex: 1;
  position: relative;
`;

const ScannerWrapper = styled.View`
  flex: 1;
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

const Title = styled(Text)`
  text-align: center;
  color: #191c1a;
  font-size: 22px;
  text-transform: uppercase;
`;

const SubTitle = styled(Text)`
  text-align: center;
  color: #191c1a;
  font-size: 16px;
`;

const PointsText = styled(Text)`
  text-align: center;
  color: #2e4a21;
  font-size: 32px;
  font-weight: bold;
`;

const Overlay = styled.View`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const TopPadding = styled.View`
  flex: 1.5;
  background-color: black;
`;

const MiddleWrapper = styled.View`
  flex: 2.5;
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
`;

const MiddlePadding = styled.View`
  background-color: black;
  height: ${verticalScale(328)}px;
  width: ${horizontalScale(17)}px;
`;

const BottomPadding = styled.View`
  flex: 1.5;
  background-color: black;
`;

const ViewFinder = styled.View`
  background-color: red;
  height: ${verticalScale(327)}px;
  width: ${horizontalScale(328)}px;
  opacity: 0.4;
`;
export {
  Wrapper,
  ScannerWrapper,
  Overlay,
  TopPadding,
  MiddleWrapper,
  MiddlePadding,
  BottomPadding,
  ViewFinder,
  ProfileCircle,
  Title,
  SubTitle,
  PointsText,
  InnerProfileCircle,
};
