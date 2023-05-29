import React, {useState} from 'react';
import {Container, SearchbarComp, MenuBtn, DrawerComp} from './styles';
import {StyleSheet, Image} from 'react-native';
import MapLibreGL from '@maplibre/maplibre-react-native';
import {STADIA_API_KEY} from '@env';
import {DEFAULT_CENTER_COORDINATE} from 'utils';
import exampleIcon from '/assets/GreenMapMarker.png';
import {useDispatch} from 'react-redux';
import {selectLocation} from '../../store/slices/locations';

const styleUrl = `https://tiles.stadiamaps.com/styles/osm_bright.json?api_key=${STADIA_API_KEY}`;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  mapPinLayer: {
    iconAllowOverlap: true,
    iconAnchor: 'bottom',
    iconSize: 1.0,
    iconImage: exampleIcon,
  },
});

const Map = ({markers, handleToggleDrawer}) => {
  const [userLocation, setUserLocation] = useState({
    timestamp: 0,
    latitude: 0.0,
    longitude: 0.0,
    altitude: 0.0,
    heading: 0.0,
    accuracy: 0.0,
    speed: 0.0,
  });
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedFeature, setSelectedFeature] = React.useState(null);
  const dispatch = useDispatch();

  const onChangeSearch = query => setSearchQuery(query);

  const onUserLocationUpdate = location => {
    setUserLocation({
      timestamp: location.timestamp,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      altitude: location.coords.altitude,
      heading: location.coords.heading,
      accuracy: location.coords.accuracy,
      speed: location.coords.speed,
    });
  };

  // if facing TypeError: property is not configurable:
  // https://github.com/react-navigation/react-navigation/issues/11289

  const locationAvailable = !!userLocation.longitude && !!userLocation.latitude;

  const mappedFeatures = markers?.map(marker => {
    const {id, name, address, city, coordinates, openingTimes} = marker;

    return {
      type: 'Feature',
      id,
      properties: {name, address, city, openingTimes},
      geometry: {type: 'Point', coordinates},
    };
  });

  const featureCollection = {
    type: 'FeatureCollection',
    features: mappedFeatures,
  };

  const onPinPress = e => {
    const feature = e?.features[0];

    const {
      id,
      geometry: {coordinates},
      properties: {name, address, city, openingTimes},
    } = feature;

    // dispatchear
    dispatch(
      selectLocation({
        id,
        coordinates,
        name,
        address,
        city,
        openingTimes,
      }),
    );

    setSelectedFeature(undefined);
    return;

    setSelectedFeature(feature);
  };

  return (
    <>
      <Container>
        <SearchbarComp
          placeholder="Buscar centros..."
          onChangeText={onChangeSearch}
          value={searchQuery}
          icon={{
            source: require('/assets/Icons/Search.png'),
            direction: 'rtl',
          }}
        />

        <MenuBtn onPress={handleToggleDrawer}>
          <Image
            source={require('/assets/Icons/HamburguerIcon.png')}
            style={{
              height: 15,
              width: 20,
            }}
          />
        </MenuBtn>
        <MapLibreGL.MapView
          style={styles.map}
          logoEnabled={false}
          styleURL={styleUrl}>
          <MapLibreGL.UserLocation
            visible={true}
            onUpdate={onUserLocationUpdate}
          />

          <MapLibreGL.Camera
            followUserMode="normal"
            followUserLocation={locationAvailable ? true : false}
            zoomLevel={12}
            // defaultSettings={defaultCamera}      try
            centerCoordinate={
              locationAvailable
                ? [userLocation.longitude, userLocation.latitude]
                : [-58.5733822, -34.6157437]
            }
          />

          {!!featureCollection.features.length && (
            <MapLibreGL.ShapeSource
              id="mapPinsSource"
              shape={featureCollection}
              onPress={onPinPress}>
              <MapLibreGL.SymbolLayer
                id="mapPinsLayer"
                style={styles.mapPinLayer}
              />
            </MapLibreGL.ShapeSource>
          )}
        </MapLibreGL.MapView>
      </Container>
    </>
  );
};

export default Map;
