export const AREA_TABLE = 'areas';

export type AreaLocation = {
  lng: number;
  lat: number;
};

export type Area = {
  id?: number;
  areaSlug: string;
  name: string;
  place: string;
  countryCode: string;
  location: AreaLocation;
};

export type Areas = Area[];
