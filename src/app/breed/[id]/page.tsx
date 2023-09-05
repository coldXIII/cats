import React from 'react';
import BreedInfoPage from '@/src/components/pages/BreedInfoPage';

const Breeds = ({ params: { id } }: { params: { id: string } }) => {
  return <BreedInfoPage id={id} />;
};

export default Breeds;
