import Image from 'next/image'
import React from 'react'
import { FaClock } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdMail } from 'react-icons/md'

const ContactAddress = () => {
    return (
        <div data-aos="zoom-out-up" className='mb-20 py-20'>
            <div className='w-[80%] lg:w-[80%] xl:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-6'>
                <div className='relative col-span-1 lg:col-span-2 2xl:col-span-1'>
                    <Image src={`/assets/images/contact-address-1.jpg`} alt='Contact' width={800} height={800} className='rounded-3xl h-[350px] object-cover' />
                    <div className='w-full h-fit absolute top-0 left-0 right-0 bottom-0 blur-md bg-neutral-500/20 z-50'></div>
                </div>

                <div className='relative col-span-1 lg:col-span-2'>
                    <Image src={`/assets/images/contact-address-2.jpg`} alt='Contact' width={800} height={800} className='rounded-3xl col-span-2 h-[350px] object-cover' />
                    <div className='w-full h-fit absolute top-0 left-0 right-0 bottom-0 blur-md bg-neutral-500/20 z-50'></div>
                </div>

                <div className='flex flex-col gap-y-4 col-span-1 lg:col-span-4 xl:col-span-3 2xl:col-span-1'>
                    <div className='bg-gradient-to-r from-[#FAFCFC]/10 -from-0% to-40% to-[#222222] border-2 border-neutral-600/50 p-4 rounded-xl flex items-center gap-x-4'>
                        <div className='bg-[#FAFCFC] rounded-xl p-2'>
                            <FaClock className='text-[#222222] text-4xl' />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <h3 className='text-[#FDFFFF] text-xl'>Working Hours</h3>
                            <p className='text-[#FDFFFF]'>
                                7 AM-5 PM, Mon-Sat
                            </p>
                        </div>
                    </div>

                    <div className='bg-gradient-to-r from-[#FAFCFC]/10 -from-0% to-40% to-[#222222] border-2 border-neutral-600/50 p-4 rounded-xl flex items-center gap-x-4'>
                        <div className='bg-[#FAFCFC] rounded-xl p-2'>
                            <MdMail className='text-[#222222] text-4xl' />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <h3 className='text-[#FDFFFF] text-xl'>Email Address</h3>
                            <p className='text-[#FDFFFF]'>
                                ktuning@quivox.com
                            </p>
                        </div>
                    </div>

                    <div className='bg-gradient-to-r from-[#FAFCFC]/10 -from-0% to-40% to-[#222222] border-2 border-neutral-600/50 p-4 rounded-xl flex items-center gap-x-4'>
                        <div className='bg-[#FAFCFC] rounded-xl p-2'>
                            <FaLocationDot className='text-[#222222] text-4xl' />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <h3 className='text-[#FDFFFF] text-xl'>Our Location</h3>
                            <p className='text-[#FDFFFF]'>
                                Roosendaal, Netherlands
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactAddress