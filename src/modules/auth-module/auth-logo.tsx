import Image from 'next/image';

export const AuthLogo = () => (
  <div className="flex flex-col gap-6 lg:gap-8 relative ">
    <Image
      src="/logo.png"
      alt="optix-login-logo"
      width={530}
      height={150}
      loading="lazy"
    />
    <p className=" text-white font-heading font-Medium leading-5  text-r3 drop-shadow-2xl ml-5">
      Building Efficiency, Constructing Success.
    </p>
  </div>
);
