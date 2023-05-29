import {Searchbar} from 'react-native-paper';
import styled from 'styled-components/native';
import BaseButton from '../BaseButton';
import Drawer from '../../stacks/DrawerStack';

const Container = styled.View`
  flex: 1;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const SearchbarComp = styled(Searchbar)`
  position: absolute;
  top: 25px;
  left: 15px;
  padding: 0px 8px;
  z-index: 2;
  background-color: #e7f0e9;
  width: 280px;
  height: 56px;
  border-radius: 28px;
`;

const MenuBtn = styled(BaseButton)`
  position: absolute;
  z-index: 2;
  right: 27px;
  top: 40px;
`;

const DrawerComp = styled(Drawer)``;

export {Container, SearchbarComp, MenuBtn, DrawerComp};
