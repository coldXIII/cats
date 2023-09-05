import axios, { AxiosError } from 'axios';

export const getBreeds = async () => {
  try {
    axios.defaults.headers.common['x-api-key'] =
      process.env.NEXT_PUBLIC_CATAPI_KEY;
    const response = await axios.get(`https://api.thecatapi.com/v1/breeds/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getAllCats = async (
  breed: string,
  limit: string,
  order: string,
  types: string
) => {
  try {
    axios.defaults.headers.common['x-api-key'] =
      process.env.NEXT_PUBLIC_CATAPI_KEY;
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&mime_types=${types}&limit=${limit}&order=${order}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getCatById = async (id: string) => {
  const response = await axios.get(`https://api.thecatapi.com/v1/images/${id}`);
  return response.data;
};

export const getBreedImages = async (id: string) => {
  try {
    axios.defaults.headers.common['x-api-key'] =
      process.env.NEXT_PUBLIC_CATAPI_KEY;
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=5&breed_ids=${id}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const uploadImage = async (file: any) => {
  try {
    const response = await axios.post(
      'https://api.thecatapi.com/v1/images/upload',
      file,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-api-key': process.env.NEXT_PUBLIC_CATAPI_KEY,
        },
      }
    );
    console.log('Image uploaded successfully:', response.data);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.log('Status:', error.response.status);
        console.log('Data:', error.response.data);
      } else if (error.request) {
        console.log('No response received:', error.request);
      } else {
        console.log('Error message:', error.message);
      }
      return error.response;
    } else {
      console.log('Generic error:', error);
    }
  }
};

export const addToFavourites = async (image_id: string) => {
  try {
    axios.defaults.headers.common['x-api-key'] =
      process.env.NEXT_PUBLIC_CATAPI_KEY;
    const response = await axios.post(
      'https://api.thecatapi.com/v1/favourites',
      image_id,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getFavourites = async () => {
  try {
    axios.defaults.headers.common['x-api-key'] =
      process.env.NEXT_PUBLIC_CATAPI_KEY;
    const response = await axios.get('https://api.thecatapi.com/v1/favourites');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const deleteFromFavourites = async (id: string) => {
  try {
    await axios.delete(`https://api.thecatapi.com/v1/favourites/${id}`);
  } catch (error) {
    console.error('Error deleting from favourites:', error);
  }
};

export const voteImage = async (image_id: string, value: number) => {
  try {
    axios.defaults.headers.common['x-api-key'] =
      process.env.NEXT_PUBLIC_CATAPI_KEY;
    const response = await axios.post(
      'https://api.thecatapi.com/v1/votes',
      { image_id, value },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getVotes = async () => {
  try {
    axios.defaults.headers.common['x-api-key'] =
      process.env.NEXT_PUBLIC_CATAPI_KEY;
    const response = await axios.get(
      'https://api.thecatapi.com/v1/votes?limit=10&order=DESC'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
