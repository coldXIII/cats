'use client';
import Image from 'next/image';
import { useModal } from '@/src/stores/modalStore';
import { useEffect, useState } from 'react';
import { useCats } from '@/src/stores/catsStore';
import { setFileToBase64 } from '@/src/helpers';
import ImageInput from '../ui/ImageInput';
import UploadResponse from '../ui/UploadResponse';

const UploadModal = () => {
  const [imageFile, setImageFile] = useState('');
  const [imageName, setImageName] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const closeModal = useModal((state) => state.closeModal);
  const uploadImage = useCats((state) => state.uploadImage);
  const uploadResponse = useCats((state) => state.uploadResponse);
  const isLoading = useCats((state) => state.isLoading);

  useEffect(() => {
    if (uploadResponse.status === 201) {
      setImageFile('');
    }
  }, [uploadResponse]);

  const onDrop = async (files: File[]) => {
    const file = files[0];
    setSelectedFile(file);
    setImageName(file.name);
    setFileToBase64(file, setImageFile);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile as unknown as Blob);
    uploadImage(formData);
  };

  return (
    <div className='fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-white/5 lg:justify-end'>
      <div className='min-h-[90vh] w-[90vw] rounded-xl bg-lightgray p-4  dark:bg-black sm:w-[70vw] md:w-[40vw] lg:mr-[5vw]'>
        <div className='mb-4 flex items-center justify-end'>
          <button
            onClick={closeModal}
            className='hover:text-red cursor-pointer hover:scale-125'
          >
            <Image src={`/icons/close.png`} width={15} height={15} alt='like' />
          </button>
        </div>
        <div className='title mb-10 text-center'>
          <h1 className='text-3xl font-medium'>
            Upload a .jpg or .png Cat Image
          </h1>
          <p className='text-gray'>
            Any uploads must comply with the{' '}
            <a
              href='https://thecatapi.com/privacy'
              target='_blank'
              className='text-primary'
            >
              upload guidlines
            </a>{' '}
            or face deletion
          </p>
        </div>
        <ImageInput
          onDrop={onDrop}
          imageFile={imageFile}
          uploadResponse={uploadResponse.status}
        />
        <div className='p-4'>
          {!imageFile ? (
            <p className='text-center text-gray'>No file selected</p>
          ) : (
            <div className='flex flex-col items-center justify-center gap-2'>
              <p className='text-center text-gray'>
                Image File Name: {imageName}
              </p>
              <button
                onClick={handleUpload}
                className='flex items-center justify-center rounded-lg bg-primaryLight px-4 py-2  text-xs uppercase text-primary transition-all hover:bg-primary hover:text-white lg:px-6'
              >
                {isLoading ? (
                  <>
                    {' '}
                    <Image
                      src={`/icons/loading.png`}
                      width={15}
                      height={15}
                      alt='loading'
                    />
                    Uploading
                  </>
                ) : (
                  'Upload Photo'
                )}
              </button>
            </div>
          )}
          {uploadResponse.status === 201 && (
            <UploadResponse
              type='success'
              text='Thanks for the Upload - Cat found'
            />
          )}
          {uploadResponse.status === 400 && (
            <UploadResponse
              type='error'
              text='No Cat Found - Try a different one'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
