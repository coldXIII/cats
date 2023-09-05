'use client';
import Image from 'next/image';
import { ICat, LogData } from '@/src/types';
import { useCats } from '@/src/stores/catsStore';
import { nanoid } from 'nanoid';
import { useLogger } from '@/src/stores/loggerStore';

type FavAfterProps = {
  cat: ICat;
  isLiked: boolean;
  setIsLiked: (isLiked: boolean) => void;
};

const FavAfter = ({ cat, setIsLiked }: FavAfterProps) => {
  const favourites = useCats((state) => state.favourites);
  const setLog = useLogger((state) => state.setLog);
  const addToFavourites = useCats((state) => state.addToFavourites);
  const deleteFromFavourites = useCats((state) => state.deleteFromFavourites);

  const isItemLiked = (id: string) => {
    return favourites.some((item) => item.image_id === id);
  };

  const handleFavourite = (id: string) => {
    const rawBody = JSON.stringify({
      image_id: id,
    });
    const logData: LogData = {
      id: nanoid(),
      image_id: id,
      type: 'fav_add',
      time: new Date(),
    };
    addToFavourites(rawBody);
    setLog(logData);
    console.log(id);
  };

  const handleDeleteFavourite = (id: string) => {
    const itemToDelete = favourites.find((item) => item.image_id === id);
    const logData: LogData = {
      id: nanoid(),
      image_id: id,
      type: 'fav_remove',
      time: new Date(),
    };
    deleteFromFavourites(itemToDelete?.id as string);
    setLog(logData);
  };
  return (
    <div
      onMouseOver={() => isItemLiked(cat.id)}
      className='absolute left-0 top-0 flex h-full w-full cursor-pointer items-center  justify-center bg-primary/50 p-2 opacity-0 hover:opacity-100'
    >
      {isItemLiked(cat.id) ? (
        <button
          onClick={() => {
            handleDeleteFavourite(cat.id), setIsLiked(false);
          }}
          className='flex items-center  justify-center rounded-xl bg-white p-2 text-primary'
        >
          <Image
            src={`/icons/fav-liked.png`}
            width={25}
            height={25}
            alt='like'
          />
        </button>
      ) : (
        <button
          onClick={() => {
            handleFavourite(cat.id), setIsLiked(true);
          }}
          className='flex items-center  justify-center rounded-xl bg-white p-2 text-primary'
        >
          <Image src={`/icons/fav.png`} width={25} height={25} alt='like' />
        </button>
      )}
    </div>
  );
};

export default FavAfter;
