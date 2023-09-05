'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ICat } from '@/src/types';
import { useCats } from '@/src/stores/catsStore';
import Loader from '../ui/Loader';
import FavouriteAfter from '../ui/FavouriteAfter';
import BreedAfter from '../ui/BreedAfter';

type ImageGridProps = {
  data: ICat[];
  blockHeight: string;
  pathname: string;
  isLiked: boolean;
  setIsLiked: (isLiked: boolean) => void;
};

const ImageGrid = ({
  data,
  blockHeight,
  pathname,
  isLiked,
  setIsLiked,
}: ImageGridProps) => {
  const isLoading = useCats((state) => state.isLoading);

  return (
    <>
      {isLoading ? (
        <div className='flex h-full min-h-[70vh] w-full flex-col items-center justify-center'>
          <Loader />
        </div>
      ) : (
        <>
          {data[0]?.breeds && data[0]?.breeds?.length ? (
            <p className='p-2 text-gray'>
              Search results for{' '}
              <span className='font-bold text-black dark:text-white'>
                {data[0].breeds[0].name}
              </span>
            </p>
          ) : null}
          <div
            className='gridContainer mt-2 min-h-[70vh] w-full gap-2 p-2'
            style={{ maxHeight: blockHeight }}
          >
            {data.map((cat, index) => (
              <div
                key={cat.id}
                className={`gridItem relative  w-full  max-w-[80vw] gridItem--${
                  index + 1
                }`}
              >
                <Link href={`breed/${cat.id}`}>
                  <Image
                    src={cat.url}
                    alt='cat'
                    width={150}
                    height={150}
                    className='h-full w-full cursor-pointer rounded-xl object-cover'
                  />
                </Link>

                {pathname === '/breeds' && cat.breeds?.length ? (
                  <BreedAfter cat={cat} />
                ) : null}
                {pathname === '/gallery' || pathname === '/favourites' ? (
                  <FavouriteAfter
                    cat={cat}
                    isLiked={isLiked}
                    setIsLiked={setIsLiked}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ImageGrid;
