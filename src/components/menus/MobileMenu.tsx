import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useMobileMenu } from '@/src/stores/mobileStore';
import { mainMenu } from '@/src/constants';

const MobileMenu = () => {
  const pathname = usePathname();
  const closeMobileMenu = useMobileMenu((state) => state.closeMobileMenu);

  return (
    <div className='fixed left-0 top-0 z-50 h-screen w-full bg-lightgray p-2 text-white dark:bg-[#282828] lg:hidden'>
      <div className='flex w-full items-center justify-end '>
        <button
          onClick={closeMobileMenu}
          className='rounded-lg bg-white px-2 py-2 transition-all hover:bg-primaryLight dark:bg-white/5'
        >
          <Image src={`/icons/close.png`} width={20} height={20} alt='like' />
        </button>
      </div>
      <div className='mx-auto mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-[70vw] '>
        <div className='w-full md:w-[70%] lg:w-[60%] '>
          {' '}
          <Link href='/'>
            <button
              onClick={closeMobileMenu}
              className={`mx-auto  w-full rounded-lg bg-white px-6  py-2 text-[0.75rem] uppercase text-primary transition-all hover:bg-primaryLight`}
            >
              Home
            </button>
          </Link>
        </div>

        {mainMenu.map((item, index) => (
          <div key={index} className='w-full md:w-[70%] lg:w-[60%] '>
            <Link href={item.link}>
              <button
                onClick={closeMobileMenu}
                className={`mx-auto   w-full rounded-lg px-6 py-2  text-[0.75rem] uppercase transition-all hover:bg-primaryLight ${
                  item.link === pathname
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary'
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

export default MobileMenu;
