import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title:
      'Por primera vez en Argentina, se utilizarán durmientes ferroviarios fabricados con plástico.',
    url: 'http://www.lanacion.com.ar',
    photo: require('/assets/news1.png'),
  },
  {
    id: '2',
    title:
      'Día del reciclaje: un problema global: El rol de la industria de bebidas en la búsqueda de soluciones',
    url: 'http://www.lanacion.com.ar',
    photo: require('/assets/news2.png'),
  },
  {
    id: '3',
    title:
      'Cómo separar bien la basura: los 8 errores frecuentes que complican el reciclaje y cómo evitarlos',
    url: 'http://www.lanacion.com.ar',
    photo: require('/assets/news3.png'),
  },
  {
    id: '4',
    title:
      'Como ser ecológico en un momento dificil... se utilizarán botellas de material biodegradable fomentando la fabricados con plástico.',
    url: 'http://www.lanacion.com.ar',
    photo: require('/assets/news1.png'),
  },
  {
    id: '5',
    title:
      'Día del reciclaje: un problema global: El rol de la industria de bebidas en la búsqueda de soluciones',
    url: 'http://www.lanacion.com.ar',
    photo: require('/assets/news2.png'),
  },
];

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    resetNews: () => initialState,
  },
});

export const {resetNews} = newsSlice.actions;

export default newsSlice.reducer;
