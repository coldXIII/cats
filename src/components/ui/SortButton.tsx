import Image from 'next/image';

type SortButtonProps = {
  type: string;
  status: boolean;
  handleClick: () => void;
};

const SortButton = ({ type, status, handleClick }: SortButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className='rounded-lg bg-lightgray px-3 py-2 dark:bg-white/5'
    >
      {!status ? (
        <Image
          src={`/icons/${type}-black.png`}
          width={15}
          height={15}
          alt='back'
        />
      ) : (
        <Image
          src={`/icons/${type}-red.png`}
          width={15}
          height={15}
          alt='back'
        />
      )}
    </button>
  );
};

export default SortButton;
