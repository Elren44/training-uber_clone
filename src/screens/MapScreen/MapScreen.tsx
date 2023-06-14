import React from 'react';
import {Container, StyledMapView} from 'screens/MapScreen/MapScreen.styles';
import {useMapScreen} from './useMapScreen';
import {RoundButton} from 'components/RoundButton';
import {MapSearchBar} from 'components/MapSearchBar';
import {DestinationModal} from 'components/DestinationsModal';

export const MapScreen = () => {
  const {models, operations} = useMapScreen();

  return (
    <Container>
      <StyledMapView
        ref={models.mapRef}
        showsUserLocation
        onUserLocationChange={operations.handleUserLocationChange}
        showsMyLocationButton={false}
        showsCompass={false}
      />
      <RoundButton icon="ios-menu-outline" />
      <MapSearchBar onPress={operations.handleMapSearchBarPress} />
      <DestinationModal
        visible={models.modalVisible}
        closeModal={operations.closeDestinationModal}
      />
    </Container>
  );
};
