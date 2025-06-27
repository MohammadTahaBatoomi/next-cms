"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { MdOutlineContentCopy } from "react-icons/md";
import { TbLogin, TbTypography, TbMoodHappy } from "react-icons/tb";
import { FiAperture } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineUserAdd } from "react-icons/ai";

interface Props {
  isMobileOpen?: boolean;
  onClose?: () => void;
}

const SidebarShared: React.FC<Props> = ({ isMobileOpen = false, onClose }) => {
  const pathname = usePathname();

  return (
    <aside
      className={`
        hidden md:flex
        ${isMobileOpen ? 'fixed inset-0 z-50 flex bg-white' : ''}
        w-68 min-h-screen border-r border-[#e8eae9] flex-col px-6 py-6
        transition-transform duration-300
      `}
    >
      {/* دکمه بستن در حالت موبایل */}
      {isMobileOpen && (
        <button className="md:hidden mb-4 self-end text-xl" onClick={onClose}>✕</button>
      )}

      {/* لوگو */}
      <div className="mb-8">
        <Link href="/">
          <Image src="/images/landing/dark-logo.svg" alt="Modernize Logo" width={180} height={40} />
        </Link>
      </div>

      {/* منو */}
      <nav className="flex-1">
        {/* HOME */}
        <div className="mb-6">
          <div className="text-xs font-semibold mb-2 uppercase tracking-wider">HOME</div>
          <ul className="space-y-1">
            <li>
              <Link href="/">
                <div className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${pathname === '/' ? 'bg-[#5d87ff] text-white' : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'}`}>
                  <LuLayoutDashboard />
                  <span>Dashboard</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* UTILITIES */}
        <div className="mb-6">
          <div className="text-xs font-semibold mb-2 uppercase tracking-wider">UTILITIES</div>
          <ul className="space-y-1">
            <li>
              <Link href="/utilities/typography">
                <div className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${pathname === '/utilities/typography' ? 'bg-[#5d87ff] text-white' : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'}`}>
                  <TbTypography />
                  <span>Typography</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/utilities/shadow">
                <div className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${pathname === '/utilities/shadow' ? 'bg-[#5d87ff] text-white' : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'}`}>
                  <MdOutlineContentCopy />
                  <span>Shadow</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* AUTH */}
        <div className="mb-6">
          <div className="text-xs font-semibold mb-2 uppercase tracking-wider">AUTH</div>
          <ul className="space-y-1">
            <li>
              <Link href="/authentication/login">
                <div className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${pathname === '/authentication/login' ? 'bg-[#5d87ff] text-white' : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'}`}>
                  <TbLogin />
                  <span>Login</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/authentication/register">
                <div className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${pathname === '/authentication/register' ? 'bg-[#5d87ff] text-white' : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'}`}>
                  <AiOutlineUserAdd />
                  <span>Register</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* EXTRA */}
        <div className="mb-6">
          <div className="text-xs font-semibold mb-2 uppercase tracking-wider">EXTRA</div>
          <ul className="space-y-1">
            <li>
              <Link href="/icons">
                <div className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${pathname === '/icons' ? 'bg-[#5d87ff] text-white' : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'}`}>
                  <TbMoodHappy />
                  <span>Icons</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/sample-page">
                <div className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${pathname === '/sample-page' ? 'bg-[#5d87ff] text-white' : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'}`}>
                  <FiAperture />
                  <span>Sample Page</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Signup box */}
      <div className="mt-auto">
        <div className="bg-blue-100 rounded-xl p-4 flex flex-col items-start relative">
          <div className="mb-2 font-semibold text-gray-800">Haven't account ?</div>
          <Link href="/authentication/register">
            <div className="bg-[#5d87ff] text-white px-4 py-1.5 rounded-lg text-sm font-medium shadow transition-colors hover:bg-blue-800">Sign Up</div>
          </Link>
          <div className="absolute right-2 bottom-2">
            <Image src="/images/landing/rocket.png" alt="Rocket" width={78} height={78} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarShared;
