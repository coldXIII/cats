import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ReactionButtonProps = {
  type: string;
  link: string;
};

const ReactionButton = ({ type, link }: ReactionButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === link;
  return (
    <Link
      href={link}
      className='rounded-lg transition-all hover:bg-primaryLight'
    >
      <button
        className={`rounded-lg px-2 py-2 transition-all    ${
          isActive ? 'bg-primary' : 'bg-white dark:bg-white/5 '
        }`}
      >
        {!isActive ? (
          <Image src={`/icons/${type}.png`} width={25} height={25} alt='like' />
        ) : (
          <Image
            src={`/icons/${type}-white.png`}
            width={25}
            height={25}
            alt='like'
          />
        )}
      </button>
    </Link>
  );
};

export default ReactionButton;
