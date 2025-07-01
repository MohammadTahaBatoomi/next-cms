"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiBellRinging } from "react-icons/pi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Header: React.FC<{ onOpenSidebar?: () => void }> = ({ onOpenSidebar }) => {
  const handleMenuClick = () => {
    onOpenSidebar?.();
  };

  return (
    <header className="fixed top-0 left-0 md:left-[272px] z-30 w-full md:w-[calc(100%-272px)] p-4 bg-white flex items-center justify-between">
      <div className="flex items-center gap-4">
        <HiOutlineMenuAlt4
          className="text-gray-500 cursor-pointer text-xl md:hidden"
          onClick={handleMenuClick}
        />
        <div className="relative">
          <button className="focus:outline-none">
            <PiBellRinging className="w-6 h-6 text-gray-500 cursor-pointer" />
            <span className="absolute top-0 right-0 block w-2 h-2 bg-[#5d87ff] rounded-full ring-2 ring-white"></span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/authentication/login"
          className="px-4 py-1.5 bg-[#5d87ff] text-white rounded-sm shadow transition"
        >
          Login
        </Link>

        <Image
          src="/images/landing/user.jpg"
          alt="User Avatar"
          className="rounded-full object-cover border-2 border-white shadow"
          width={40}
          height={40}
        />
      </div>
    </header>
  );
};

export default Header;
