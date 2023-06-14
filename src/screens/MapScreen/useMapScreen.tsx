import type {UserLocationChangeEvent} from 'react-native-maps';
import type MapView from 'react-native-maps';
import {useEffect, useRef, useState} from 'react';

const LATITUDE_DELTA = 0.0022;
const LONGITUDE_DELTA = 0.005;

export const useMapScreen = () => {
  const mapRef = useRef<MapView>(null);
  const [userLocation, setUserLocation] =
    useState<UserLocationChangeEvent['nativeEvent']['coordinate']>();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (userLocation) {
      mapRef.current?.animateToRegion({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    }
  }, [userLocation]);

  const handleUserLocationChange = ({
    nativeEvent: {coordinate},
  }: UserLocationChangeEvent) => {
    setUserLocation(coordinate);
  };

  const closeDestinationModal = () => {
    setModalVisible(false);
  };

  const handleMapSearchBarPress = () => {
    setModalVisible(true);
  };

  return {
    models: {
      mapRef,
      modalVisible,
    },
    operations: {
      handleUserLocationChange,
      handleMapSearchBarPress,
      closeDestinationModal,
    },
  };
};
