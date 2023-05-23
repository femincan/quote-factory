import useSWR from 'swr/immutable';
import axios from 'axios';

type Quote = {
  content: string;
  author: string;
};

const fetcher = async (url: string): Promise<unknown> => {
  const { data } = await axios.get(url);

  return data;
};

const useRandomQuote = () => {
  const { data, ...restSWR } = useSWR(
    'https://api.quotable.io/quotes/random',
    fetcher
  );

  return {
    ...restSWR,
    quote: (data as Quote[] | undefined)?.[0],
  };
};

export { useRandomQuote };
