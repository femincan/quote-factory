import useSWR from 'swr/immutable';
import { fetcher } from '@src/utils';

type Quote = {
  content: string;
  author: string;
};

const useRandomQuote = () => {
  const { data, ...restSWR } = useSWR(
    'https://api.quotable.io/quotes/random',
    fetcher
  );

  return {
    quote: (data as Quote[] | undefined)?.[0],
    ...restSWR,
  };
};

export { useRandomQuote };
