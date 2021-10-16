import type { NextPage, NextPageContext, GetServerSideProps } from 'next';

import { dehydrate, QueryClient } from 'react-query';

import { AreaHeader } from '@/components';
import { getAreaById, useArea } from '@/lib/ui/hooks/useArea';
import { getIsClientSideRouted } from '@/lib/ui/utils/queryUtils';

type AreaProps = {
  areaId: string;
};

const Area: NextPage<AreaProps> = ({ areaId }) => {
  const { data, isSuccess, isLoading, isError } = useArea(areaId);

  return (
    <>
      {/* TODO: Error page */}
      {isError && <div>Error occurred displaying page</div>}
      {/* TODO: Loading spinner */}
      {isLoading && <div>Loading...</div>}
      {isSuccess && (
        <AreaHeader areaName={data?.name || ''} areaLocation={data?.place || ''} areaCountry={data?.country || ''} />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  let areaId = params?.id;
  // If areaId is not a string, url is incorrectly formatted. Return not found
  if (typeof areaId !== 'string') return { notFound: true };

  // Only fetch new data from API if routing to this page was a result of client side routing
  const isCSR = getIsClientSideRouted(req);
  if (isCSR) return { props: { areaId } };

  // Prefetch data when server side rendered
  const queryClient = new QueryClient();
  const queryKey = ['area', areaId];
  await queryClient.prefetchQuery(queryKey, () => getAreaById(areaId as string), { staleTime: 1000 * 60 * 15 });
  // If no data was obtained by the prefetch, return not found
  if (!queryClient.getQueryData(queryKey)) return { notFound: true };

  return {
    props: {
      areaId,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Area;
