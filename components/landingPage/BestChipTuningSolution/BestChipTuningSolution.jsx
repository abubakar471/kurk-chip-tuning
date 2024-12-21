'use client'

import Image from 'next/image'
import React from 'react'
import { PeopleCombined } from './PeopleCombined'
import Link from 'next/link'
import { Check } from 'lucide-react'

const BestChipTuningSolution = () => {
    return (
        <div className='mt-24 mb-10' data-aos="zoom-out-right">
            <div className='w-[80%] mx-auto flex flex-wrap lg:flex-nowrap gap-x-4 gap-y-10'>
                <div className='w-full lg:w-1/2'>
                    <h3 className='text-4xl lg:text-5xl w-[90%] lg:w-[80%] text-[#FDFFFF] leading-normal]'>The Best Workshop Solution For Your Car</h3>

                    <div className='w-full lg:w-[85%]  relative'>
                        <Image src={`/assets/images/solution-section.jpg`} width={800} height={800} alt='Best Solution' className='object-cover rounded-3xl mt-10' />

                        <div className='absolute top-0 left-0 right-0 bottom-0 bg-neutral-700/30 rounded-3xl min-w-max'></div>
                    </div>
                </div>

                <div className='w-full lg:w-1/2'>
                    {/* <div className='flex items-center gap-x-16 gap-y-6 pb-10 mb-14 border-b-2 border-neutral-600/40 '>
                        <PeopleCombined />
                        <div className='flex flex-col gap-y-4'>
                            <h4 className='text-[#FDFFFF] text-5xl'>300k+</h4>
                            <p className='text-[#FDFFFF]'>Trusted By People</p>
                        </div>
                    </div> */}

                    <div className='flex flex-col gap-y-4'>
                        <div>
                            <h4 className='text-[#FDFFFF] font-semibold text-2xl'>Our Services Includes</h4>

                            <div className='flex flex-col gap-y-4 mt-10'>
                                <div className='flex items-center gap-x-2 '>
                                    <Check className='text-[#FDFFFF]' />

                                    <p className='text-neutral-200'>
                                        <span className='font-semibold'>ECU Chiptuning:</span> Boost Your Engine&apos;s Potential with Precision Remapping
                                    </p>
                                </div>
                                <div className='flex items-center gap-x-2 '>
                                    <Check className='text-[#FDFFFF]' />

                                    <p className='text-neutral-200'>
                                        <span className='font-semibold'>TCU Chiptuning:</span> Optimized Transmission for Smoother Shifts and Better Control
                                    </p>
                                </div>
                                <div className='flex items-center gap-x-2 '>
                                    <Check className='text-[#FDFFFF]' />

                                    <p className='text-neutral-200'>
                                        <span className='font-semibold'>Custom Exhaust Systems:</span> Designed for Performance, Built to Impress
                                    </p>
                                </div>
                                <div className='flex items-center gap-x-2 '>
                                    <Check className='text-[#FDFFFF]' />

                                    <p className='text-neutral-200'>
                                        <span className='font-semibold'>OPF/Catalytic Converter Removal:</span> Enhanced Power with Streamlined Exhaust Flow
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className='text-[#FDFFFF] mt-10'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <div className='mt-10'>
                        <Link href={"#"} className='bg-neutral-100 px-8 py-4 rounded-full'>Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestChipTuningSolution