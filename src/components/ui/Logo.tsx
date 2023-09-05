import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='mb-[3rem] flex items-center justify-start'>
      <Link href='/'>
        <Image
          className='dark:invert'
          src='/logo.png'
          alt='PetsPaw Logo'
          data-testid='logo'
          width={100}
          height={50}
        />
      </Link>
    </div>
  );
};

export default Logo;
