'use client';
import { useEffect } from 'react';
import { useCats } from '../stores/catsStore';
import { useModal } from '../stores/modalStore';
import { useMobileMenu } from '../stores/mobileStore';
import Logo from '@/src/components/ui/Logo';
import MainMenu from '@/src/components/menus/MainMenu';
import UploadModal from './modals/UploadModal';
import MobileMenu from './menus/MobileMenu';
import ThemeSwitcher from './ui/ThemeSwitcher';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const limit = useCats((state) => state.limit);
  const order = useCats((state) => state.order);
  const types = useCats((state) => state.types);
  const getCats = useCats((state) => state.getCats);
  const isModalOpen = useModal((state) => state.isModalOpen);
  const selectedBreed = useCats((state) => state.selectedBreed);
  const isMobileMenuOpen = useMobileMenu((state) => state.isMobileMenuOpen);

  useEffect(() => {
    getCats(selectedBreed, limit, order, types);
  }, [selectedBreed, limit, order, types, getCats]);

  return (
    <main className='w-full items-center justify-between lg:flex '>
      {isMobileMenuOpen ? <MobileMenu /> : null}
      <section className='fixed left-0 top-0 hidden min-h-screen w-full flex-col items-center justify-start p-4 lg:flex lg:w-1/2 '>
        <div className=''>
          <Logo />
          <div className='mb-[0.6rem]'>
            <span className='flex text-[2.75rem] font-medium '>
              Hi!🐾 <ThemeSwitcher />
            </span>
            <p className='text-[1.25rem] text-gray'>
              Welcome to the place where cats are
            </p>
          </div>
          <MainMenu />
        </div>
      </section>
      <section
        className='absolute right-0 top-0 flex min-h-screen w-full flex-col items-center justify-start overflow-y-auto 
      lg:w-1/2'
      >
        {children}
      </section>

      {isModalOpen ? <UploadModal /> : null}
    </main>
  );
};

export default MainLayout;
