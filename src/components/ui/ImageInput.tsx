import Image from 'next/image';
import Dropzone from 'react-dropzone';

type DropzoneProps = {
  onDrop: (files: any[]) => void;
  uploadResponse: number;
  imageFile: string;
};

const ImageInput = ({ onDrop, uploadResponse, imageFile }: DropzoneProps) => {
  return (
    <Dropzone onDrop={onDrop} multiple={false} maxSize={8000000000}>
      {({ getRootProps, getInputProps }) => (
        <div
          className={`relative z-10 mx-auto flex h-[240px] w-full  cursor-pointer items-center justify-center rounded-xl border border-dashed border-primary p-4 ${
            uploadResponse === 400
              ? 'bg-primaryLight'
              : 'bg-white dark:bg-white/5'
          }`}
          {...getRootProps()}
        >
          {!imageFile ? (
            <Image
              src='/images/emptyimage.png'
              alt='image preview'
              width={100}
              height={100}
              className='absolute left-0 top-0 -z-10 h-full w-full object-contain dark:invert'
            />
          ) : null}
          <input {...getInputProps()} />
          {imageFile ? (
            <Image
              src={imageFile}
              alt='image preview'
              width={150}
              height={150}
              className='h-full w-full object-cover'
            />
          ) : (
            <p className='text-gray'>
              <span className='font-bold dark:text-white'>Drag here </span>your
              file or{' '}
              <span className='font-bold  dark:text-white'>Click here </span>to
              upload
            </p>
          )}
        </div>
      )}
    </Dropzone>
  );
};

export default ImageInput;
