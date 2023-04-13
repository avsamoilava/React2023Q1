export interface Fields {
  userName: string;
  country: string;
  date: string;
  gender: string;
  agreement: boolean;
  images: FileList;
}

export interface FormCard extends Omit<Fields, 'images'> {
  image: string;
}

export type Char = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};
