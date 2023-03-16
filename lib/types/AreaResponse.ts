export type AreaResponse = {
  _id: { $oid: string };
  __v: number;
  areaId: string;
  name: string;
  place: string;
  country: string;
  location: {
    coordinates: [number, number];
  };
};
