'use client';
import Image from 'next/image';
import React, { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, Transition } from '@headlessui/react';
import AuthMenu from './authmenu';
import { getSession } from 'next-auth/react';

export const Navbar = ({ user }: { user: any }) => {
  const pathname = usePathname();
  getSession();

  const navigation = [
    {
      name: 'Dashboard',
      href: '/',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'Playground',
      href: '/playground',
    },
  ];

  return (
    <>
      <nav className='border-b'>
        <div className='nav-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between'>
          <div className='left-nav flex gap-4'>
            <div className='nav-logo flex items-center'>
              <Image
                className='block lg:hidden h-8 w-auto'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                alt='Workflow'
                width={32}
                height={32}
              />
              <Image
                className='hidden lg:block h-8 w-auto'
                src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                alt='Workflow'
                width={32}
                height={32}
              />
            </div>
            <div className='sm:gap-4 hidden sm:flex'>
              <div className='nav-links'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`inline-flex  px-1 py-4 text-sm font-medium text-white transition sm:px-2 hover:border-gray-300 dark:hover:border-gray-600 ${
                      pathname === item.href
                        ? 'border-indigo-500'
                        : 'border-transparent'
                    } border-b`}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className='nav-menu flex items-center'>
            <Menu as={'div'} className='relative inline-block text-left z-10'>
              <Menu.Button className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                Menu
              </Menu.Button>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='px-1 py-1 '>
                    <Menu.Item>
                      {({ active }) => (
                        <div>
                          <AuthMenu user={user} active={active} />
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </nav>
    </>
  );
};
