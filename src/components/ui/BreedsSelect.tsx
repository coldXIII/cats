'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useBreeds } from '@/src/stores/breedsStore';
import { useCats } from '@/src/stores/catsStore';

const BreedsSelect = () => {
  const pathname = usePathname();
  const breeds = useBreeds((state) => state.breeds);
  const getBreeds = useBreeds((state) => state.getBreeds);
  const selectBreed = useCats((state) => state.selectBreed);

  const handleBreed = (value: string) => {
    selectBreed(value);
  };

  useEffect(() => {
    getBreeds();
  }, [getBreeds]);

  return (
    <div className='flex flex-col'>
      {pathname === '/gallery' && (
        <label
          htmlFor='breeds'
          className='ml-2 text-[0.6rem] uppercase text-gray'
        >
          breed
        </label>
      )}
      <select
        name='breeds'
        id='breeds'
        onChange={(e) => handleBreed(e.target.value)}
        className={`w-[14rem] rounded-lg border-2 border-transparent px-2 py-1 text-gray hover:border-2  hover:border-primaryLight focus:outline-primary ${
          pathname === '/breeds'
            ? 'bg-lightgray dark:bg-white/5'
            : 'bg-white dark:bg-white/5'
        }`}
      >
        <option value=''>
          {pathname === '/breeds' ? 'All Breads' : 'None'}
        </option>
        {breeds?.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BreedsSelect;
