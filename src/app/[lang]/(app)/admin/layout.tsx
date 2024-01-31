import AdminLayoutHeader from '@/app/[lang]/(app)/admin/_components/layout/header';
import { Sidebar } from '@/app/[lang]/(app)/admin/_components/layout/sidebar';
import { navList } from '@/app/[lang]/(app)/admin/_components/layout/sidebar/sidebar-nav-list';
import React, { ReactNode } from 'react';

const AdminLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
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

export default AdminLayout;
