'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { mainMenu } from '@/src/constants';
import { useCats } from '@/src/stores/catsStore';

const MainMenu = () => {
  const pathname = usePathname();
  const selectBreed = useCats((state) => state.selectBreed);
  return (
    <div className='mt-[3.75rem]'>
      <div className='flex flex-wrap justify-center gap-2 lg:justify-start'>
        {mainMenu.map((item, index) => (
          <div
            key={index}
            className='flex w-[8.6rem] flex-col items-center justify-center'
          >
            <Image
              src={item.image}
              alt={item.label}
              width={100}
              height={200}
              className='mb-2 w-full'
              data-testid='menu-image'
            />
            <Link href={item.link}>
              <button
                onClick={() => selectBreed('')}
                className={`w-[8.5rem] rounded-lg px-6 py-2  text-[0.75rem] uppercase transition-all hover:bg-primaryLight ${
                  item.link === pathname
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-primary'
                }`}
              >
                {item.label}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;
