import AdminLayoutHeader from '@/modules/admin-module/layout/header';
import { Sidebar } from '@/modules/admin-module/layout/sidebar';
import { navList } from '@/modules/admin-module/layout/sidebar/sidebar-nav-list';
import React, { ReactNode } from 'react';

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <AdminLayoutHeader></AdminLayoutHeader>
      <section className="flex">
        <Sidebar list={navList['procumnet']}></Sidebar>
        <main className="flex-1 container py-4 xl:py-6">{children}</main>
      </section>
    </>
  );
};

export default AppLayout;
