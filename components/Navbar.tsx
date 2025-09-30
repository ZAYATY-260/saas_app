"use client";

import Link from "next/link"
import Image from "next/image"
import Navitems from "./Navitems"
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar flex justify-between items-center px-4 py-3 shadow-md bg-white relative">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" width={46} height={44} alt="logo" />
        </div>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        <Navitems />
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign in</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-4 w-48 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4 md:hidden">
          
          <SignedOut>
            <SignInButton>
              <button className="btn-signin w-full">Sign in</button>
            </SignInButton>
          </SignedOut>
<SignedIn>
  <div className="flex justify-center relative">
    <UserButton
      appearance={{
        elements: {
          avatarBox: "w-10 h-10 border-2 border-primary rounded-full shadow-md hover:scale-105 transition-transform",
          userButtonPopover: "!left-auto right-4 transform -translate-x-1/2" // center to avatar
        }
      }}
    />
  </div>
</SignedIn>


          <hr />

               <Navitems direction="col" />

        </div>
      )}
    </nav>
  );
};

export default Navbar;
