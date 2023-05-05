import { Transition } from 'framer-motion';

const baseTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 10,
};

const bgOpacityTransition: Transition = {
  '--tw-bg-opacity': {
    type: 'tween',
    duration: 0.3,
  },
};

export { baseTransition, bgOpacityTransition };
