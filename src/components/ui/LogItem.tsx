import Image from 'next/image';
import { LogData } from '@/src/types';

type LogItemProps = {
  request: LogData;
};

const LogItem = ({ request }: LogItemProps) => {
  const timeToDisplay = new Date(request.time).toTimeString().substring(0, 5);

  let action = '';
  let icon = '';

  switch (request.type) {
    case 'fav_add':
      action = 'was added to Favourites';
      icon = '/icons/fav.png';
      break;

    case 'fav_remove':
      action = 'was removed from Favourites';
      icon = '/icons/dislike.png';
      break;

    case 'like':
      action = 'was added to Likes';
      icon = '/icons/like-green.png';
      break;

    case 'dislike':
      action = 'was added to Dislikes';
      icon = '/icons/dislike-yellow.png';
      break;

    default:
      console.log('Empty action received.');
  }

  return (
    <>
      <div
        key={request.id}
        className='mb-2 w-full items-center justify-center rounded-xl bg-lightgray px-6 py-2 text-center dark:bg-white/5 md:flex lg:justify-between'
      >
        <span className='font-bold'>{timeToDisplay}</span>
        <div className='flex items-center justify-center gap-2 '>
          <span className='text-gray'>Image ID: </span>
          <span>{request.image_id}</span>
          <span className='text-gray'>{action}</span>
        </div>
        <Image
          src={icon}
          width={20}
          height={20}
          alt='like'
          className='mx-auto md:mx-0'
        />
      </div>
    </>
  );
};

export default LogItem;
