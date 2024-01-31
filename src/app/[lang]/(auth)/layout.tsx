import { AuthContainer } from '@/app/[lang]/(auth)/_components/auth-container';
import { AuthBackgroundImage } from '@/app/[lang]/(auth)/_components/background-image';
import { ReactNode } from 'react';

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen w-screen relative">
      <AuthBackgroundImage />
      <AuthContainer>{children}</AuthContainer>
    </div>
  );
};

export default AuthLayout;
