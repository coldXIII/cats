'use client';
import { useCats } from '@/src/stores/catsStore';

const TypeSelect = () => {
  const setTypes = useCats((state) => state.setTypes);

  const handleBreed = (value: string) => {
    setTypes(value);
  };

  return (
    <div className='flex flex-col'>
      <span className='ml-2 text-[0.6rem] uppercase text-gray'>type</span>
      <select
        name='type'
        id='type'
        onChange={(e) => handleBreed(e.target.value)}
        className={`w-[14rem] rounded-lg border-2 border-transparent  bg-white px-2 py-1 text-gray  hover:border-2 hover:border-primaryLight focus:outline-primary dark:bg-white/5`}
      >
        <option value=''>All</option>
        <option value='jpg,png'>Static</option>
        <option value='gif'>Animated</option>
      </select>
    </div>
  );
};

export default TypeSelect;
