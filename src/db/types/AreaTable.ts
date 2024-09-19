export const AREA_TABLE = 'areas';

export type AreaLocation = {
  lng: number;
  lat: number;
};

export type AreaShema = {
  id?: number;
  areaSlug: string;
  name: string;
  place: string;
  countryCode: string;
  location: AreaLocation;
};

export type AreaSelect = {
  id?: number;
  areaSlug: string;
  name: string;
  place: string;
  countryCode: string;
  lat: number;
  lng: number;
};

export type Areas = AreaSelect[];
