'use client';
import { useState } from 'react';
import { IImage } from '@/src/types';
import Image from 'next/image';

const BreedImageSlider = ({ breedImages }: { breedImages: IImage[] }) => {
  const [activeImage, setActiveImage] = useState(breedImages[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className='relative h-[50vh] w-full rounded-xl'>
      <Image
        src={activeImage.url}
        alt='cat'
        width={500}
        height={300}
        className='aspect-video h-full w-full rounded-xl object-contain'
      />
      <div className='absolute  -bottom-4 left-[50%] z-50 flex w-[5rem] -translate-x-[50%] items-center justify-center gap-1 rounded-full bg-white p-2 '>
        {[...Array(5)].map((item, index) => (
          <div
            className={`h-[0.6rem] w-[0.6rem] cursor-pointer rounded-full  ${
              currentIndex === index ? 'bg-primary' : 'bg-primaryLight'
            }`}
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setActiveImage(breedImages[index]);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BreedImageSlider;
