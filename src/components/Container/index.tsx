import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <div className='min-h-[inherit] w-full bg-midnight p-5'>
    <div className='mx-auto flex min-h-[inherit] w-full flex-col items-center justify-start gap-10 sm:max-w-7xl'>
      {children}
    </div>
  </div>
);

export { Container };
