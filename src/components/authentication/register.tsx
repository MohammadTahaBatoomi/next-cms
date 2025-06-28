import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5faff] to-[#eaf1fb] p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        <Image
          src="/images/landing/dark-logo.svg"
          alt="Modernize Logo"
          width={180}
          height={180}
          className="my-6"
        />
        <p className="text-gray-400 text-sm mb-4">Your Social Campaigns</p>
        <form className="w-full flex flex-col gap-4">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-1">Username</label>
            <input
              id="Name"
              type="text"
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5d87ff]"
            />
          </div>
          <div>
            <label htmlFor="Email Address" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input
              id="Email Address"
              type="email"
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5d87ff]"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5d87ff]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5d87ff] text-white font-semibold py-2 rounded-md shadow transition-colors"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-sm text-gray-600">
        Already have an Account?{' '}
          <Link href="/authentication/register" className="text-[#5d87ff]">Sign In</Link>
        </div>
      </div>
    </div>
  );
}