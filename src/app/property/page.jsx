"use client"

import Banner1 from '@/components/banner1'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Ruler } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { FaBath, FaBed } from 'react-icons/fa';
import Autoplay from "embla-carousel-autoplay"
import { properties } from '../../../data/data';
import { useRouter } from 'next/navigation';


const Page = () => {
    const router = useRouter()
    return (
        <>

            <Banner1 breadcrumbs={"Property"} heading={"Listings"} />

            <div className="max-w-7xl mx-auto py-20 px-4 md:px-20 lg:mb-2">
                {/* Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((property, index) => (
                        <div onClick={()=> router.push("/property_details")} key={index} className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer">

                            {/* Image Carousel inside Card */}
                            <Carousel
                                className="relative"
                                plugins={[
                                    Autoplay({
                                        delay: property.time,
                                    }),
                                ]}
                            >
                                <CarouselContent>
                                    {property.images.map((img, i) => (
                                        <CarouselItem key={i}>
                                            <Image
                                                src={img}
                                                alt={property.title}
                                                width={500}
                                                height={300}
                                                className="w-full h-64 object-cover"
                                            />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/60 p-1 rounded-full shadow-md" />
                                <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/60 p-1 rounded-full shadow-md" />
                            </Carousel>

                            {/* Property Details */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{property.title}</h3>
                                <p className="text-gray-500 text-sm mt-4">{property.address}</p>
                                <p className="text-blue-600 font-bold text-xl mt-4">
                                    {property.price} <span className="text-gray-400 text-sm">Sqft</span>
                                </p>
                            </div>

                            {/* Property Features */}
                            <div className="flex justify-evenly items-center p-4 border-t border-gray-200 text-gray-600 mt-4">
                                <div className="flex items-center gap-1">
                                    <FaBed size={20} className="text-teal-500" /> <span>{property.bedrooms}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <FaBath size={20} className="text-teal-500" /> <span>{property.bathrooms}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Ruler size={20} className="text-teal-500" /> <span>{property.area}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Page
