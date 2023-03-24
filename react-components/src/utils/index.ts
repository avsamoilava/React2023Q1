import { RefObject } from 'react';

export const nameValidate = (value: string): boolean => {
  const parts = value.split(' ').map((part) => part.trim());
  return (
    parts.every((part) => part.length >= 3 && part[0] === part[0].toUpperCase()) &&
    parts.length === 2
  );
};

export const dateValidate = (value: string): boolean => {
  const parts = value.split('-');
  return !!value && +parts[0] >= 1900;
};

export const createImage = (ref: RefObject<HTMLInputElement>): string => {
  const input = ref.current as HTMLInputElement;
  const file: File | null = input?.files ? input.files[0] : null;
  return file ? URL.createObjectURL(file) : '';
};
