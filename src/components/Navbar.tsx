"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full bg-gray-800 shadow">
      <div className="justify-between px-6 md:items-center md:flex">
        <div className="flex items-center justify-between py-3 md:py-5">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              BookStore
            </span>
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-4 mt-4 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-6 md:flex md:space-x-10 md:space-y-0">
              <li>
                <Link href={"/login"}>
                  <button className="bg-white mx-2 px-3 py-1 rounded-md border border-white hover:border hover:border-white hover:bg-gray-800 hover:text-white">
                    Login
                  </button>
                </Link>
                <Link href={"/register"}>
                  <button className="bg-white mx-2 px-3 py-1 rounded-md border border-white hover:border hover:border-white hover:bg-gray-800 hover:text-white">
                    Register
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
