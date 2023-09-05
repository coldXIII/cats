import { useState, useEffect } from 'react';
import { ICat } from '@/src/types';
import Image from 'next/image';

type VoteButtonsProps = {
  handleDislikeImage: (id: string) => void;
  handleFavourite: (id: string) => void;
  handleLikeImage: (id: string) => void;
  currentSlide: ICat;
};

const VoteButtons = ({
  handleDislikeImage,
  handleFavourite,
  handleLikeImage,
  currentSlide,
}: VoteButtonsProps) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (currentSlide === undefined) {
      setIsDisabled(true);
    }
  }, [currentSlide]);

  return (
    <div className='absolute -bottom-8 left-[50%] z-10 flex -translate-x-[50%] items-center justify-center gap-1 rounded-xl bg-white p-1'>
      <button
        onClick={() => handleLikeImage(currentSlide.id)}
        disabled={isDisabled}
        className='flex items-center justify-center rounded-bl-xl rounded-tl-xl  bg-green p-6 '
      >
        <Image
          src={`/icons/like-white.png`}
          width={25}
          height={25}
          alt='like'
          className='min-w-[1.5rem]'
        />
      </button>
      <button
        onClick={() => handleFavourite(currentSlide.id)}
        disabled={isDisabled}
        className='flex items-center justify-center bg-primary p-6'
      >
        <Image
          src={`/icons/fav-white.png`}
          width={25}
          height={25}
          alt='like'
          className='min-w-[1.5rem]'
        />
      </button>
      <button
        onClick={() => handleDislikeImage(currentSlide.id)}
        disabled={isDisabled}
        className='flex items-center justify-center rounded-br-xl rounded-tr-xl bg-yellow p-6'
      >
        <Image
          src={`/icons/dislike-white.png`}
          width={25}
          height={25}
          alt='like'
          className='min-w-[1.5rem]'
        />
      </button>
    </div>
  );
};

export default VoteButtons;
