import Image from 'next/image';

const Footer = () => (
   <footer className="footer" >
      Powered by{' '}
      <Image src="/github-logo.png" alt="Github Logo" width={70} height={30} />
      API
   </footer>
);

export { Footer };