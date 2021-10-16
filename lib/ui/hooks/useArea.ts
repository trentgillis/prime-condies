import { useQuery } from 'react-query';
import axios from 'axios';

import AreaResponse from '@/lib/api/types/AreaResponse';

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT;

/**
 * Gets data for a specific area
 * @param id Area's unique area id; i.e. boulder-canyon
 * @returns
 */
export const getAreaById = async (areaId: string) => {
  const { data } = await axios.get<AreaResponse>(`${apiRoot}/areas/${areaId}`);
  return data;
};

/**
 * Returns a custom use-query hook that retrieves data about a specific area
 * @param areaId Area's unique id; i.e. boulder-canyon
 * @returns
 */
export const useArea = (areaId: string) => {
  return useQuery(['area', areaId], () => getAreaById(areaId), {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10, // Set data as stale after 10 minutes
  });
};
