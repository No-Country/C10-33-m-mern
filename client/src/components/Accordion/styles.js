import styled from 'styled-components';
import {List} from 'react-native-paper';

const Container = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
`;
const Group = styled(List.AccordionGroup)`
  display: flex;
  flex: 1;
  width: 100%;
`;

const AccordionItem = styled(List.Accordion)`
  border: 2px solid blue;
  width: 100%;
  height: 80px;
  background-color: #fbfff7;
  font-size: 18px;
  border: 1px solid #6ac52d;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export {Container, Group, AccordionItem};
