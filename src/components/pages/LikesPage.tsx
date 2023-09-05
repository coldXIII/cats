'use client';
import { ICat } from '@/src/types';
import { useEffect } from 'react';
import { useCats } from '@/src/stores/catsStore';
import HeaderMenu from '../menus/HeaderMenu';
import ImageGallery from '../gallery/ImageGallery';
import BackButton from '../ui/BackButton';
import PageTitle from '../ui/PageTitle';

const LikesPage = () => {
  const getVotes = useCats((state) => state.getVotes);
  const votes = useCats((state) =>
    state.votes.filter((vote) => vote.value === 1)
  );

  useEffect(() => {
    getVotes();
  }, [getVotes]);

  const votesToCatFormat = votes.map((item) => {
    const container: ICat = {
      id: '',
      url: '',
    };
    container.id = item.image.id;
    container.url = item.image.url;
    return container;
  });

  return (
    <div className='mx-auto flex w-[90%] flex-col items-center justify-center'>
      <HeaderMenu />
      <div className='min-h-[50vh] w-full rounded-lg bg-white  p-2 dark:bg-white/5'>
        <div className='mx-auto flex w-full flex-wrap justify-start gap-2 p-2'>
          <BackButton />
          <PageTitle />
        </div>
        {votesToCatFormat.length ? (
          <div className='min-h-[50vh] w-full'>
            <ImageGallery data={votesToCatFormat} />
          </div>
        ) : (
          <div className='mt-[1rem]  min-w-[90%] rounded-xl bg-lightgray p-2 dark:bg-white/5'>
            <p className='text-gray'>No item found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LikesPage;
