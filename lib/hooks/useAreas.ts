import useSWR from 'swr';

import { getFetcher } from '@/lib/utils/fetchers';
import { AreaResponse } from '@/lib/types/AreaResponse';

export const useAreas = () => {
  return useSWR<AreaResponse[]>('/api/areas', getFetcher);
};
