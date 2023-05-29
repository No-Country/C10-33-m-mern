import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  background-color: #fff;
  width: 100%;
  height: 194px;
  padding-top: 11px;
  padding-left: 33px;
  padding-right: 43px;
`;

const InnerWrapper = styled.View`
  flex-direction: row;
  flex: 1;
  padding-top: 13px;
  padding-bottom: 20px;
`;
const LocationWrapper = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;

  gap: 10px;
`;

const OpeningsTimeWrapper = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  flex-direction: row;
  height: 35px;
  width: 100%;
  background: #f1f2b1;
  border-radius: 10px;
  margin-bottom: 13px;
`;

const Title = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
`;

const TextComp = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 17px;
`;

const BoldText = styled(TextComp)`
  font-weight: bold;
`;

const Circle = styled.View`
  width: 22px;
  height: 22px;
  background: #6ac52d;
  border-radius: 11px;
`;

const OpenText = styled(BoldText)``;
export {
  Container,
  Title,
  InnerWrapper,
  LocationWrapper,
  OpeningsTimeWrapper,
  TextComp,
  BoldText,
  OpenText,
  Circle,
};
