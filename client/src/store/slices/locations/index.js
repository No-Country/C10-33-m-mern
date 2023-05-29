import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      id: '1',
      name: 'Paseo Bradley',
      address: 'Bradley, Ciudad Jardin',
      city: 'Palomar',
      coordinates: [-58.6018128, -34.58891],
      openingTimes: '11:00 - 14:30',
    },
    {
      id: '2',
      name: 'Carrefour Palomar',
      address: 'De Los cebos 233, Ciudad Jardin',
      city: 'Palomar',
      coordinates: [-58.5947235, -34.6033927],
      openingTimes: '11:00 - 14:30',
    },
    {
      id: '3',
      name: 'Plaza Billinghurst',
      address: 'San Lorenzo, Billinghurst',
      city: 'Billinghurst',
      coordinates: [-58.6014771, -34.5884344],
      openingTimes: '11:00 - 14:30',
    },
    {
      id: '4',
      name: 'Plaza San Leonardo Murialdo',
      address: 'Gaucho Cruz & Martín Fierro',
      city: 'Villa Bosch',
      coordinates: [-58.5858544, -34.5942577],
      openingTimes: '11:00 - 14:30',
    },
  ],
  selectedLocation: {},
};

export const locationSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    resetLocations: () => initialState,
    selectLocation: (state, {payload}) => ({
      ...state,
      selectedLocation: payload,
    }),
  },
});

export const {resetLocations, selectLocation} = locationSlice.actions;

export default locationSlice.reducer;
