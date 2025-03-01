import { useState, useEffect, useContext } from 'react';
import MapView, { type Region } from 'react-native-maps';
import styled from 'styled-components/native';

import { LocationContext } from '../../../services/location/location.context';

import { Search } from '../components/search.component';

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const [mapRegion, setMapRegion] = useState<Region | null>(null);

  useEffect(() => {
    if (!location) {
      return;
    }

    const {
      center: { lat, lng },
      viewport,
    } = location;

    const northeastLat = viewport.northeast.lat;
    const northeastLng = viewport.northeast.lng;
    const southwestLat = viewport.southwest.lat;
    const southwestLng = viewport.southwest.lng;

    setMapRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: Math.abs(northeastLat - southwestLat),
      longitudeDelta: Math.abs(northeastLng - southwestLng),
    });
  }, [location]);

  return (
    <>
      <Search />
      {mapRegion && <Map region={mapRegion}></Map>}
    </>
  );
};
