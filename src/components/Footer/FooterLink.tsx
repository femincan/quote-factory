type FooterLinkProps = {
  href: string;
  className?: string;
  children: string;
};

const FooterLink = ({ href, className, children }: FooterLinkProps) => (
  <a href={href} className={`${className || ''} text-sky-300 underline`}>
    {children}
  </a>
);

export { FooterLink };
