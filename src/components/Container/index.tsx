import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { getRandomItem } from '@src/utils';

type ContainerProps = {
  colorsArray: string[];
  children: ReactNode;
};

const Container = ({ children, colorsArray }: ContainerProps) => {
  const bgColor = getRandomItem(colorsArray);

  return (
    <motion.div
      className='w-full h-full px-1 py-5'
      initial={{ backgroundColor: colorsArray[0] }}
      animate={{ backgroundColor: bgColor }}
    >
      <div className='flex flex-col items-center justify-start mx-auto max-w-7xl max-sm:max-w-full'>
        {children}
      </div>
    </motion.div>
  );
};

export { Container };
