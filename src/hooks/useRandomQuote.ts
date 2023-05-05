import useSWR from 'swr/immutable';
import { fetcher } from '@src/utils';

type Quote = {
  content: string;
  author: string;
};

const useRandomQuote = () => {
  const { data, error, isLoading, mutate } = useSWR(
    'https://api.quotable.io/quotes/random',
    fetcher
  );

  let quote: Quote | undefined;

  if (data === undefined) {
    quote = data;
  } else {
    [quote] = data as Quote[];
  }

  return {
    quote,
    error,
    isLoading,

    mutate,
  };
};

export { useRandomQuote };
