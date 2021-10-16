type AreaResponse = {
  areaId: string;
  name: string;
  place: string;
  country: string;
  location: { type: string; coordinates: number[] };
};

export default AreaResponse;
