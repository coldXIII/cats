import Lottie from 'lottie-react';
import { useTheme } from 'next-themes';
import cat_light from '@/src/constants/animations/cat_light.json';
import cat_dark from '@/src/constants/animations/cat_dark.json';

const Loader = () => {
  const { theme } = useTheme();
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      {theme === 'light' ? (
        <Lottie animationData={cat_light} className='w-[25rem]' />
      ) : (
        <Lottie animationData={cat_dark} className='w-[25rem]' />
      )}
    </div>
  );
};

export default Loader;
