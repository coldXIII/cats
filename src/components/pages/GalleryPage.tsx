'use client';
import { useCats } from '@/src/stores/catsStore';
import HeaderMenu from '../menus/HeaderMenu';
import GalleryMenu from '../menus/GalleryMenu';
import ImageGallery from '../gallery/ImageGallery';

const GalleryPage = () => {
  const cats = useCats((state) => state.cats);

  return (
    <div className='relative mx-auto flex w-[90%] flex-col items-center justify-center'>
      <HeaderMenu />
      <div className='flex flex-col  items-center justify-center rounded-lg bg-white p-2 dark:bg-white/5'>
        <GalleryMenu />
        <div className=''>
          <ImageGallery data={cats} />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
