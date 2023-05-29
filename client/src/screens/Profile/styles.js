import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #fff;
  padding: 16px;
  height: 100%;
  align-items: center;
`;

const UserInfoHeader = styled.View`
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

export {Container, UserInfoHeader, TabLists};
