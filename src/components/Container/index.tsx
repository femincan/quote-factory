import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { greenColors } from '@src/constants';
import { getRandomItem } from '@src/utils';

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  const bgColor = getRandomItem(greenColors);

  return (
    <motion.div
      className='w-full h-full px-1 py-5'
      initial={{ backgroundColor: greenColors[0] }}
      animate={{ backgroundColor: bgColor }}
    >
      <div className='flex flex-col items-center justify-start mx-auto max-w-7xl max-sm:max-w-full'>
        {children}
      </div>
    </motion.div>
  );
};

export { Container };
