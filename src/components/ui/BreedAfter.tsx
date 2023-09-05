import Link from 'next/link';
import { ICat } from '@/src/types';

const BreedAfter = ({ cat }: { cat: ICat }) => {
  return (
    <Link href={`breed/${cat.id}`}>
      <div className='absolute left-0 top-0 flex h-full w-full cursor-pointer items-end  justify-center bg-primary/50 p-2 opacity-0 hover:opacity-100'>
        <span className='flex w-full items-center justify-center rounded-xl bg-white p-1 text-primary'>
          {cat.breeds ? cat.breeds[0]?.name : 'Cat'}
        </span>
      </div>
    </Link>
  );
};

export default BreedAfter;
