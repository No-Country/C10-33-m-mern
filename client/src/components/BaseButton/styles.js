import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextComp = styled.Text`
  color: ${({color}) => color || '#2e4a21'};

  font-size: 17px;
  font-weight: bold;
`;

export {Container, TextComp};
