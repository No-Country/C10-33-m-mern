import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  background-color: #fff;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid #7dc35d;
  border-radius: 8px;
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

const GrowthIndicator = styled.View`
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const PointsTitle = styled.Text`
  margin-left: 16px;
  color: #fff;
  font-size: 22px;
`;

const GrowthTitle = styled.Text`
  color: #259e73;
  margin-left: 16px;
  font-size: 22px;
`;

const PointsNumber = styled.Text`
  display: flex;
  color: #fff;
  font-size: 32px;
  width: 158px;
  text-align: center;
  font-weight: bold;
`;

export {
  Container,
  UserInfo,
  PointsTitle,
  PointsNumber,
  GrowthIndicator,
  GrowthTitle,
};
