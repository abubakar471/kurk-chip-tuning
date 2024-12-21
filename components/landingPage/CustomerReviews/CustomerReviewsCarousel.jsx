"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Quote, Star } from "lucide-react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import React from 'react'

const CustomerReviewsCarousel = () => {
    const reviews = [
        {
            id: 1,
            customer_name: "Joey Tribbiani",
            customer_img: "/assets/images/joey.jpg",
            review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ipsam nobis error aut exercitationem impedit aliquam, ullam, praesentium optio facilis delectus iusto suscipit.",
        },
        {
            id: 2,
            customer_name: "Chandler Bing",
            customer_img: "/assets/images/chandler.jpg",
            review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ipsam nobis error aut exercitationem impedit aliquam, ullam, praesentium optio facilis delectus iusto suscipit.",
        },
        {
            id: 3,
            customer_name: "Ross Galler",
            customer_img: "/assets/images/ross.jpg",
            review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ipsam nobis error aut exercitationem impedit aliquam, ullam, praesentium optio facilis delectus iusto suscipit.",
        }
    ]

    return (
        <div className="w-full mx-auto">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                className="w-full mx-auto">
                <CarouselContent className="">
                    {
                        reviews?.map((item, i) => (
                            <CarouselItem key={i}>
                                <div className="rounded-3xl bg-[#FDFFFF] px-8 py-8 flex flex-col justify-center min-h-[200px] gap-y-4 w-full lg:w-[90%] mx-auto">
                                    <div className="flex items-center gap-x-2 justify-end">
                                        <div className="bg-[#222222]/10 rounded-xl p-2">
                                            <Star size={20} className="text-[#252525]" />
                                        </div>

                                       <p className="text-neutral-500">Trustpilot</p>
                                    </div>
                                    <div className="pt-4 lg:pt-8">
                                        <p className="text-neutral-600 text-sm lg:text-md">{item?.review}</p>
                                    </div>

                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-x-2">
                                            <div className="rounded-full bg-[#222222]/20 p-2">
                                                <Image src={`${item?.customer_img}`} width={120} height={120} alt={`${item?.customer_name}`} className="w-[60px] h-[60px] rounded-full object-cover" />
                                            </div>
                                            <div className="flex flex-col gap-y-1">
                                                <p className="text-neutral-500 font-semibold">{item?.customer_name}</p>
                                                <p className="text-neutral-500 text-sm">Client</p>
                                            </div>
                                        </div>

                                        <Quote className="text-neutral-500 mr-4" size={30} />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CustomerReviewsCarousel