import useSWR from 'swr/immutable';

const useRandomQuote = () => {
  const { data, error, isLoading, mutate } = useSWR(
    'https://api.quotable.io/quotes/random'
  );

  return {
    quote: data,
    error,
    isLoading,
    mutate,
  };
};

export { useRandomQuote };
