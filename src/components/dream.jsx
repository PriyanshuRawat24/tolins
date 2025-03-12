"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion';

const Dream = () => {
  return (
    <>
      <div className="relative h-[400px] flex items-center justify-center text-center px-4 bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/dreambg.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Are You Ready to Buy <br /> Dream House?
          </h1>
          <div className="absolute left-[500px] top-[100px] ">
            <Image
              src="/arrow1.png"
              alt="Background"
              width={60}
              height={100}
              objectFit="cover"
              className="opacity-100 animate-bounce"
            />
          </div>
          <motion.div
            className="mt-6 flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={"/"}>
              <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-blue-400 rounded-md group mt-[40px]">
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Discover Property
                </span>
                <FaArrowRight size={20} className="ml-2" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Dream
