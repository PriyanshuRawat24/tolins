"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";


const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/property", label: "Property" },
    { href: "/contact", label: "Contact" },
];

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>

 {/* Header with Email and Phone */}
 <div className="w-full py-2 bg-green-400 hidden sm:block">
        <section className="md:max-w-screen-xl max-w-screen-lg mx-auto lg:px-0 px-2">
          <nav className="md:flex hidden items-center justify-between">
            <div className="">
              <p className="text-md text-white ">
                Welcome to <span className="font-bold text-blue-600">Desire Div</span>
              </p>
            </div>
            <ul className="flex items-center justify-center text-lg font-semibold gap-6">
              <Link href="/" className="text-sm text-white hover:underline">
                <li>Support</li>
              </Link>
              <Link href="/" className="text-sm text-white hover:underline flex items-center">
                <IoMdArrowDropright />
                <li>Wish List</li>
              </Link>
              <Link href="/" className="text-sm text-white hover:underline flex items-center">
                <IoMdArrowDropright />
                <li>My Account</li>
              </Link>
            </ul>
          </nav>
        </section>
      </div>

      {/* Main Navigation */}
      <div className="sticky top-0 z-50">
        <nav className="bg-blue-300 shadow-md py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="flex items-center flex-shrink-0">
                  <Image
                    className="h-auto w-[150px]"
                    width={100}
                    height={100}
                    src="/logo.png"
                    alt="Company Logo"
                    priority
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-20 items-center">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-blue-500 font-bold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Search and Menu */}
              <div className="flex items-center space-x-4">
                {/* Search Bar */}
                <div className="flex items-center" >
                  <button
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className=" p-2 hover:bg-blue-500 rounded-full transition-colors duration-200 mr-6 hidden sm:block"
                    aria-label="Toggle search"
                  >
                    <IoSearchSharp size={25} className="text-white "/>
                  </button>
                  {isSearchOpen && (
                    <div className="absolute md:right-[200px] top-[100px] bg-white p-4 rounded-lg shadow-lg">
                      <input
                        type="text"
                        placeholder="Search..."
                        className=" border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                        autoFocus
                      />
                    </div>
                  )}
                  <div>
                  <Link href={"/"} className="hidden sm:block">
                    <button className="relative flex items-center px-3 py-3 overflow-hidden font-medium transition-all bg-blue-400 rounded-md group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        Add New Property
                      </span>
                    </button>
                  </Link>
                  </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 hover:bg-gray-100 rounded-full text-white transition-colors duration-200"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <IoCloseOutline size={25} /> : <IoMenuSharp size={25} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-4">
                <div className="flex flex-col space-y-4">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-white hover:text-gray-900 font-bold transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
        </>
    );
};

export default Header;