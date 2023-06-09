import { motion, useIsPresent } from 'framer-motion';
import { tweenTransition } from '@src/constants';

const QuoteSkeleton = () => {
  const isPresent = useIsPresent();

  return (
    <motion.div
      role='status'
      className={`flex w-full ${
        isPresent ? 'animate-pulse' : ''
      } flex-col items-center justify-center gap-3.5`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: tweenTransition }}
    >
      <div className='h-2 w-full max-w-[200px] rounded-full bg-midnight sm:max-w-[360px]' />
      <div className='h-2 w-full max-w-[260px] rounded-full bg-midnight sm:max-w-none' />
      <div className='h-2 w-full max-w-[170px] rounded-full bg-midnight sm:max-w-[330px]' />
      <div className='h-2 w-full max-w-[140px] rounded-full bg-midnight sm:max-w-[300px]' />
      <div className='h-2 w-full max-w-[200px] rounded-full bg-midnight sm:max-w-[360px]' />
      <div className='mt-4 h-3.5 w-32 max-w-full rounded-full bg-midnight sm:w-40' />
      <span className='sr-only'>Loading...</span>
    </motion.div>
  );
};

export { QuoteSkeleton };
