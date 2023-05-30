import styled from 'styled-components';
import BaseButton from '../BaseButton';
import {getScale} from '../../utils';

const {horizontalScale, verticalScale} = getScale();

const HeaderContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 45px;
  background: #abe286;
`;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding-top: ${verticalScale(80)}px;
  padding-bottom: ${verticalScale(80)}px;
`;

const StyledButton = styled(BaseButton)`
  display: flex;
  width: 100%;
  padding-top: ${verticalScale(18)}px;
  padding-bottom: ${verticalScale(10)}px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text`
  font-size: 18px;
  padding-top: ${verticalScale(18)}px;
`;

export {HeaderContainer, Container, Label, StyledButton};
