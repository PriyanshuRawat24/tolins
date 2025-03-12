import Image from 'next/image'
import React from 'react'

const Company = () => {
    return (
        <>
            <div className="bg-blue-600 py-24 flex justify-center">
                <div className="flex flex-wrap items-center justify-center gap-20 max-w-7xl w-full px-5">
                    {[1, 2, 3, 4, 5].map((_, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <Image
                                src="/logoi.png"
                                alt="Logo"
                                width={150}
                                height={50}
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Company
