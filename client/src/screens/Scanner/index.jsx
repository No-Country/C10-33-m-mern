import React, {useState} from 'react';
import {BarCodeScanner} from 'expo-barcode-scanner/build/BarCodeScanner';
import {
  Wrapper,
  ScannerWrapper,
  Overlay,
  TopPadding,
  MiddleWrapper,
  MiddlePadding,
  BottomPadding,
  ViewFinder,
  Title,
  SubTitle,
  ProfileCircle,
  PointsText,
} from './styles';
import {Image} from 'react-native';
import {validateQr} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {updateScore} from '../../store/slices/scores';
import {Provider, Portal, Modal} from 'react-native-paper';

const Scanner = ({navigation: {navigate}}) => {
  const scores = useSelector(state => state.scores);
  const {currentPoints, currentBottles, currentWeight} = scores;
  const dispatch = useDispatch();
  const [scanned, setScanned] = useState(false);
  const [obtainedScores, setObtainedScores] = useState(0);
  const [viewFinder, setViewFinder] = useState({
    w: 0,
    h: 0,
    offsetX: 0,
    offsetY: 0,
  });
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => {
    setVisible(false);
    return navigate('Home');
  };

  const handleOnBarCodeScanned = scannedValue => {
    if (!scannedValue) return null;
    setScanned(true);

    const {data} = scannedValue;
    const qrIsValid = validateQr(data);
    const {points = '', quantity = 0, weight = 0} = JSON.parse(data);

    const scoresToUpdate = {
      currentPoints: currentPoints + points,
      currentBottles: currentBottles + quantity,
      currentWeight: currentWeight + weight,
    };
    if (!qrIsValid) return console.log('invalid QR');

    setObtainedScores(points);
    dispatch(updateScore(scoresToUpdate));
    // implement api POST request
    showModal();
  };

  const handleCloseCamera = () => {
    hideModal();
    navigate('Home');
  };

  // animationType in case of switching back to modal
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{
            width: 237,
            height: 237,
            position: 'relative',
            backgroundColor: '#f1f2b1',
            borderRadius: 8,
            alignSelf: 'center',
          }}>
          <ProfileCircle>
            <Image
              source={require('../../../assets/PersonProfileCircle.png')}
              style={{
                height: 90,
                width: 90,
              }}
            />
          </ProfileCircle>
          <Title>Sumaste</Title>
          <PointsText>{!scanned ? '-' : obtainedScores} pts</PointsText>
          <SubTitle>¡Mira tu crecimiento!</SubTitle>
        </Modal>
      </Portal>

      {!visible && (
        <Wrapper animationType="slide" onRequestClose={handleCloseCamera}>
          <ScannerWrapper>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleOnBarCodeScanned}
              style={{flex: 1}}
            />
          </ScannerWrapper>

          <Overlay>
            <TopPadding />
            <MiddleWrapper>
              <MiddlePadding />

              <ViewFinder
                onLayout={event =>
                  event.target.measure((x, y, w, h, offsetX, offsetY) =>
                    setViewFinder({w, h, offsetX, offsetY}),
                  )
                }
                testID="viewFinder"
              />

              <MiddlePadding />
            </MiddleWrapper>
            <BottomPadding />
          </Overlay>
        </Wrapper>
      )}
    </Provider>
  );
};

export default Scanner;
