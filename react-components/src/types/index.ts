export type Fields = {
  userName: string;
  country: string;
  date: string;
  gender: string;
  agreement: boolean;
  images: FileList;
};

export type FormCard = Partial<Fields> & {
  image: string;
};
