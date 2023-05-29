import {createSlice} from '@reduxjs/toolkit';

const initialState = {currentPoints: 40, currentBottles: 4, currentWeight: 32};

export const scoresSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetScores: () => initialState,
    updateScore: (prevState, {payload}) => {
      return payload;
    },
  },
});

export const {resetScores, updateScore} = scoresSlice.actions;

export default scoresSlice.reducer;
