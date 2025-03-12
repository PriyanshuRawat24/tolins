"use client";

import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Banner1 = (
    {
        heading,
        title,
        breadcrumbs,
    }
) => {
    return (
        <>
            <section
                className="relative h-[400px] flex flex-col items-center justify-center text-white text-center"
                style={{
                    backgroundImage: "url('/banner1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-70"></div>
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="text-7xl font-bold mb-6">{heading}</h1>
                    <Breadcrumb className="text-white">
                        <BreadcrumbList className="flex justify-center items-center space-x-2">
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="text-white hover:text-white">
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-white" />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-white">{breadcrumbs}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <h1 className="text-5xl font-bold mt-2">{title}</h1>
                </div>
            </section>

        </>
    );
};

export default Banner1;
