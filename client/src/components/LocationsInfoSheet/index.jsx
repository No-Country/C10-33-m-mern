import React from 'react';
import {InnerContainer, Title, SubTitle} from './styles';
import {Image} from 'react-native';
import BaseButton from '../BaseButton';
import LocationItem from '../LocationItem';

const LocationsInfoSheet = ({selectedLocation, ...props}) => {
  const {id, name, address, city, coordinates, openingTimes} = selectedLocation;

  return (
    <InnerContainer>
      <LocationItem data={selectedLocation} {...props} />
    </InnerContainer>
  );
};

export default LocationsInfoSheet;
