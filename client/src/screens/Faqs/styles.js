import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  background-color: #fff;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 17px;
`;

const Title = styled.Text`
  color: #000;
  color: #94af9f;
  font-size: 32px;
`;

const TabLists = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
  background-color: #fff;
  font-size: 32px;
`;

export {Container, Title, TabLists};
