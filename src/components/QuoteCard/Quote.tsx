import { AnimatePresence, motion } from 'framer-motion';
import { tweenTransition } from '@src/constants';
import { useRandomQuote } from '@src/hooks';
import { QuoteSkeleton } from './QuoteSkeleton';

const Quote = () => {
  const { quote, isValidating } = useRandomQuote();

  return (
    <AnimatePresence mode='wait'>
      <div
        className='flex flex-1 flex-col items-center justify-center gap-5 text-center font-sans-2 text-xl sm:text-2xl'
        key='quote'
      >
        {isValidating ? (
          <QuoteSkeleton />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: tweenTransition }}
          >
            <p id='text'>{quote?.content}</p>
            <p id='author' className='italic'>
              — {quote?.author}
            </p>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export { Quote };
