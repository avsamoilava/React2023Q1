export const createImage = (file: File): string => {
  return file ? URL.createObjectURL(file) : '';
};
