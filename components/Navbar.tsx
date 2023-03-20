import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import Logo from "../assets/logo.svg"
// type Props = {
//   data: User
// }

const Navbar = () => (
  <div className="">
    <nav>
      <div className="bg-[#00CB6C] ">
        En
        <Button colorScheme="teal" size="xs">
          Button
        </Button>
      </div>
      <div className=" bg-gray-50">
        <div className=" container mx-auto flex justify-between items-center py-3 ">
          <div className=""><Link href="/"><Image src={Logo} alt="Logo" className=" w-full" /></Link></div>
          <div className=" hidden md:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/users">Users List</Link>
            <a href="/api/users">Users API</a>
          </div>
          <div className=" md:hidden text-[24px]" >
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
