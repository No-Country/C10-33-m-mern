import React, {useEffect, useRef, useState} from 'react';
import MapComponent from 'components/Map';
import {IS_ANDROID} from 'utils';
import {PermissionsAndroid, View, Text, Button} from 'react-native';
import BottomSheet from 'components/BottomSheet';
import {useSelector} from 'react-redux';
import LocationsInfoSheet from '../../components/LocationsInfoSheet';
import {validateObject} from '../../utils';

// node_modules FIXED  https://github.com/maplibre/maplibre-gl-native/issues/283

const Map = ({navigation}) => {
  const sheetRef = useRef(null);
  const [permission, setPermission] = useState({
    isFetchingAndroidPermission: IS_ANDROID,
    isAndroidPermissionGranted: false,
  });
  const {list: locations, selectedLocation} = useSelector(
    state => state.locations,
  );

  const selectedLocationExist =
    !!selectedLocation &&
    validateObject(selectedLocation) &&
    !!Object.keys(selectedLocation).length;

  console.log('\n\n\n\n ', selectedLocationExist);

  const handleSnap = i => {
    console.log('i en handlesnap', i);
    sheetRef.current?.snapToIndex(i);
  };

  const checkLocationPermission = async () => {
    try {
      const isGranted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      console.log('isGranted', isGranted);
      return setPermission({
        isAndroidPermissionGranted: isGranted,
        isFetchingAndroidPermission: false,
      });
    } catch (err) {
      console.warn(err);
    }
  };

  const requestLocationPermission = async () => {
    try {
      const permissionType = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      return setPermission({
        isAndroidPermissionGranted: permissionType === 'granted',
        isFetchingAndroidPermission: false,
      });
    } catch (err) {
      console.warn(err);
    }
  };

  const handleToggleDrawer = () => {
    navigation.toggleDrawer();
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (selectedLocation) {
      console.log('selectedLocation = ', selectedLocation);
      handleSnap(2);
    } else {
      handleSnap(-1);
    }
  }, [selectedLocation]);

  if (IS_ANDROID && !permission.isAndroidPermissionGranted) {
    if (permission.isFetchingAndroidPermission) {
      console.log('2');
      null;
    }
    console.log('1');
    return (
      <>
        <MapComponent
          markers={locations}
          handleToggleDrawer={handleToggleDrawer}
        />
        <BottomSheet requestLocationPermission={requestLocationPermission}>
          <LocationsInfoSheet selectedLocation={selectedLocation} />
        </BottomSheet>
      </>
    );
  }
  if (IS_ANDROID && permission.isAndroidPermissionGranted) {
    console.log('selectedLocationExist === ', selectedLocationExist);
    return (
      <>
        <MapComponent
          markers={locations}
          handleToggleDrawer={handleToggleDrawer}
        />

        <BottomSheet
          ref={sheetRef}
          requestLocationPermission={requestLocationPermission}>
          <View>
            <Text>tiene permiso!</Text>
          </View>
          <LocationsInfoSheet selectedLocation={selectedLocation} />
        </BottomSheet>
      </>
    );
  }
};

export default Map;
