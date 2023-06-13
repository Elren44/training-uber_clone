import React from 'react';
import LocationPermissionService from 'service/LocationPermissionService';
import {MapScreen} from 'screens/MapScreen';
import {ThemeProvider} from 'theme/ThemeProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <MapScreen />
        <LocationPermissionService />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
