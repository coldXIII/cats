'use client';
import SearchInput from '../ui/SearchInput';
import ReactionButton from '../ui/ReactionButton';
import BurgerButton from '../ui/BurgerButton';
import { useWidth } from '@/src/hooks';
import { useMobileMenu } from '@/src/stores/mobileStore';

const HeaderMenu = () => {
  const width = useWidth();
  const openMobileMenu = useMobileMenu((state) => state.openMobileMenu);

  return (
    <div className='mx-auto mb-2 w-full items-center justify-around gap-2 py-2 sm:flex-row-reverse xl:flex'>
      <div className='buttons flex justify-between'>
        {width < 990 && <BurgerButton handleClick={openMobileMenu} />}
        <div className='flex gap-1'>
          <ReactionButton type={'like'} link={'/likes'} />
          <ReactionButton type={'fav'} link={'/favourites'} />
          <ReactionButton type={'dislike'} link={'/dislikes'} />
        </div>
      </div>
      <SearchInput />
    </div>
  );
};

export default HeaderMenu;
