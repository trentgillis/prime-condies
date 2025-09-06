import { AreaResponse } from '@/lib/types/AreaResponse';
import React from 'react';

interface AreaListItemWeatherDetailProps {
  area: AreaResponse;
}

function AreaListItemWeatherDetail({ area }: AreaListItemWeatherDetailProps) {
  return <div>{area.name}</div>;
}

export default AreaListItemWeatherDetail;
