"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LiaCheckCircle, LiaCheckCircleSolid } from "react-icons/lia";
import { LuBed } from "react-icons/lu";
import { FaShower, FaUser } from "react-icons/fa";
import { IoChatbubble, IoCopyOutline } from "react-icons/io5";
import { Banner } from "@/components/banner";
import Company from "@/components/company";
import Dream from "@/components/dream";
import { properties } from "../../data/data";
import ServiceData from "@/components/servicedata";


const articles = [
  {
    id: 1,
    title: "Save Thousands Selling Your Property",
    image: "/article1.jpg",
  },
  {
    id: 2,
    title: "Save Thousands Selling Your Property",
    image: "/article2.jpg",
  },
  {
    id: 3,
    title: "Save Thousands Selling Your Property",
    image: "/article3.jpg",
  },
];


const places = [
  { city: "Paris", count: 2, img: "/img1.jpg", flag: "/france.png" },
  { city: "Australia", count: 16, img: "/img2.jpg", flag: "/australia.png" },
  { city: "London", count: 8, img: "/img3.jpg", flag: "/united-kingdom.png" },
  { city: "New York", count: 9, img: "/img4.jpg", flag: "/united-states-of-america.png" },
  { city: "Los Angeles", count: 5, img: "/img5.jpg", flag: "/united-states-of-america.png" },
  { city: "Dubai", count: 3, img: "/img6.jpg", flag: "/united-arab-emirates.png" },
];

export default function Home() {

  const propertiesData = properties.slice(0, 3);
  return (
    <>

      {/* section-1 */}

      <Banner
        items={[
          {
            image: "/banner.jpg",
            heading: "Luxury Downtown",
            buttonText: "Learn More",
          },
          {
            image: "/banner.jpg",
            heading: "Premium Quality Items",
            buttonText: "Shop Now",
          },
        ]}
      />

      {/* section-2 */}

      <div className="max-w-5xl mx-auto px-4 py-10 lg:mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {places.map((property, index) => (
            <div key={index} className="relative bg-white shadow-md rounded overflow-hidden pl-4 flex items-center">
              <div className="w-full">
                <h3 className="text-lg font-semibold">{property.city}</h3>
                <p className="text-gray-500">{property.count} Properties</p>
              </div>
              <div className="relative">
                <Image
                  src={property.img}
                  alt={property.city}
                  width={200}
                  height={150}
                  className="object-cover w-[240px] h-[140px] aspect-square"
                />
                <Image
                  src={property.flag}
                  alt="flag"
                  width={40}
                  height={40}
                  className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] rounded-full border-2 border-white"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* section-3 */}

      <ServiceData/>

      {/* section-4 */}

      <section className="relative w-full h-auto lg:h-[220px] flex items-center justify-center text-center px-4 py-8 md:py-12">
        <div className="absolute inset-0 bg-[#62CEC5] z-0">
          <Image
            src="/section3.png"
            alt="Hero Background"
            width={800}
            height={300}
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center md:justify-between text-white gap-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left max-w-screen">
            We Help People and Homes Find Each Other
          </h1>

          <Link href={"/"}>
            <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-blue-400 rounded-md group">
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
            </button>
          </Link>
        </div>
      </section>


      {/* section-5 */}

      <section
        className="relative bg-gray-900 text-white py-12 px-4 md:px-10 lg:h-[662px]"
        style={{
          backgroundImage: "url('/featurebg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",

        }}
      >
        {/* Overlay for Opacity */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">

          {/* Left Side: Property Image */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/feature.jpg"
              alt="Featured Property"
              width={500}
              height={700}
              className="w-[700px] h-[500px] shadow-lg"
            />
          </div>

          {/* Right Side: Property Details */}
          <div className="mt-4">
            <p className="text-[#62CEC5] text-md font-semibold">Checkout New</p>
            <h2 className="text-5xl font-bold mt-2">Featured Properties</h2>
            <p className="text-gray-300 mt-10">
              Lorem ipsum dolor sit amet nsectetur cing elituspe <br /> ndisse suscipit sagittis leo sit.
            </p>

            {/* Features List */}
            <ul className="mt-10 space-y-4 ">
              <li className="flex items-center">
                <LiaCheckCircleSolid size={30} className="text-[#62CEC5]" />
                <span className="ml-2">Nsectetur cing elit.</span>
              </li>
              <li className="flex items-center">
                <LiaCheckCircleSolid size={30} className="text-[#62CEC5]" />
                <span className="ml-2">Suspe ndisse suscipit sagittis leo.</span>
              </li>
              <li className="flex items-center">
                <LiaCheckCircleSolid size={30} className="text-[#62CEC5]" />
                <span className="ml-2">Entum estibulum dignissim posuere.</span>
              </li>
            </ul>

            {/* Property Info */}
            <div className="mt-6 flex items-center space-x-6 text-gray-300">
              <span className="flex items-center"><LuBed className="mr-2 text-[#62CEC5]" />4</span>
              <span className="flex items-center"><FaShower className="mr-2 text-[#62CEC5]" />2</span>
              <span className="flex items-center"><IoCopyOutline className="mr-2 text-[#62CEC5]" />500 sqft</span>
            </div>

            {/* Price Card */}
            <div className="mt-6 bg-blue-600 text-white py-16 px-10 rounded-md shadow-lg">
              <p className="text-4xl font-bold">87.50000 <span className="text-lg">Sqft</span></p>
              <p className="text-sm mt-1">88 Brooklyn Street, New York, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* section-6 */}

      <section className="relative w-full  overflow-hidden bg-gray-50">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/service.jpg"
            alt="Modern living room with large windows and stylish furniture"
            width={900}
            height={900}
            className="object-cover h-[100%]"
            priority
          />
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full border-8 border-gray-200"></div>
          <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full border-8 border-gray-200"></div>
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full border-8 border-gray-200"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-center">
            {/* Left content */}
            <div className="mb-10 max-w-xl lg:mb-0 lg:pr-8 mt-10">
              <h3 className="mb-4 text-xl font-medium text-teal-400">We Provide Full Services</h3>
              <h1 className="mb-8 text-4xl font-bold leading-tight text-slate-800 md:text-5xl lg:text-6xl">
                Helping <br />
                People to <br />
                Find the <br />
                Home
              </h1>

              {/* Feature points */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <LiaCheckCircle className="h-10 w-10 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-lg text-slate-700">
                      Solution for small and large businesses voluptatem accusantium doloremque laudantium
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <LiaCheckCircle className="h-10 w-10 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-lg text-slate-700">
                      Solution for small and large businesses voluptatem accusantium doloremque
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <LiaCheckCircle className="h-10 w-10 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-lg text-slate-700">
                      Solution for small and large businesses voluptatem accusantium doloremque
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="relative h-[400px] w-full max-w-xl overflow-hidden lg:h-[500px] order-first lg:order-last">
              <Image
                src="/service.jpg"
                alt="Modern living room with large windows and stylish furniture"
                width={500}
                height={500}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center mt-10 lg:mr-[60rem]">
            <Link href={"/"}>
              <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-blue-400 rounded-md group">
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
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* section-7 */}

      <Dream/>
    
      {/* section-8 */}

      <section className=" mt-16 py-12 px-4">
        <div className="text-center mb-10">
          <p className="text-teal-500 text-sm">Our Blog Posts</p>
          <h2 className="text-3xl font-bold">News & Articles</h2>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white shadow-lg overflow-hidden"
            >
              <div className="relative h-[300px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="hover:brightness-[0.5] z-10 transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-semibold hover:text-blue-500 ">{article.title}</h3>
                <div className="flex items-center  text-sm text-gray-500 mt-4">
                  <span className=" flex items-center">
                    <FaUser className="mr-2 text-teal-500" />
                    Admin</span>
                  <span className="ml-3 flex items-center">
                    <IoChatbubble className="mr-2 flex items-center text-teal-500" />
                    Comment (0)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* section-9 */}

      <Company/>
    </>
  );
}
