import BackButton from '../ui/BackButton';
import BreedsSelect from '../ui/BreedsSelect';
import LimitSelect from '../ui/LimitSelect';
import PageTitle from '../ui/PageTitle';
import SortButton from '../ui/SortButton';
import { useBreeds } from '@/src/stores/breedsStore';

const BreedsMenu = () => {
  const handleSortAz = useBreeds((state) => state.handleSortAz);
  const handleSortZa = useBreeds((state) => state.handleSortZa);
  const isZaActive = useBreeds((state) => state.isZaActive);
  const isAzActive = useBreeds((state) => state.isAzActive);

  return (
    <div className='mx-auto flex w-full flex-wrap justify-between gap-2 p-2'>
      <BackButton />
      <PageTitle />
      <BreedsSelect />
      <LimitSelect />
      <div className='flex gap-1'>
        <SortButton
          type='sort-az'
          status={isAzActive}
          handleClick={handleSortAz}
        />
        <SortButton
          type='sort-za'
          status={isZaActive}
          handleClick={handleSortZa}
        />
      </div>
    </div>
  );
};

export default BreedsMenu;
