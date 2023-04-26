import { getRandomWholeNumber } from './getRandomWholeNumber';

const getRandomItem = (array: string[]): string => {
  if (array.length === 0) {
    throw new Error("Array's length must be at least 1");
  }

  const index = getRandomWholeNumber(0, array.length);

  const item = array[index];

  return item;
};

export { getRandomItem };
