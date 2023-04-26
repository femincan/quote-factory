import axios from 'axios';

const fetcher = async (url: string): Promise<unknown> => {
  const { data } = await axios.get(url);

  return data;
};

export { fetcher };
