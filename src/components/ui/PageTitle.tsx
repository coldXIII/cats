import { usePathname } from 'next/navigation';

const PageTitle = () => {
  const pathname = usePathname();
  const pageName = pathname.slice(1);
  return (
    <span className='flex items-center justify-center rounded-lg bg-primary px-2 text-xs uppercase text-white sm:text-sm lg:px-4'>
      {pageName}
    </span>
  );
};

export default PageTitle;
