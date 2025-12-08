"use client";
import React from 'react'
import AdminSidebar from '../componensts/shared/AdminSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation';
import AdminHeader from '../componensts/shared/AdminHeader';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { ToastContainer } from 'react-toastify';

type TProps = {
  children: React.ReactNode
}

const Wrapper = ({ children }: TProps) => {
  const pathName = usePathname();
  const isShowSidebar = pathName?.includes('/auth');
  // console.log(isShowSidebar);
  return (
    <Provider store={store}>
      <SidebarProvider className={`flex gap-10 ${isShowSidebar ? "items-center" : "items-start"}`}>
        <div>
          {
            isShowSidebar ? null : <AdminSidebar></AdminSidebar>
          }
        </div>
        <div className='p-8 w-full space-y-5'>
          <div>
            {
              isShowSidebar ? null : <AdminHeader></AdminHeader>
            }
          </div>
          {children}
        </div>
        <ToastContainer autoClose={2000}/>
      </SidebarProvider>
    </Provider>
  )
}

export default Wrapper
