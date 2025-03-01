// TypeScript type definitions for location-related objects.

// defines the structure of a location object.
export type Location = {
  // central point or the most representative point of the location.
  center: {
    lat: number;
    lng: number;
  };

  // viewport defines the boundaries of the map's visible region.
  viewport: {
    northeast: {
      lat: number;
      lng: number;
    };
    southwest: {
      lat: number;
      lng: number;
    };
  };
};
