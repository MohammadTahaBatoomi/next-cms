"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { PiBellRinging } from "react-icons/pi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FiUser, FiSettings, FiList, FiLogOut } from "react-icons/fi";
import { IconButton } from "@mui/material";

const Header: React.FC<{ onOpenSidebar?: () => void }> = ({
  onOpenSidebar,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => {
    onOpenSidebar?.();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 lg:left-[272px] z-30 w-full lg:w-[calc(100%-272px)] p-4 bg-white flex items-center justify-between">
      <div className="flex items-center gap-4">
        <IconButton onClick={handleMenuClick}>
          <HiOutlineMenuAlt4 className="text-gray-500 cursor-pointer text-xl lg:hidden" />
        </IconButton>
        <div className="relative">
          <IconButton>
            <PiBellRinging className="w-6 h-6 text-gray-500 cursor-pointer" />
          </IconButton>
          <span className="absolute top-0 right-0 block w-2 h-2 bg-[#5d87ff] rounded-full ring-2 ring-white"></span>
        </div>
      </div>

      <div className="relative flex items-center gap-4" ref={dropdownRef}>
        <Link
          href="/authentication/login"
          className="px-4 py-1.5 bg-[#5d87ff] text-white rounded-sm shadow transition"
        >
          Login
        </Link>

        <IconButton onClick={toggleDropdown}>
          <Image
            src="/images/landing/user.jpg"
            alt="User Avatar"
            className="rounded-full object-cover border-2 border-white shadow"
            width={40}
            height={40}
          />
        </IconButton>

        {/* Dropdown with animation */}
        <div
          className={`absolute top-14 right-3 bg-white border border-[#eceef0] rounded-lg w-52 p-4 z-50 transform transition-all duration-200 origin-top ${
            isDropdownOpen
              ? "opacity-100 scale-y-100 pointer-events-auto"
              : "opacity-0 scale-y-0 pointer-events-none"
          }`}
        >
          <ul className="text-[#5b6472] text-sm space-y-2">
            <li className="hover:bg-gray-100 flex items-center gap-2 p-2 rounded cursor-pointer">
              <FiUser className="text-base" />
              My Profile
            </li>
            <li className="hover:bg-gray-100 flex items-center gap-2 p-2 rounded cursor-pointer">
              <FiSettings className="text-base" />
              My Account
            </li>
            <li className="hover:bg-gray-100 flex items-center gap-2 p-2 rounded cursor-pointer">
              <FiList className="text-base" />
              My Task
            </li>
          </ul>
          <Link
            href="/authentication/login"
            className="mt-4 w-full flex items-center justify-center gap-2 bg-white border border-[#aec3ff] text-[#5d87ff] py-1.5 rounded hover:bg-blue-50 transition-colors"
          >
            <FiLogOut className="text-base" />
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
