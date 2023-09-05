import Image from 'next/image';

type BurgerButtonProps = {
  handleClick: () => void;
};

const BurgerButton = ({ handleClick }: BurgerButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`rounded-lg bg-white bg-white/5 px-2 py-3 transition-all hover:bg-primaryLight`}
    >
      <Image src={`/icons/burger.png`} width={25} height={25} alt='like' />
    </button>
  );
};

export default BurgerButton;
