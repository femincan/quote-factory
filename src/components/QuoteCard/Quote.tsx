import { useRandomQuote } from '@src/hooks';
import { QuoteSkeleton } from './QuoteSkeleton';

const Quote = () => {
  const { quote, isValidating } = useRandomQuote();

  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-5 text-center font-sans-2 text-xl sm:text-2xl'>
      {isValidating ? (
        <QuoteSkeleton />
      ) : (
        <>
          <p id='text'>{quote?.content}</p>
          <p id='author' className='italic'>
            — {quote?.author}
          </p>
        </>
      )}
    </div>
  );
};

export { Quote };
