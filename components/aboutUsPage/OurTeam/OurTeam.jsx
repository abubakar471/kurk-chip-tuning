import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const OurTeam = () => {
    return (
        <div className='mt-10 mb-20'>
            <div className='w-[80%] mx-auto'>
                <h2 data-aos="fade-down" id='our-team-heading' className='text-center text-6xl text-[#FDFFFF]'>Meet Our Professional Team</h2>

                <div className='grid grid-cols-1 lg:grid-cols-3 mt-10 gap-10 w-full mx-auto'>
                    <div data-aos="fade-right" data-aos-anchor="#our-team-heading" data-aos-delay="300" id='team-1' className='border border-neutral-600 p-3 rounded-3xl'>
                        <div className='bg-[#545454] p-4 rounded-3xl'>
                            <div className='relative'>
                                <Image src={`/assets/images/mechanic-1.jpg`} width={1000} height={600} alt='Contact Us' className='h-[250px] 2xl:h-[400px] object-cover rounded-3xl' />

                                <div className='w-full h-full absolute top-0 left-0 right-0 bottom-0 blur-xl bg-neutral-500/40'></div>
                            </div>

                            <div className='mt-6 flex items-end justify-between flex-wrap 2xl:flex-nowrap gap-x-2 gap-y-2 pb-4'>
                                <div className='flex items-center gap-x-8'>
                                    {/* <div className='rounded-2xl bg-[#666666] p-4'>
                                        
                                    </div> */}

                                    <div className='flex flex-col gap-y-1'>
                                        <p className='text-[#FDFFFF] text-2xl'>Kurkentrekker</p>
                                        <p className='text-[#FDFFFF] text-sm'>Engineer</p>
                                    </div>
                                </div>


                                <div className='flex items-center gap-x-2'>
                                    <Link href={"/"} className='bg-[#666666] p-3 rounded-full transition-all duration-300 ease-in-out hover:scale-110'>
                                        <FaFacebook className='text-[#FDFFFF] text-xl' />
                                    </Link>

                                    <Link href={"/"} className='bg-[#666666] p-3 rounded-full transition-all duration-300 ease-in-out hover:scale-110'>
                                        <FaTwitter className='text-[#FDFFFF] text-xl' />
                                    </Link>

                                    <Link href={"/"} className='bg-[#666666] p-3 rounded-full transition-all duration-300 ease-in-out hover:scale-110'>
                                        <FaInstagram className='text-[#FDFFFF] text-xl' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-right" data-aos-anchor="#team-1" data-aos-delay="600" id='team-2' className='border border-neutral-600 p-3 rounded-3xl'>
                        <div className='bg-[#545454] p-4 rounded-3xl'>
                            <div className='relative'>
                                <Image src={`/assets/images/mechanic-2.jpg`} width={1000} height={600} alt='Contact Us' className='h-[250px] 2xl:h-[400px] object-cover rounded-3xl' />

                                <div className='w-full h-full absolute top-0 left-0 right-0 bottom-0 blur-xl bg-neutral-500/40'></div>
                            </div>

                            <div className='mt-6 flex items-end justify-between flex-wrap 2xl:flex-nowrap gap-x-2 gap-y-2 pb-4'>
                                <div className='flex items-center gap-x-8'>
                                    {/* <div className='rounded-2xl bg-[#666666] p-4'>
                                        
                                    </div> */}

                                    <div className='flex flex-col gap-y-1'>
                                        <p className='text-[#FDFFFF] text-2xl'>Kurkentrekker</p>
                                        <p className='text-[#FDFFFF] text-sm'>Engineer</p>
                                    </div>
                                </div>


                                <div className='flex items-center gap-x-2'>
                                    <Link href={"/"} className='bg-[#666666] p-3 rounded-full transition-all duration-300 ease-in-out hover:scale-110'>
                                        <FaFacebook className='text-[#FDFFFF] text-xl' />
                                    </Link>

                                    <Link href={"/"} className='bg-[#666666] p-3 rounded-full transition-all duration-300 ease-in-out hover:scale-110'>
                                        <FaTwitter className='text-[#FDFFFF] text-xl' />
                                    </Link>

                                    <Link href={"/"} className='bg-[#666666] p-3 rounded-full transition-all duration-300 ease-in-out hover:scale-110'>
                                        <FaInstagram className='text-[#FDFFFF] text-xl' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-right" data-aos-anchor="#team-2" data-aos-delay="900" id='team-3' className='border border-neutral-600 p-3 rounded-3xl'>
                        <div className='bg-[#545454] p-4 rounded-3xl'>
                            <div className='relative'>
                                <Image src={`/assets/images/mechanic-3.jpg`} width={1000} height={600} alt='Contact Us' className='h-[250px] 2xl:h-[400px] object-cover rounded-3xl' />

                                <div className='w-full h-full absolute top-0 left-0 right-0 bottom-0 blur-xl bg-neutral-500/40'></div>
                            </div>

                            <div className='mt-6 flex items-end justify-between flex-wrap 2xl:flex-nowrap gap-x-2 gap-y-2 pb-4'>
                                <div className='flex items-center gap-x-8'>
                                    {/* <div className='rounded-2xl bg-[#666666] p-4'>
                                        
                                    </div> */}

                                    <div className='flex flex-col gap-y-1'>
                                        <p className='text-[#FDFFFF] text-2xl'>Kurkentrekker</p>
                                        <p className='text-[#FDFFFF] text-sm'>Engineer</p>
                                    </div>
                                </div>


                                <div className='flex items-center gap-x-2'>
                                    <Link href={"/"} className='bg-[#666666] p-3 rounded-full transition-all duration-300 ease-in-out hover:scale-110'>
                                        <FaFacebook className='text-[#FDFFFF] text-xl' />
                                    </Link>

                                    <Link href={"/"} className='bg-[#666666] p-3 rounded-full transition-all duration-300 ease-in-out hover:scale-110'>
                                        <FaTwitter className='text-[#FDFFFF] text-xl' />
                                    </Link>

                                    <Link href={"/"} className='bg-[#666666] p-3 rounded-full transition-all duration-300 ease-in-out hover:scale-110'>
                                        <FaInstagram className='text-[#FDFFFF] text-xl' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam