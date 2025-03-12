import Banner1 from '@/components/banner1';
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';

const locations = [
    { name: "Austin", address: "22 Texas West Hills", email: "needhelp@tolins.com", phone: "888 999 0000", link: "/austin" },
    { name: "Boston", address: "5 Federal Street Boston", email: "needhelp@tolins.com", phone: "888 999 0000", link: "/boston" },
    { name: "New York", address: "8th Brooklyn New York", email: "needhelp@tolins.com", phone: "888 999 0000", link: "/newyork" },
    { name: "Baltimore", address: "3 Lombabr 50 Baltimore", email: "needhelp@tolins.com", phone: "888 999 0000", link: "/baltimore" },
];

const Page = () => {

    return (
        <>

        <Banner1 breadcrumbs={"Contact"} heading={"Contact"}/>

            {/* section-1 */}

            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {locations.map((loc, index) => (
                        <Link key={index} href={loc.link} passHref>
                            <div className="cursor-pointer bg-white rounded-lg p-6 text-center ">
                                <h3 className="text-xl font-semibold">{loc.name}</h3>
                                <p className="text-gray-600 mt-2">{loc.address}</p>
                                <p className="text-gray-600">{loc.email}</p>
                                <p className="text-gray-600">{loc.phone}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* section-2 */}
            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Section */}
                <div className=''>
                    <h4 className="text-teal-400 font-semibold">Contact Us</h4>
                    <h2 className="text-4xl font-bold text-gray-900 mt-2">Love to Hear From You</h2>
                    <p className="text-gray-600 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor ut labore.
                        Sit amet scelerisque. Phasellus hendrerit neque a augue.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6">
                        <Link href="https://twitter.com" target="_blank">
                            <FaTwitter className="text-gray-600 hover:text-teal-400 text-xl cursor-pointer" />
                        </Link>
                        <Link href="https://facebook.com" target="_blank">
                            <FaFacebookF className="text-gray-600 hover:text-teal-400 text-xl cursor-pointer" />
                        </Link>
                        <Link href="https://pinterest.com" target="_blank">
                            <FaPinterest className="text-gray-600 hover:text-teal-400 text-xl cursor-pointer" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank">
                            <FaInstagram className="text-gray-600 hover:text-teal-400 text-xl cursor-pointer" />
                        </Link>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" action="/api/contact" method="POST">
                    <input type="text" name="name" placeholder="Your name" required className="bg-gray-100 p-3 rounded-md outline-none" />
                    <input type="email" name="email" placeholder="Email address" required className="bg-gray-100 p-3 rounded-md outline-none" />
                    <input type="text" name="phone" placeholder="Phone Number" required className="bg-gray-100 p-3 rounded-md outline-none" />
                    <input type="text" name="subject" placeholder="Subject" required className="bg-gray-100 p-3 rounded-md outline-none" />
                    <textarea name="message" placeholder="Write comment" rows={5} required className="bg-gray-100 p-3 rounded-md outline-none md:col-span-2"></textarea>
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
                                Submit Comment
                            </span>
                        </button>
                    </Link>
                </form>
            </div>

            {/* section-3 */}

            <section className="w-full h-[300px] md:h-[470px]">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086165!2d144.95592831531685!3d-37.81720997975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577cc4c0f9b19d1!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1633079622227!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>





        </>
    )
}

export default Page
