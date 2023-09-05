'use client';
import { useCats } from '@/src/stores/catsStore';
import HeaderMenu from '../menus/HeaderMenu';
import BreedsMenu from '../menus/BreedsMenu';
import ImageGallery from '../gallery/ImageGallery';

const BreedsPage = () => {
  const cats = useCats((state) => state.cats);

  return (
    <div className='mx-auto flex w-[90%] flex-col items-center justify-center'>
      <HeaderMenu />
      <div className='flex flex-col items-center justify-center rounded-lg bg-white p-2 dark:bg-white/5'>
        <BreedsMenu />
        <div className='w-full'>
          <ImageGallery data={cats} />
        </div>
      </div>
    </div>
  );
};

export default BreedsPage;
