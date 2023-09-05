import Image from 'next/image';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className='rounded-lg border-2 border-transparent bg-primaryLight p-2 px-2 hover:border-primary'
    >
      <Image src='/icons/back.png' width={15} height={15} alt='back' />
    </button>
  );
};

export default BackButton;
