import { AuthLogo } from '../auth-logo';

export const AuthContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute top-0 h-full w-full   flex flex-col lg:flex-row justify-evenly  items-center z-[1399]">
    <AuthLogo />
    {children}
  </div>
);
