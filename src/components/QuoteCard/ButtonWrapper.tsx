import { ReactElement, cloneElement } from 'react';
import { motion } from 'framer-motion';
import { springTransition, tweenTransition } from '@src/constants';
import { useRandomQuote } from '@src/hooks';

type ButtonWrapperProps = {
  children: ReactElement<HTMLAnchorElement | HTMLButtonElement>;
};

const ButtonWrapper = ({ children }: ButtonWrapperProps) => {
  const { isValidating } = useRandomQuote();

  const childrenWithPadding = cloneElement(children, {
    className: `${children.props.className || ''} px-5 py-2`,
  });

  return (
    <motion.div
      className={`w-fit rounded-md bg-midnight text-xl font-medium text-clouds shadow-lg ${
        isValidating ? 'pointer-events-none' : ''
      }`}
      animate={{ '--tw-bg-opacity': isValidating ? 0.5 : 1 } as object}
      transition={{ ...springTransition, '--tw-bg-opacity': tweenTransition }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {childrenWithPadding}
    </motion.div>
  );
};

export { ButtonWrapper };
