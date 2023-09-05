import Image from 'next/image';

type ResponseProps = {
  type: string;
  text: string;
};

const Response = ({ type, text }: ResponseProps) => {
  return (
    <div className='mt-2 flex w-full items-center gap-2 rounded-xl bg-white p-2 dark:bg-white/5'>
      <Image src={`/icons/${type}.png`} width={25} height={15} alt='like' />
      <p className='text-sm text-gray'>{text}</p>
    </div>
  );
};

export default Response;
