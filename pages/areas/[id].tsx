import { NextPage } from 'next';

import { AreaHeader } from '@/components';

const Area: NextPage = () => {
  return (
    <>
      <AreaHeader areaName="Boulder Canyon" areaLocation="Colorado" areaCountry="USA" />
    </>
  );
};

export default Area;
