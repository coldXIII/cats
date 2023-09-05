'use client';
import { usePathname } from 'next/navigation';
import { useCats } from '@/src/stores/catsStore';

const OrderSelect = () => {
  const pathname = usePathname();
  const setOrder = useCats((state) => state.setOrder);

  const handleOrder = (value: string) => {
    setOrder(value);
  };

  return (
    <div className='flex flex-col'>
      <span className='ml-2 text-[0.6rem] uppercase text-gray'>order</span>
      <select
        name='order'
        id='order'
        onChange={(e) => handleOrder(e.target.value)}
        className={`w-[14rem] rounded-lg border-2 border-transparent px-2 py-1 text-gray hover:border-2  hover:border-primaryLight focus:outline-primary ${
          pathname === '/breeds'
            ? 'bg-lightgray dark:bg-white/5'
            : 'bg-white dark:bg-white/5'
        }`}
      >
        <option value='RAND'>Random</option>
        <option value='ASC'>Asc</option>
        <option value='DESC'>Desc</option>
      </select>
    </div>
  );
};

export default OrderSelect;
