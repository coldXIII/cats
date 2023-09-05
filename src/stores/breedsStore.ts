import { create } from 'zustand';
import { IBreed, IImage } from '../types';
import { getBreedImages, getBreeds } from '../lib/actions';

interface BreedsState {
  breeds: IBreed[];
  breedImages: IImage[];
  isZaActive: boolean;
  isAzActive: boolean;
  getBreeds: () => void;
  handleSortAz: () => void;
  handleSortZa: () => void;
  getBreedImages: (id: string) => void;
}

export const useBreeds = create<BreedsState>((set, get) => ({
  breeds: [],
  selectedBreed: '',
  breedImages: [],
  isZaActive: false,
  isAzActive: false,
  getBreeds: async () => {
    const data = await getBreeds();
    set(() => {
      return {
        breeds: data,
      };
    });
  },
  getBreedImages: async (id) => {
    const data = await getBreedImages(id);
    set(() => {
      return {
        breedImages: data,
      };
    });
  },
  handleSortAz: () =>
    set({
      isAzActive: true,
      isZaActive: false,
      breeds: get().breeds.sort((a, b) => (b.name > a.name ? -1 : 1)),
    }),
  handleSortZa: () =>
    set({
      isAzActive: false,
      isZaActive: true,
      breeds: get().breeds.sort((a, b) => (a.name > b.name ? -1 : 1)),
    }),
}));
