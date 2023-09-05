'use client';
import { useState, useEffect } from 'react';
import { ICat } from '@/src/types';
import { usePathname } from 'next/navigation';
import { useWidth } from '@/src/hooks';
import { useCats } from '@/src/stores/catsStore';
import MobileImageGrid from './MobileImageGrid';
import ImageGrid from './ImageGrid';

type GalleryProps = {
  data: ICat[];
};

const ImageGallery = ({ data }: GalleryProps) => {
  const width = useWidth();
  const pathname = usePathname();
  const [isLiked, setIsLiked] = useState(false);
  const getFavourites = useCats((state) => state.getFavourites);
  const blockHeight = (data.length / 2) * 15 + 'vw';

  useEffect(() => {
    getFavourites();
  }, [isLiked, getFavourites]);

  return (
    <div className='mb-8 min-h-[70vh]'>
      {width > 450 ? (
        <ImageGrid
          data={data}
          blockHeight={blockHeight}
          pathname={pathname}
          isLiked={isLiked}
          setIsLiked={setIsLiked}
        />
      ) : (
        <MobileImageGrid
          data={data}
          pathname={pathname}
          isLiked={isLiked}
          setIsLiked={setIsLiked}
        />
      )}
    </div>
  );
};

export default ImageGallery;
