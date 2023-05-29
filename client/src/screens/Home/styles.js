import styled from 'styled-components/native';
import {getScale} from 'utils';
import LinearGradient from 'react-native-linear-gradient';

const {horizontalScale, verticalScale} = getScale();

const Container = styled.View`
  display: flex;
  background-color: #fff;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const HeaderSection = styled(LinearGradient)`
  flex-direction: row;
  padding-top: ${verticalScale(31)}px;
  padding-bottom: ${verticalScale(27)}px;
  padding-left: ${verticalScale(31)}px;
  padding-right: ${verticalScale(31)}px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background: #d4fc79;
  margin-bottom: ${verticalScale(30)}px;
`;

const ProgressSection = styled.View`
  flex-direction: row;
  height: ${verticalScale(220)}px;
  width: 100%;
  margin-bottom: ${verticalScale(27)}px;
`;

const WelcomeWrapper = styled.View`
  flex: 1;
  gap: 10px;
`;

const InnerWrapper = styled.View`
  flex: 1;

  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const RowWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  align-items: flex-end;
  height: 100%;
`;

const ProgressBarWrapper = styled.View`
  position: relative;
  width: 70px;
  height: 170px;
`;

const ProgressBarText = styled.Text`
  position: absolute;
  bottom: 10px;
  left: 12px;
  font-weight: 600;
  font-size: 20px;
`;
const PointsWrapper = styled.View`
  width: ${horizontalScale(120)}px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const PointsNumber = styled.Text`
  position: absolute;
  left: 33.18%;
  top: 25%;
  color: #2e4a21;
  font-weight: 800;
  font-size: 33px;
  line-height: 61px;
  color: #2e4a21;
`;

const PointsTitle = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.15px;
  color: #2e4a21;
  position: absolute;
  left: 36%;
  bottom: 20%;
`;
const Title = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.15px;
  color: #2e4a21;
`;

const WelcomeTitle = styled.Text`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #191c1a;
`;
const WelcomeText = styled.Text`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #000;
`;

// const DotsBtn = styled.TouchableOpacity`
//   width: 40px;
//   height: 40px;
//   background: transparent;
//   color: black;
//   transform: rotate(90deg);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-right: 5px;
// `;
export {
  Container,
  PointsTitle,
  PointsNumber,
  HeaderSection,
  ProgressSection,
  PointsWrapper,
  WelcomeWrapper,
  WelcomeTitle,
  WelcomeText,
  InnerWrapper,
  RowWrapper,
  ProgressBarWrapper,
  ProgressBarText,
  Title,
};
