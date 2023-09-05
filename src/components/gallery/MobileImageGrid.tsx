import Image from 'next/image';
import { ICat } from '@/src/types';
import { useCats } from '@/src/stores/catsStore';
import Loader from '../ui/Loader';
import BreedAfter from '../ui/BreedAfter';
import FavouriteAfter from '../ui/FavouriteAfter';

type Props = {
  data: ICat[];
  pathname: string;
  isLiked: boolean;
  setIsLiked: (isLiked: boolean) => void;
};

const MobileImageGrid = ({ data, pathname, isLiked, setIsLiked }: Props) => {
  const isLoading = useCats((state) => state.isLoading);
  return (
    <>
      {isLoading ? (
        <div className='flex h-full min-h-[70vh] w-full flex-col items-center justify-center'>
          <Loader />
        </div>
      ) : (
        <>
          {' '}
          <div className='mobileGridContainer mt-2 w-full min-w-[90vw] gap-2 p-2'>
            {data.map((cat) => (
              <div
                key={cat.id}
                className={`mobileGridItem relative mb-2 max-h-[15rem] w-full`}
              >
                <Image
                  src={cat.url}
                  alt='cat'
                  width={150}
                  height={150}
                  className='h-full  w-full cursor-pointer rounded-xl object-cover'
                />
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

export default MobileImageGrid;
