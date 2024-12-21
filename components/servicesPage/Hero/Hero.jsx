import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TbSteeringWheel } from "react-icons/tb";

const Hero = () => {
    return (
        <div data-aos="fade-up" className='min-h-[45vh] relative'>
            <div className='w-[80%] mx-auto mt-40 md:mt-32'>
                <div className='w-full flex flex-col items-center justify-center'>
                    {/* <p className='mt-0 mb-4 text-[#FDFFFF] text-xl'>Home / <span className='underline'>Services</span></p> */}
                    <p className='w-[70%] xl:w-full text-center mt-0 mb-4 text-[#FDFFFF] text-xl'>
                        Book an appointment to get 30% off today
                    </p>
                    <h1 className='text-[#FDFFFF] text-6xl md:text-8xl text-center w-full xl:w-[80%] 2xl:w-[70%] mx-auto font-semibold leading-tight flex lg:inline flex-col lg:flex-row flex-wrap lg:flex-nowrap items-center lg:items-start'>
                        Make your driving more <span className='px-6 bg-[#FDFFFF] text-[#222222] text-6xl md:text-7xl lg:text-7xl py-2 lg:py-0 w-fit'>exciting</span>
                    </h1>
                    {/* <p className='mt-4 text-[#FDFFFF] text-xl'>Home / <span className='underline'>About</span></p> */}
                </div>

                <div className='flex items-center justify-center lg:justify-between mt-16 flex-wrap lg:flex-nowrap gap-y-4'>
                    <p className='text-neutral-100 w-full lg:w-[50%] xl:w-[30%] text-center lg:text-start'>
                        Our services enhance your vehicle&apos;s performance and driving experience. From expert chiptuning to custom exhaust solutions, we offer tailored options to meet your needs.
                    </p>
                    <Link href={'/about-us'} className='flex items-center gap-x-3 rounded-full px-6 py-2 bg-[#FDFFFF] text-[#222222] font-semibold'>
                        Explore About Us

                        <div className='bg-[#0000]/5 rounded-full p-2'>
                            <TbSteeringWheel className="text-[#222222] text-3xl" />
                        </div>
                    </Link>
                </div>
            </div>


            {/* 
            <Image src={`/assets/images/gray-blob.png`} alt='Blog' width={800} height={800} className='w-[400px] h-[] object-cover absolute top-24 right-1/2 bottom-0 left-1/2 -translate-x-1/2 -z-10' /> */}
        </div>
    )
}

export default Hero