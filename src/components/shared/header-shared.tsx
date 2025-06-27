import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { PiBellRinging } from "react-icons/pi";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between w-full p-4 bg-white">
      {/* Notification Bell */}
    
      <div className="relative mr-6">
        <button className="focus:outline-none">
          {/* Bell Icon (Heroicons) */}            
          <PiBellRinging className="w-6 h-6 text-gray-500 cursor-pointer" />
          {/* Blue Dot */}
          <span className="absolute top-0 right-0 block w-2 h-2 bg-[#5d87ff] rounded-full ring-2 ring-white"></span>
        </button>
      </div>
<div className='flex items-center justify-between'>

        {/* Login Button */}
        <Link href='/authentication/login' className="mr-6 px-4 py-1.5 bg-[#5d87ff] text-white rounded-sm shadow transition">
          Login
        </Link>

        {/* User Avatar */}
          <Image src="/images/landing/user.jpg" alt="User Avatar" className='rounded-full object-cover border-2 border-white shadow' width={40} height={40} />

</div>
    </header>
  )
}

export default Header