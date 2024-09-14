export const AREA_TABLE = 'areas';

export type AreaLocation = {
  x: number;
  y: number;
};

export type Area = {
  id: number;
  name: string;
  place: string;
  countryCode: string;
  location: AreaLocation;
};

export type Areas = Area[];
