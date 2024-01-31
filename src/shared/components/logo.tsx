import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="Optix Logo"
      height={55}
      width={130}
      priority
      quality={95}
      className="object-cover"
    />
  );
};

export default Logo;
