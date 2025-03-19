"use client"

import ServiceData from '@/components/servicedata';
import Image from 'next/image'
import React from 'react'
import { FaBed, FaBath, FaRuler, FaPlay } from "react-icons/fa";
import { LiaCheckCircle } from 'react-icons/lia';

const images = [
    "/designhouse1.jpg",
    "/designhouse3.jpg",
    "/interior1.jpg",
    "/designhouse2.jpg",
];

const Page = () => {
    return (
        <>

            {/* section-1 */}

            <div className="px-4 mx-auto flex overflow-x-auto gap-4 p-4">
                {images.map((src, index) => (
                    <div key={index} className="min-w-[250px] md:min-w-[300px]">
                        <Image
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            width={400}
                            height={500}
                            className="w-[700px] h-[500px] rounded-lg shadow-md object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* section-2 */}

            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className='flex flex-col md:flex-row justify-between'>
                    {/* Title & Price */}
                    <div>
                        <h1 className="text-5xl font-semibold">Interior Apartment</h1>
                        <p className="text-gray-600 mt-8">80 Brooklyn Street, New York, USA</p>
                        <p className="text-blue-600 text-4xl font-bold mt-2 mb-4">$86.7600 <span className="text-gray-500 text-sm">/ sqft</span></p>
                    </div>
                    {/* Property Info */}
                    <div className="items-center text-gray-600 mt-10">
                        <div className='flex gap-4'>
                            <div className="flex items-center gap-2"><FaBed /> 4</div>
                            <div className="flex items-center gap-2"><FaBath /> 2</div>
                            <div className="flex items-center gap-2"><FaRuler /> 500 sqft</div>
                        </div>
                        <p className='mt-6 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada neque sed pellentesque ullamcorper.</p>
                    </div>
                </div>
                {/* Description */}
                <h2 className="text-3xl font-semibold mb-4">Description List</h2>
                <p className="text-gray-700 mt-2 text-lg">
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.  Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
                    <br />
                    <br />
                    Nullam quis ante tiam sit amet orci eget eros faucibus tincidunt. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut imperdiet venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                </p>

                {/* Features List */}
                <h2 className="text-3xl font-semibold mt-6 mb-4">Features List</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2 text-gray-700">
                    {[
                        "Floor Heating",
                        "2 Floor",
                        "Furnished",
                        "2017 Build",
                        "Free Parking",
                        "Glass Window",
                        "Marble Flooring",
                        "Basement"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <LiaCheckCircle size={20} className="text-teal-500" />
                            {feature}
                        </div>
                    ))}
                </div>
            </div>

            {/* section-3 */}

            <div className="max-w-6xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold">Property video</h2>
                <div className="relative mt-4">
                    <Image
                        src="/vediobg.jpg"
                        width={100}
                        height={100}
                        alt="Property Video"
                        className="w-full h-[400px] rounded-lg shadow-md"
                    />

                    {/* Play Button */}
                    <button className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white rounded-full p-4 shadow-lg">
                            <FaPlay className="text-green-500 text-2xl" />
                        </div>
                    </button>
                </div>
            </div>

            {/* section-4 */}

            <ServiceData/>

            




        </>
    )
}

export default Page
