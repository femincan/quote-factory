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
      className='min-h-[inherit] w-full p-5'
      initial={{ backgroundColor: colorsArray[0] }}
      animate={{ backgroundColor: bgColor }}
    >
      <div className='mx-auto flex min-h-[inherit] w-full flex-col items-center justify-start gap-10 sm:max-w-7xl'>
        {children}
      </div>
    </motion.div>
  );
};

export { Container };
