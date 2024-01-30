import { AuthBackgroundImage } from '@/modules/auth-module/background-image';
import { AuthContainer } from '@/modules/auth-module/layout/auth-container';
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
