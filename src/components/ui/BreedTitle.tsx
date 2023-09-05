const BreedTitle = ({ breed }: { breed: string }) => {
  return (
    <span className='flex items-center justify-center rounded-lg bg-primaryLight px-2 text-xs uppercase text-primary sm:text-sm lg:px-4'>
      {breed}
    </span>
  );
};

export default BreedTitle;
