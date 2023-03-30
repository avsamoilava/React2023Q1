export enum Countries {
  'belarus',
  'germany',
  'poland',
  '',
}

export type FormCard = {
  userName: string;
  date: string;
  country: Countries;
  gender: string;
  image: string;
  agreement: boolean;
};

export type FormErrors = {
  userName: string;
  country: string;
  date: string;
  image: string;
  agreement: string;
};
