export interface ICat {
  id: string;
  url: string;
  breeds?: IBreed[];
}
export interface IBreed {
  id: string;
  name: string;
  temperament: string;
  description: string;
  origin: string;
  weight: {
    metric: string;
  };
  life_span: string;
}

export interface IImage {
  id: string;
  url: string;
}

export interface IFavourite {
  id: string;
  image_id: string;
  created_at: Date;
  image: IImage;
}

export interface IVote {
  id: string;
  image: IImage;
  value: number;
}

export type LogData = {
  id: string;
  image_id: string;
  type: string;
  time: Date;
};
