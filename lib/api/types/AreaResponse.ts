type AreaResponse = {
  areaId: string;
  place: string;
  country: string;
  location: { type: string; coordinates: number[] };
};

export default AreaResponse;
