import Link from 'next/link'
import React from 'react'
import { FaClock, FaPhoneAlt } from 'react-icons/fa'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { IoCarSportSharp } from 'react-icons/io5'
import { VscLaw } from "react-icons/vsc";
import { LuBadgePercent } from "react-icons/lu";


const Footer = () => {
    return (
        <div className='w-full bg-[#393939] min-h-[300px]'>
            <div className='w-[80%] mx-auto py-10'>
                <div className='flex flex-wrap lg:flex-nowrap items-center justify-end md:justify-between gap-x-4 gap-y-4'>
                    <div className='flex items-center gap-x-2'>
                        <div className='bg-neutral-400/70 p-2 rounded-full'>
                            <FaPhoneAlt className='text-[#FDFFFF] text-lg md:text-3xl' />
                        </div>

                        <p className='text-[#FDFFFF] text-2xl md:text-3xl'>+88015-5235-5234</p>
                    </div>

                    <div className='flex items-center gap-x-3'>
                        <Link href={"#"} className='bg-neutral-400/70 p-2 rounded-full'>
                            <FaFacebookF className='text-[#FDFFFF] text-xl' />
                        </Link>

                        <Link href={"#"} className='bg-neutral-400/70 p-2 rounded-full'>
                            <FaTwitter className='text-[#FDFFFF] text-xl' />
                        </Link>

                        <Link href={"#"} className='bg-neutral-400/70 p-2 rounded-full'>
                            <FaInstagram className='text-[#FDFFFF] text-xl' />
                        </Link>
                    </div>
                </div>

                <div className='mt-20'>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-20 gap-y-10 mb-10'>
                        <div>
                            <div className='text-white text-2xl flex items-center gap-x-4'>
                                <IoCarSportSharp className='text-4xl' />

                                ktuning
                            </div>
                            <div className='text-neutral-100 mt-4 w-[100%]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos, quos quisquam ducimus exercitationem ut
                            </div>
                        </div>

                        <div>
                            <h4 className='text-neutral-200 font-semibold text-xl'>Quick Links</h4>

                            <div className='mt-4 grid grid-cols-2 gap-y-2'>
                                <Link href={"/"} className='text-neutral-200'>Home</Link>
                                <Link href={"/services"} className='text-neutral-200'>Services</Link>
                                <Link href={"/about-us"} className='text-neutral-200'>About Us</Link>
                                <Link href={"/contact-us"} className='text-neutral-200'>Contact</Link>
                            </div>
                        </div>

                        <div>
                            <h4 className='text-neutral-200 font-semibold text-xl'>VAT & COC</h4>
                            <div className='text-neutral-300 mt-4 flex items-center gap-x-2'>
                                <VscLaw />
                                <span className='font-semibold'>COC :</span>
                                95590935
                            </div>
                            <div className='text-neutral-300 mt-4 flex items-center gap-x-2'>
                                <LuBadgePercent />
                                <span className='font-semibold'>VAT :</span>
                                NL867195083B01
                            </div>

                            {/* <div className='text-neutral-200 mt-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div> */}
                        </div>

                        <div>
                            <h4 className='text-neutral-200 font-semibold text-xl'>Working Hours</h4>
                            <div className='text-neutral-300 mt-4 flex items-center gap-x-2'>
                                <FaClock />
                                7 AM - 5 PM, Mon - Sat
                            </div>

                            <div className='text-neutral-200 mt-4'>
                                (Geen bezoekadres) Stoopstraat 39 4702SN Roosendaal Noord-Brabant Nederland
                            </div>
                        </div>
                    </div>

                    <div className='border-t-2 border-neutral-600 w-full py-4 flex items-center justify-between gap-x-2 gap-y-2 flex-wrap lg:flex-nowrap'>
                        <p className='text-neutral-200'>
                            &copy; Copyright 2024 | KTUNING | All rights reserved
                        </p>

                        <div className='flex items-center gap-x-4'>
                            <Link href={"#"} className='text-neutral-300 underline'>Privacy Policy</Link>
                            <Link href={"#"} className='text-neutral-300 underline'>Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer