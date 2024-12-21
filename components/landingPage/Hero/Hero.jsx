'use client'

import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div>
            <div id="landing-hero" className="w-[80%] mx-auto flex items-center flex-wrap xl:flex-nowrap">``
                <div data-aos="fade-up" className="w-full xl:w-1/2 2xl:w-6/12 pt-20">
                    <div>
                        <p className="text-neutral-400 pb-2 border-b border-neutral-600 w-fit">Best Car Workshop</p>
                    </div>

                    <div className="pt-6 pb-10">
                        <p className="text-neutral-400 text-xl">
                            You Can <span className="text-[#42A5D1] font-semibold">Trust</span> Your Car To Us
                        </p>
                    </div>


                    <h1 className="text-7xl md:text-8xl xl:text-8xl text-[#FFFFFF] font-bold">Chip Tuning</h1>

                    <p className="text-neutral-300 pt-4 w-[90%] md:w-[80%] lg:w-[70%]">
                        The list of our features  is very large and is updated daily. It is difficult to imagine a modern car without additional equipment.
                    </p>

                    <div className="flex flex-wrap md:flex-nowrap w-full md:w-[80%] gap-x-4 gap-y-4 mt-10">
                        <div className="flex gap-x-2">
                            <div className="bg-neutral-300 h-10 w-2" />
                            <div className="flex flex-col items-start justify-start w-fit">
                                <h3 className="text-neutral-300 text-4xl">$5000</h3>
                                <p className="text-start text-neutral-400 w-full md:w-[80%]">
                                    Minimum allowable deposits for tuning
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-x-2">
                            <div className="bg-neutral-300 h-10 w-2" />
                            <div className="flex flex-col items-start justify-start w-fit">
                                <h3 className="text-neutral-300 text-4xl">24/7</h3>
                                <p className="text-start text-neutral-400 w-full md:w-[80%]">
                                    Workshop working hours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" className="w-full xl:w-1/2 2xl:w-6/12 right-20 top-20 pt-20">
                    <Image src={`/assets/images/hero5.png`} width={1200} height={1200} alt="Hero" priority className="w-full object-contain" />
                </div>
            </div>

            <div className='w-[80%] mx-auto'>
                <div data-aos="zoom-in-up"  data-aos-anchor="#landing-hero" className="grid grid-cols-1 lg:grid-cols-4 w-full mx-auto mt-20">
                    <div className="bg-[#FDFFFF] flex flex-col items-center pt-4 pb-8 px-6">
                        <div className="w-full flex justify-end">
                            <MoveRight className="text-neutral-600" size={40} />
                        </div>
                        <Image src={'/assets/images/ecu-chip-tuning.png'} alt="Tire" width={400} height={400} className="w-[70%] grayscale" />
                        <p className="text-xl xl:text-xl text-neutral-600 font-semibold pt-6 text-center">ECU Tuning</p>
                    </div>

                    <div className="bg-[#5D5D5D] flex flex-col items-center pt-4 pb-8 px-6">
                        <div className="w-full flex justify-end">
                            <MoveRight className="text-[#FDFFFF]" size={40} />
                        </div>
                        <Image src={'/assets/images/tcu-chip-tuning.png'} alt="Engine" width={400} height={400} className="w-[45%] grayscale" />
                        <p className="text-xl xl:text-xl text-[#FDFFFF] font-semibold pt-6 text-center">TCU Tuning</p>
                    </div>

                    <div className="bg-[#FDFFFF] flex flex-col items-center pt-4 pb-8 px-6">
                        <div className="w-full flex justify-end">
                            <MoveRight className="text-neutral-600" size={40} />
                        </div>
                        <Image src={'/assets/images/catalatic-coverter.png'} alt="Tire" width={400} height={400} className="w-[45%]" />
                        <p className="text-xl xl:text-xl text-neutral-600 font-semibold pt-0 text-center">OPF/CATALATIC removals</p>
                    </div>

                    <div className="bg-[#5D5D5D] flex flex-col items-center pt-4 pb-8 px-6">
                        <div className="w-full flex justify-end">
                            <MoveRight className="text-[#FDFFFF]" size={40} />
                        </div>
                        <Image src={'/assets/images/exhaust-system.png'} alt="Exhause System" width={400} height={400} className="w-[60%] grayscale" />
                        <p className="text-xl xl:text-xl text-[#FDFFFF] font-semibold pt-5 text-center">Custom Exhaust System</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero