import { usePathname } from 'next/navigation';
import { useCats } from '@/src/stores/catsStore';

const LimitSelect = () => {
  const pathname = usePathname();
  const setLimit = useCats((state) => state.setLimit);

  const handleLimit = (value: string) => {
    setLimit(value);
  };

  return (
    <div className='flex flex-col'>
      {pathname === '/gallery' && (
        <span className='ml-2 text-[0.6rem] uppercase text-gray'>limit</span>
      )}
      <select
        name='limit'
        id='limit'
        onChange={(e) => handleLimit(e.target.value)}
        defaultValue={10}
        className={`rounded-lg border-2 border-transparent px-2 py-1 text-sm text-gray  hover:border-2 hover:border-primaryLight focus:outline-primary ${
          pathname === '/breeds'
            ? 'w-[6rem] bg-lightgray dark:bg-white/5'
            : 'w-[14rem] bg-white dark:bg-white/5'
        }`}
      >
        <option value='5'>
          {pathname === '/breeds' ? 'Limit: 5' : '5 items per page'}
        </option>
        <option value='10'>
          {pathname === '/breeds' ? 'Limit:10' : '10 items per page'}
        </option>
        <option value='15'>
          {pathname === '/breeds' ? 'Limit:15' : '15 items per page'}
        </option>
        <option value='20'>
          {pathname === '/breeds' ? 'Limit:20' : '20 items per page'}
        </option>
      </select>
    </div>
  );
};

export default LimitSelect;
