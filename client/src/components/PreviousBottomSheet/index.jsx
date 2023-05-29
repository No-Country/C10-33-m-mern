import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {
  Container,
  InnerContainer,
  Title,
  SubTitle,
  Button,
  OutlinedButton,
} from './styles';
import BaseButton from '../BaseButton';

const BottomSheetComp = ({requestLocationPermission, children, ...props}) => {
  // ref
  const sheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['65%'], []);
  // callbacks

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const handleManagePermission = useCallback(() => {
    sheetRef.current?.close();
    requestLocationPermission();
  }, []);

  // render
  return (
    <Container>
      {children}
      <BottomSheet ref={sheetRef} snapPoints={snapPoints}>
        <BottomSheetView>
          <InnerContainer>
            <Image
              source={require('/assets/GreenMapMarker.png')}
              style={{width: 35, height: 50}}
            />
            <Title>Para una mejor experiencia</Title>
            <SubTitle>
              Si nos das acceso a tu ubicación actual, podemos recomendarte los
              Centros más cercanos.
            </SubTitle>
            <Button
              title="Sí, dar acceso"
              onPress={() => handleManagePermission()}
            />
            <OutlinedButton
              title="No, ver lista completa"
              onPress={() => handleShowLocations()}
            />

            <BaseButton
              title="Quizás, mas tarde"
              onPress={() => handleClosePress()}
            />
          </InnerContainer>
        </BottomSheetView>
      </BottomSheet>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BottomSheetComp;
