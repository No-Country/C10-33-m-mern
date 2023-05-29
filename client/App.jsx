import 'react-native-gesture-handler';
import React from 'react';
import Main from './src/screens/Main';
import {Auth0Provider} from 'react-native-auth0';
import {Provider} from 'react-redux';
import store from './src/store';
import config from './auth0-configuration';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MapLibreGL from '@maplibre/maplibre-react-native';

MapLibreGL.setAccessToken(null);

function App() {
  return (
    <Auth0Provider domain={config.domain} clientId={config.clientId}>
      <Provider store={store}>
        <GestureHandlerRootView style={{flex: 1}}>
          <Main />
        </GestureHandlerRootView>
      </Provider>
    </Auth0Provider>
  );
}

export default App;
