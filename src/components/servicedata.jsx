"use client"

import React from 'react'
import { FaBath, FaBed, FaRuler } from 'react-icons/fa'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import { properties } from '../../data/data'
import { useRouter } from 'next/navigation'



const ServiceData = () => {
    const router = useRouter()
  return (
    <>
    
    <div className="max-w-7xl mx-auto py-20 px-4 md:px-20  lg:mb-20">
        <h3 className="text-lg text-green-300 font-semibold">Browse Hot Offers</h3>
        <h2 className="text-3xl font-bold text-gray-900 mb-20">Latest Properties</h2>
        <Carousel className="w-full">
          <CarouselContent className="-ml-2">
            {properties.map((property, index) => (
              <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3">
                <div
                onClick={()=> router.push("/property_details")}
                className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer">

                  {/* Inside Card Carousel */}
                  <Carousel className="relative"
                    plugins={[
                      Autoplay({
                        delay: property.time,
                      }),
                    ]}>
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
                    <p className="text-blue-600 font-bold text-xl mt-4">{property.price} <span className="text-gray-400 text-sm">Sqft</span></p>
                  </div>


                  {/* Property Features (Icons) */}
                  <div className="flex justify-evenly items-center p-4 border-t border-gray-200 text-gray-600 mt-4">
                    <div className="flex items-center gap-1">
                      <FaBed size={20} className="text-teal-500" /> <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaBath size={20} className="text-teal-500" /> <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaRuler size={20} className="text-teal-500" /> <span>{property.area}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm-block" />
          <CarouselNext className="hidden sm-block" />
        </Carousel>
      </div>



    </>
  )
}

export default ServiceData
