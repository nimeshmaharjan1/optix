import Overlay from '@/shared/components/overlay';
import Image from 'next/image';

export const AuthBackgroundImage = () => (
  <>
    <Image
      src="/login.webp"
      alt="login background image"
      fill
      className="object-cover grayscale"
      quality={90}
      loading="lazy"
      sizes="100vw"
    />
    <Overlay />
  </>
);
