import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: flex-end;
  padding: 30px 15px;
`;

const InlineContainer = styled.View`
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 28px;
`;

const SlidesContainer = styled.View`
  display: flex;
  flex: 1;
  padding-bottom: 35px;
  width: 90%;
  background-color: white;
  align-self: center;
`;

const SlideView = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const SlideText = styled.Text`
  color: #000;
  font-size: 17px;
`;

const SlideTitle = styled.Text`
  color: #000;
  font-size: 22px;
  font-weight: medium;
  margin-bottom: 20px;
  text-align: center;
  margin: 20px 0 17px 0;
`;

export {
  Container,
  InlineContainer,
  SlideTitle,
  SlidesContainer,
  SlideView,
  SlideText,
};
