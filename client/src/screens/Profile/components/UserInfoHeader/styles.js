import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  background-color: #fff;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const InnerWrapper = styled.View`
  flex-direction: row;
  padding: 8px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 18px;
  padding-right: 8px;
`;
export {Container, InnerWrapper, Title};
