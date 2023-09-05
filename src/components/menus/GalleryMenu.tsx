import BackButton from '../ui/BackButton';
import PageTitle from '../ui/PageTitle';
import UploadButton from '../ui/UploadButton';
import BreedsSelect from '../ui/BreedsSelect';
import LimitSelect from '../ui/LimitSelect';
import OrderSelect from '../ui/OrderSelect';
import TypeSelect from '../ui/TypeSelect';

const BreedsMenu = () => {
  return (
    <div className='mx-auto flex w-full flex-col flex-wrap items-center justify-center gap-2 p-2'>
      <div className='w-full items-center justify-between sm:flex'>
        <div className='flex gap-2'>
          <BackButton />
          <PageTitle />
        </div>
        <UploadButton />
      </div>
      <div className='flex flex-wrap items-center justify-center gap-4 bg-lightgray p-2 dark:bg-white/5'>
        <OrderSelect />
        <TypeSelect />
        <BreedsSelect />
        <LimitSelect />
      </div>
    </div>
  );
};

export default BreedsMenu;
