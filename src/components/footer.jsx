"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowUp, FaFacebook, FaInstagram, FaPhone, FaPinterest, FaTwitter } from 'react-icons/fa'


const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <>
            <footer className="bg-slate-800 text-white">
                <div className="mx-auto px-4 py-12 max-w-6xl">
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
                        <div className="space-y-6">
                            <Link href="/" className="inline-flex items-center">
                                <div className="flex items-center">
                                    <Image
                                        src="/logo.png"
                                        alt="Logo"
                                        width={150}
                                        height={50}
                                        className="opacity-70 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </Link>

                            <p className="text-gray-300">
                                Lorem ipsum dolor sit ame consect etur pisicing elit sed do eiusmod tempor incididunt ut labore.
                            </p>

                            <div className="bg-slate-900 p-4 rounded-md inline-flex items-center space-x-3">
                                <FaPhone className="h-8 w-8 text-teal-400" />
                                <div>
                                    <p className="text-sm">Call Agent</p>
                                    <p className="text-lg font-semibold">92 888 000 2222</p>
                                </div>
                            </div>
                        </div>

                        {/* Explore Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-6">Explore</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/about" className="text-gray-300 hover:text-teal-400 transition-colors">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/account" className="text-gray-300 hover:text-teal-400 transition-colors">
                                        My Account
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/add-property" className="text-gray-300 hover:text-teal-400 transition-colors">
                                        Add Properties
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pricing" className="text-gray-300 hover:text-teal-400 transition-colors">
                                        Pricing Packages
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/bookmarks" className="text-gray-300 hover:text-teal-400 transition-colors">
                                        Bookmarks
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Second Column Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-6">&nbsp;</h3>
                            <ul className="space-y-4 mt-6">
                                <li>
                                    <Link href="/agents" className="text-gray-300 hover:text-teal-400 transition-colors">
                                        Our Agents
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-gray-300 hover:text-teal-400 transition-colors">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faqs" className="text-gray-300 hover:text-teal-400 transition-colors">
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="text-gray-300 hover:text-teal-400 transition-colors">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="max-w-md">
                            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
                            <div className="space-y-4">
                                <div className="flex flex-col sm:items-start gap-3">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="px-4 py-3 rounded-md text-slate-800 flex-1 w-full sm:w-[80%] "
                                    />
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors w-full sm:w-[80%]">
                                        Subscribe
                                    </button>
                                </div>

                                <div className="space-y-2 text-gray-300 text-center sm:text-left">
                                    <p>88 Broklyn Golden Street, New York. USA</p>
                                    <p>
                                        <Link href="mailto:needhelp@tolins.com" className="hover:text-teal-400 transition-colors">
                                            needhelp@tolins.com
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-700 bg-white ">
                    <div className="max-w-6xl mx-auto px-4 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-black mb-4 md:mb-0">© Copyright 2023 by Themesflat.com</p>

                            <div className="flex space-x-4">
                                <Link
                                    href="https://twitter.com"
                                    className="bg-black p-2 rounded-full hover:bg-teal-400 transition-colors"
                                >
                                    <FaTwitter className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="https://facebook.com"
                                    className="bg-black p-2 rounded-full hover:bg-teal-400 transition-colors"
                                >
                                    <FaFacebook className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="https://pinterest.com"
                                    className="bg-black p-2 rounded-full hover:bg-teal-400 transition-colors"
                                >
                                    <FaPinterest className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="https://instagram.com"
                                    className="bg-black p-2 rounded-full hover:bg-teal-400 transition-colors"
                                >
                                    <FaInstagram className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* top button */}
                <button
                    onClick={handleScrollToTop}
                    className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp className="h-6 w-6" />
                </button>
            </footer>
        </>
    )
}

export default Footer
