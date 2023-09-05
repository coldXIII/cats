import { useState } from 'react';
import { useCats } from '@/src/stores/catsStore';
import { useBreeds } from '@/src/stores/breedsStore';
import { IBreed } from '@/src/types';
import Image from 'next/image';

const SearchInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const breeds = useBreeds((state) => state.breeds);
  const selectBreed = useCats((state) => state.selectBreed);

  const handleSearchBreed = (value: string) => {
    if (value.trim()) {
      const breedToSearch = breeds.find(
        (breed: IBreed) =>
          breed.name.toLowerCase() === value.trim().toLowerCase()
      );
      if (selectBreed) {
        selectBreed(breedToSearch!.id);
      }
    } else {
      setError('Please, fill the field');
    }
  };

  return (
    <div className='mt-2 flex flex-col xl:mt-0'>
      <div className='relative w-full xl:w-[30rem]'>
        <input
          type='text'
          placeholder='Search for breeds by name'
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearchBreed(inputValue);
            }
          }}
          className='w-full rounded-lg border-2 border-transparent bg-white p-2 text-xs hover:border-2   hover:border-primaryLight focus:outline-primary dark:bg-white/5 sm:text-sm'
        />
        <button
          onClick={() => handleSearchBreed(inputValue)}
          className='absolute right-2 top-[50%] -translate-y-[50%]  rounded-lg bg-primaryLight p-2'
          disabled={!inputValue}
        >
          <Image src='/icons/search.png' width={15} height={15} alt='' />
        </button>
      </div>
      {error && <p className='p-1 text-xs text-primary'>{error}</p>}
    </div>
  );
};

export default SearchInput;
