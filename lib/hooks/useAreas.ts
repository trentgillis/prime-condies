import useSWR from 'swr';

import { getFetcher } from '@/lib/utils/fetchers';

export const useAreas = () => {
  return useSWR('/api/areas', getFetcher);
};
