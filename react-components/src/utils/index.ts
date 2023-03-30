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

export const createImage = (file: File): string => {
  return file ? URL.createObjectURL(file) : '';
};
