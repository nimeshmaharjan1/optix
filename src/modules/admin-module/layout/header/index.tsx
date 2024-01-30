'use client';
import Logo from '@/components/shared/logo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import AdminLayoutHeaderNav from './header-nav';

const AdminLayoutHeader = () => {
  return (
    <header className="bg-primary text-white">
      <nav className="p-4 pr-6 flex items-center justify-between">
        <Logo></Logo>
        <div className="hidden lg:block">
          <AdminLayoutHeaderNav></AdminLayoutHeaderNav>
        </div>
        <div className="avatar-section flex items-center gap-6">
          <Button size={'icon'} variant={'ghost'}>
            <Bell></Bell>
          </Button>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>Nimesh Maharjan</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AdminLayoutHeader;
