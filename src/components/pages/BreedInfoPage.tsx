'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useCats } from '@/src/stores/catsStore';
import { useBreeds } from '@/src/stores/breedsStore';
import HeaderMenu from '../menus/HeaderMenu';
import BreedInfoMenu from '../menus/BreedInfoMenu';
import BreedImageSlider from '../sliders/BreedImageSlider';

const BreedInfoPage = ({ id }: { id: string }) => {
  const breedImages = useBreeds((state) => state.breedImages);
  const getBreedImages = useBreeds((state) => state.getBreedImages);
  const getCat = useCats((state) => state.getCat);
  const cat = useCats((state) => state.cat);

  useEffect(() => {
    getCat(id);
  }, [id, getCat]);

  useEffect(() => {
    if (cat?.breeds && cat?.breeds.length) {
      getBreedImages(cat?.breeds[0].id);
    }
  }, [id, cat?.breeds, getBreedImages]);

  return (
    <div className='mx-auto flex w-[90%] flex-col items-center justify-center'>
      <HeaderMenu />
      <div className='flex flex-col items-center justify-center rounded-lg bg-white p-2 dark:bg-white/5'>
        <BreedInfoMenu
          breedName={cat?.breeds ? cat?.breeds[0].name : 'Just Cute Cat'}
          breedId={cat?.breeds ? cat?.breeds[0].id : '42'}
        />
        <div className='h-full w-full'>
          {breedImages.length ? (
            <BreedImageSlider breedImages={breedImages} />
          ) : (
            <div className='relative h-[50vh] w-full rounded-xl'>
              <Image
                src={cat?.url || '/loading.png'}
                alt='cat'
                width={500}
                height={300}
                className='aspect-video h-full w-full rounded-xl object-contain'
              />
            </div>
          )}
          {cat?.breeds ? (
            <div className='relative mt-[3rem] rounded-xl border border-primary'>
              <h1 className='absolute -top-7 left-[50%] -translate-x-[50%] bg-lightgray px-6 py-1 text-3xl dark:bg-[#282828]'>
                {cat?.breeds[0].name}
              </h1>
              <p className='mx-auto mt-[1.5rem] w-[50%] text-center text-gray'>
                {cat?.breeds[0].description}
              </p>
              <div className='flex'>
                <div className=' flex w-1/2 flex-col items-center justify-center'>
                  <div className='flex w-full flex-col items-start justify-center px-8 py-4'>
                    <h3>Temperament:</h3>
                    <p className='text-gray'>{cat?.breeds[0].temperament}</p>
                  </div>
                </div>
                <div className='flex w-1/2 flex-col items-center justify-center px-8 py-4'>
                  <div className='flex w-full items-center gap-2 '>
                    <h3 className='text-sm'>Origin:</h3>
                    <p className=' text-gray'>{cat?.breeds[0].origin}</p>
                  </div>
                  <div className='flex w-full items-center gap-2'>
                    <h3>Weigth:</h3>
                    <p className='text-gray'>{cat?.breeds[0].weight.metric}</p>
                  </div>
                  <div className='flex w-full items-center gap-2'>
                    <h3>Life Span:</h3>
                    <p className='text-gray'>{cat?.breeds[0].life_span}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BreedInfoPage;
