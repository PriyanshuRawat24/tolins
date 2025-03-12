"use client"

import Banner1 from '@/components/banner1'
import Company from '@/components/company'
import Dream from '@/components/dream'
import Image from 'next/image'
import React from 'react'
import { LiaCheckCircle } from 'react-icons/lia'

const testimonials = [
  {
    text: "I was very impresed by the tolins service lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia.",
    name: "Kevin Martin",
    role: "Customer",
    image: "/texti.jpg",
  },
  {
    text: "I was very impresed by the tolins service lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia.",
    name: "Sarah Albert",
    role: "Customer",
    image: "/texti2.jpg",
  },
  {
    text: "I was very impresed by the tolins service lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia.",
    name: "Mike Hardson",
    role: "Customer",
    image: "/texti3.jpg",
  },
]

const Page = () => {
  return (
    <>

    <Banner1 breadcrumbs={"About"} heading={"About"}/>

      {/* section-1 */}

      <section className="max-w-7xl mx-auto relative flex flex-col md:flex-row items-center justify-center bg-white py-12 px-6 md:px-20">
        <div className="absolute left-0 top-[350px] left-[60px] -translate-y-1/2 w-[100px] h-[550px] bg-blue-500 z-1 hidden sm:block">
        </div>
        {/* Image Section */}
        <div className="relative md:w-1/2">
          <Image
            src="/about1.jpg"
            alt="Modern house"
            width={500}
            height={500}
            className="w-[500px] h-[600px] z-50"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 -mt-10">
          <h4 className="text-green-500 font-semibold">Find Your Properties</h4>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            Leader in the Market
          </h1>
          <p className="text-blue-400 font-medium text-2xl mt-10">
            Lorem ipsum dolor sit amet, con adipiscing elit tiam convallis elit id impedie.
          </p>
          <p className="text-gray-500 text-lg mt-10">
            Quisq commodo simply free ornar tortor. Excepteur sint occaecat sunt in culpa qui officia deserunt mollit anim id est laborum. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.
          </p>

          {/* Bullet Points Icon */}
          <ul className="mt-10 space-y-3 text-gray-600 ">
            <li className="flex items-center">
              <LiaCheckCircle className="h-10 w-10 text-teal-400" />
              Invest in your simply neighborhood
            </li>
            <li className="flex items-center">
              <LiaCheckCircle className="h-10 w-10 text-teal-400" />
              Support people in free text extreme need
            </li>
            <li className="flex items-center">
              <LiaCheckCircle className="h-10 w-10 text-teal-400" />
              Largest global industrial business community
            </li>
          </ul>
        </div>
      </section>

      {/* section-2 */}
      <Dream />

      {/* section-3 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Headers */}
          <div className="text-center mb-12 md:mb-20">
            <h3 className="text-teal-400 text-lg md:text-xl mb-4">Customers Feedbacks</h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800">What They are Saying</h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm relative group hover:shadow-md transition-shadow"
              >
                {/* Testimonial Text */}
                <p className="text-gray-600 mb-8 leading-relaxed">{testimonial.text}</p>

                {/* Customer Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Quote Mark */}
                  <div className="text-blue-500 text-6xl font-serif leading-none">{`"`}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* section-4 */}

      <Company />

    </>
  )
}

export default Page
