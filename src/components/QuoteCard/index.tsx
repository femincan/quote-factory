import { motion } from 'framer-motion';
import TwitterIcon from '@src/assets/twitter.svg';
import { springTransition } from '@src/constants';
import { useRandomQuote } from '@src/hooks';
import { ButtonWrapper } from './ButtonWrapper';
import { Quote } from './Quote';

const QuoteCard = () => {
  const { quote, isValidating, mutate } = useRandomQuote();

  return (
    <div
      id='quote-box'
      className='flex flex-1 items-center justify-center self-stretch'
    >
      <motion.div
        className='flex w-full max-w-xl flex-col items-stretch justify-between gap-10 rounded-xl bg-sun-flower px-10 py-8 shadow-xl'
        style={{ minHeight: 320 }}
        transition={springTransition}
        layout
      >
        <Quote />
        <div className='flex items-center justify-between'>
          <ButtonWrapper>
            <a
              id='tweet-quote'
              className='flex items-center justify-center'
              href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
                `${quote?.content}\n\n— ${quote?.author}`
              )}`}
              target='_blank'
              rel='noopener noreferrer'
              title='Share on Twitter'
            >
              <img className='h-6 w-6' src={TwitterIcon} alt='twitter icon' />
            </a>
          </ButtonWrapper>
          <ButtonWrapper>
            <button
              type='button'
              id='new-quote'
              className='text-lg'
              disabled={isValidating}
              onClick={() => mutate()}
            >
              New Quote
            </button>
          </ButtonWrapper>
        </div>
      </motion.div>
    </div>
  );
};

export { QuoteCard };
