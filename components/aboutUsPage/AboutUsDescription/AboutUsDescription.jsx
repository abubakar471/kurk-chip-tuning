import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutUsDescription = () => {
    return (
        <div data-aos="zoom-out-up" className='mb-20'>
            <div className='w-[80%] mx-auto'>
                <h2 className='text-[#FDFFFF] text-2xl'>About Us</h2>
                {/* <p className='text-4xl lg:text-6xl text-[#FDFFFF] w-full lg:w-[70%] mt-4 font-semibold'>
                    Dedicated to Unlocking the Full Potential of <span className='text-[#3AADD8]'>Your Vehicle&apos;s Performance.</span>
                </p> */}

                <div className='flex flex-wrap-reverse lg:flex-nowrap mt-10 gap-10'>
                    <div className='w-full lg:w-1/2'>
                        <p className='w-full lg:w-[80%] text-[#FDFFFF] text-2xl'>
                            We specialize in optimizing vehicles to deliver enhanced power, improved efficiency, and a smoother driving experience.
                        </p>

                        <div className='flex flex-wrap lg:flex-nowrap items-center justify-center mt-10 gap-4'>
                            <div className='flex-wrap lg:w-1/2'>
                                <Image src={`/assets/images/about-us-1.jpg`} alt='Car' width={800} height={800} className=' rounded-2xl' />
                            </div>

                            <div className='flex-wrap lg:w-1/2 flex flex-col gap-y-4'>
                                <Image src={`/assets/images/about-us-3.jpg`} alt='Car' width={800} height={800} className='h-[300px] object-cover rounded-2xl' />
                                <Image src={`/assets/images/about-us-2.jpg`} alt='Car' width={800} height={800} className='h-[300px] object-cover rounded-2xl' />
                            </div>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2'>
                        <div className='w-full lg:w-[80%] flex flex-col gap-y-8'>
                            <p className='text-neutral-400'>
                                At the heart of our business is a dedication to precision. We customize each tune to ensure your vehicle performs at its best while maintaining reliability and safety.
                            </p>

                            <p className='text-neutral-400'>
                                Using state-of-the-art tools and software, we bring out the best in every engine. Our solutions are tailored to meet your specific needs, ensuring unmatched driving satisfaction.
                            </p>

                            <p className='text-neutral-400'>
                                Your satisfaction is our top priority. From consultation to completion, we ensure transparency, quality, and a seamless experience to exceed your expectations.
                            </p>

                            <div className='pt-4 flex flex-col gap-y-2'>
                                <div className='flex items-center gap-x-2'>
                                    <div className='w-[1px] h-[1px] rounded-full bg-[#FDFFFF] p-1'>
                                    </div>

                                    <div className='text-neutral-200'>Dedicated aftercare support to keep your vehicle running smoothly.</div>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <div className='w-[1px] h-[1px] rounded-full bg-[#FDFFFF] p-1'>
                                    </div>

                                    <div className='text-neutral-200'>Engine remapping for enhanced performance and fuel efficiency.</div>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <div className='w-[1px] h-[1px] rounded-full bg-[#FDFFFF] p-1'>
                                    </div>

                                    <div className='text-neutral-200'>Tailored tuning for cars, trucks, and high-performance vehicles.</div>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <div className='w-[1px] h-[1px] rounded-full bg-[#FDFFFF] p-1'>
                                    </div>

                                    <div className='text-neutral-200'>Expert diagnostics and adjustments for optimal results.</div>
                                </div>
                            </div>

                            <div className='flex items-center gap-x-4 gap-y-3 mt-10'>
                                <Link href={"/contact-us"} className='w-fit px-6 py-2 bg-[#FDFFFF] text-[#2A2A2A] rounded-[5px]'>Contact Us</Link>
                                <Link href={"/services"} className='w-fit px-6 py-2 bg-[#2A2A2A] text-white rounded-[5px]'>Our Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutUsDescription