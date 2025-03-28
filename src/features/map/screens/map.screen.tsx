import { useState, useEffect, useContext } from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE, type Region } from 'react-native-maps';
import styled from 'styled-components/native';

import { MapStackScreenProps } from '../../../types/navigation';

import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

import { Search } from '../components/search.component';
import { MapCallout } from '../components/map-callout.component';

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapScreen = ({ navigation }: MapStackScreenProps<'MapView'>) => {
  const { location } = useContext(LocationContext);
  const [mapRegion, setMapRegion] = useState<Region | null>(null);

  const { restaurants } = useContext(RestaurantsContext);

  // render map region when location changes.
  useEffect(() => {
    if (!location) {
      setMapRegion(null); // reset map region to null to indicate no location data.
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
      latitudeDelta: Math.abs(northeastLat - southwestLat) / 3, // reduce latitude/longitude delta for closer zoom.
      longitudeDelta: Math.abs(northeastLng - southwestLng) / 3, // reduce latitude/longitude delta for closer zoom.
    });
  }, [location]);

  return (
    <>
      <Search />
      {mapRegion && (
        <Map provider={PROVIDER_GOOGLE} region={mapRegion}>
          {restaurants.map((restaurant) => (
            <Marker
              key={restaurant.placeId}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.location.latitude,
                longitude: restaurant.location.longitude,
              }}>
              <Callout
                onPress={() => {
                  navigation.navigate('RestaurantDetails', {
                    restaurant,
                  });
                }}>
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          ))}
        </Map>
      )}
    </>
  );
};
