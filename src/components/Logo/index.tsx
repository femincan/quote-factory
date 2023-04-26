import LogoSvg from '@src/assets/logo.svg';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => (
  <div className={`flex items-center justify-center p-3 ${className || ''}`}>
    <img src={LogoSvg} alt='logo' />
  </div>
);

export { Logo };
