'use client';
import { useCats } from '@/src/stores/catsStore';
import HeaderMenu from '../menus/HeaderMenu';
import ImageGallery from '../gallery/ImageGallery';
import BackButton from '../ui/BackButton';
import PageTitle from '../ui/PageTitle';
import { ICat } from '@/src/types';
import { sortByTime } from '@/src/helpers';
import { useLogger } from '@/src/stores/loggerStore';
import { useStore } from 'zustand';
import LogItem from '../ui/LogItem';

const FavouritesPage = () => {
  const favourites = useCats((state) => state.favourites);
  const requestLog = useStore(useLogger, (state) =>
    state.requestLog.filter(
      (log) => log.type === 'fav_add' || log.type === 'fav_remove'
    )
  );
  const sortedLog = sortByTime(requestLog!);

  const favouritesToCatFormat = favourites.map((item) => {
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
      <div className='min-h-[50vh] w-full rounded-lg bg-white p-2 dark:bg-white/5'>
        <div className='mx-auto flex w-full flex-wrap justify-start gap-2 p-2'>
          <BackButton />
          <PageTitle />
        </div>
        {favouritesToCatFormat.length ? (
          <div className='h-full w-full'>
            <ImageGallery data={favouritesToCatFormat} />
          </div>
        ) : (
          <div className='mt-[1rem]  min-w-[90%] rounded-xl bg-lightgray p-2 dark:bg-white/5'>
            <p className='text-gray'>No item found</p>
          </div>
        )}
        {sortedLog && sortedLog.length ? (
          <div className='logs mt-[2rem] w-full'>
            {sortedLog.map((request) => (
              <LogItem key={request.id} request={request} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FavouritesPage;
