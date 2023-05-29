import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
  forwardRef,
} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {Container} from './styles';

const BottomSheetComp = forwardRef(function BottomSheetComp(props, ref) {
  // ref
  // const sheetRef = useRef(null);

  const {requestLocationPermission, children, ...otherProps} = props;

  // variables
  const snapPoints = useMemo(() => ['30%', '40%'], []);
  // callbacks

  const handleClosePress = useCallback(() => {
    ref.current?.close();
  }, []);

  const handleSnap = useCallback(i => {
    // console.log('snapToIndex en handlesnap ', i);
    //ref.current?.snapToIndex(i);
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSssheetChanges', index);
  }, []);

  const handleManagePermission = useCallback(() => {
    //  ref.current?.close();
    requestLocationPermission();
  }, []);

  return (
    <BottomSheet
      enablePanDownToClose
      handleClosePress={handleClosePress}
      onChange={handleSheetChanges}
      {...otherProps}
      ref={ref}
      snapPoints={snapPoints}>
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheet>
  );
});

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
