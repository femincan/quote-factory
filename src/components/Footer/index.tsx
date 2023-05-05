import { FooterLink } from './FooterLink';

const Footer = () => (
  <div className='flex flex-col items-center justify-center gap-2 text-2xl font-light text-clouds'>
    <p>
      Made with 💖 by{' '}
      <FooterLink href='https://github.com/femincan'>Furkan Emin Can</FooterLink>
    </p>
    <p>
      Click{' '}
      <FooterLink href='https://github.com/femincan/quote-factory'>
        here
      </FooterLink>{' '}
      to access project&apos;s GitHub repository
    </p>
  </div>
);

export { Footer };
