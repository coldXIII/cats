'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useCats } from '@/src/stores/catsStore';
import { useLogger } from '@/src/stores/loggerStore';
import { useStore } from '@/src/hooks';
import { sortByTime, logger } from '@/src/helpers';
import HeaderMenu from '../menus/HeaderMenu';
import BackButton from '../ui/BackButton';
import PageTitle from '../ui/PageTitle';
import LogItem from '../ui/LogItem';
import VoteButtons from '../ui/VoteButtons';

const VotingPage = () => {
  const cats = useCats((state) => state.cats);
  const voteImage = useCats((state) => state.voteImage);
  const [currentSlide] = useState(cats[0]);
  const setLog = useLogger((state) => state.setLog);
  const addToFavourites = useCats((state) => state.addToFavourites);
  const requestLog = useStore(useLogger, (state) => state.requestLog);
  const updateLog = useStore(useLogger, (state) => state.updateLog);
  const sortedLog = sortByTime(requestLog!);

  useEffect(() => {
    updateLog;
  }, []);

  const handleLikeImage = (id: string) => {
    const logData = logger(id, 'like');
    voteImage(id, 1);
    setLog(logData);
  };

  const handleDislikeImage = (id: string) => {
    const logData = logger(id, 'dislike');
    voteImage(id, -1);
    setLog(logData);
  };

  const handleFavourite = (id: string) => {
    const rawBody = JSON.stringify({
      image_id: id,
    });
    const logData = logger(id, 'fav_add');
    addToFavourites(rawBody);
    setLog(logData);
  };

  return (
    <div className='mx-auto flex w-[90%] flex-col items-center justify-center'>
      <HeaderMenu />
      <div className='flex w-full flex-col items-center justify-center rounded-lg bg-white p-2 dark:bg-white/5'>
        <div className='mx-auto flex w-full flex-wrap justify-start gap-2 p-2'>
          <BackButton />
          <PageTitle />
        </div>
        <div className='z-5  relative w-full'>
          <Image
            src={currentSlide?.url || '/loading.png'}
            alt='cat'
            width={500}
            height={300}
            className='aspect-video h-full w-full min-w-[40vw] rounded-xl object-cover'
          />
          <VoteButtons
            handleDislikeImage={handleDislikeImage}
            handleLikeImage={handleLikeImage}
            handleFavourite={handleFavourite}
            currentSlide={currentSlide}
          />
        </div>
        {sortedLog ? (
          <div className='logs mt-[4rem] w-full'>
            {sortedLog.map((request) => (
              <LogItem key={request.id} request={request} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default VotingPage;
