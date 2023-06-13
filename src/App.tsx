import React from 'react';
import MapScreen from 'screens/MapScreen/MapScreen';
import LocationPermissionService from 'service/LocationPermissionService';

const App = () => {
  return (
    <>
      <MapScreen />
      <LocationPermissionService />
    </>
  );
};

export default App;
