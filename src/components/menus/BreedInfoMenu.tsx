import BackButton from '../ui/BackButton';
import BreedTitle from '../ui/BreedTitle';

type BreedInfoProps = {
  breedName: string;
  breedId: string;
};

const BreedInfoMenu = ({ breedName, breedId }: BreedInfoProps) => {
  return (
    <div className='mx-auto flex w-full flex-wrap justify-start gap-2 p-2'>
      <BackButton />
      <BreedTitle breed={breedName} />
      <span className='rounded-lg border-2 border-transparent bg-primary p-2 hover:border-primary'>
        {breedId}
      </span>
    </div>
  );
};

export default BreedInfoMenu;
