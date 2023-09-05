import Image from 'next/image';
import { useModal } from '@/src/stores/modalStore';

const UploadButton = () => {
  const openModal = useModal((state) => state.openModal);
  return (
    <button
      onClick={openModal}
      className=' mt-2 flex w-full items-center justify-center gap-1 rounded-lg border-2 border-transparent  bg-primaryLight px-4 py-2 text-xs uppercase text-primary hover:border-primary sm:w-[9rem] lg:mt-0 lg:px-6'
    >
      <Image src='/icons/upload.png' width={15} height={15} alt='' />
      upload
    </button>
  );
};

export default UploadButton;
