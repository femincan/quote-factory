import { Transition } from 'framer-motion';

const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 10,
};

const tweenTransition: Transition = {
  type: 'tween',
  duration: 0.3,
};

export { springTransition, tweenTransition };
