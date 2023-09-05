import { create } from 'zustand';
import { IBreed, ICat, IFavourite, IVote } from '../types';
import {
  getAllCats,
  uploadImage,
  getCatById,
  addToFavourites,
  getFavourites,
  deleteFromFavourites,
  voteImage,
  getVotes,
} from '../lib/actions';

interface CatsState {
  cat: ICat | null;
  cats: ICat[];
  limit: string;
  order: string;
  types: string;
  votes: IVote[];
  favourites: IFavourite[];
  uploadResponse: any;
  selectedBreed: string;
  requestLog: any[];
  isLoading: boolean;
  getCats: (breed: string, limit: string, order: string, types: string) => void;
  getCat: (id: string) => void;
  selectBreed: (value: string) => void;
  setLimit: (value: string) => void;
  setOrder: (value: string) => void;
  setTypes: (value: string) => void;
  uploadImage: (file: any) => void;
  addToFavourites: (id: string) => void;
  getFavourites: () => void;
  deleteFromFavourites: (id: string) => void;
  voteImage: (image_id: string, value: number) => void;
  getVotes: () => void;
}

export const useCats = create<CatsState>((set, get) => ({
  cat: null,
  cats: [],
  limit: '10',
  order: 'RAND',
  types: '',
  favourites: [],
  uploadResponse: {},
  selectedBreed: '',
  requestLog: [],
  votes: [],
  isLoading: true,
  getCats: async (breed, limit, order, types) => {
    const response: ICat[] = await getAllCats(breed, limit, order, types);
    set(() => {
      return {
        cats: response,
        isLoading: false,
      };
    });
  },
  getCat: async (id: string) => {
    const response: ICat = await getCatById(id);
    set(() => {
      return {
        cat: response,
      };
    });
  },
  selectBreed: (value) => set({ selectedBreed: value }),
  setLimit: (value) => set({ limit: value }),
  setOrder: (value) => set({ order: value }),
  setTypes: (value) => set({ types: value }),
  uploadImage: async (file) => {
    set(() => {
      return {
        isLoading: true,
      };
    });
    const response = await uploadImage(file);
    set(() => {
      return {
        uploadResponse: response,
        isLoading: false,
      };
    });
  },
  addToFavourites: async (id) => {
    await addToFavourites(id);
  },
  getFavourites: async () => {
    const response: IFavourite[] = await getFavourites();
    set(() => {
      return {
        favourites: response,
        isLoading: false,
      };
    });
  },
  deleteFromFavourites: async (id) => {
    await deleteFromFavourites(id);
  },
  voteImage: async (image_id, value) => {
    await voteImage(image_id, value);
  },
  getVotes: async () => {
    const response: IVote[] = await getVotes();
    set(() => {
      return {
        votes: response,
        isLoading: false,
      };
    });
  },
}));
