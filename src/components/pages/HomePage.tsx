'use client';
import Image from 'next/image';
import BurgerButton from '../ui/BurgerButton';
import { useMobileMenu } from '@/src/stores/mobileStore';

const HomePage = () => {
  const openMobileMenu = useMobileMenu((state) => state.openMobileMenu);
  return (
    <section className='relative z-10 h-screen w-full before:absolute  before:left-1/2 before:top-1/2 before:-z-10 before:h-[90%] before:w-[75%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-lg before:bg-primaryLight dark:before:bg-white/5 sm:mx-auto md:w-[90%] '>
      <Image
        src='/home/girl-and-pet.png'
        alt='a girl and a pet'
        fill
        className='md:ml-[2rem]'
      />
      <div className='absolute right-1 top-1 z-10 lg:hidden'>
        <BurgerButton handleClick={openMobileMenu} />
      </div>
    </section>
  );
};

export default HomePage;
