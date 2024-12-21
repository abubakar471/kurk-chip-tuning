import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React from 'react'
import { FaGripLines } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import MobileNav from './MobileNav';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["200", "300", "400", "500", "600", "700", "800"]
})


const Navbar = () => {
    return (
        <div className=''>
            <div className='flex items-center justify-between w-[80%] mx-auto pt-10' data-aos='fade-down'>
                <div className='text-white text-2xl flex items-center gap-x-4'>
                    <IoCarSportSharp className='text-4xl' />

                    ktuning
                </div>

                <div className='flex items-center gap-x-4'>
                    <div className={`${poppins.className} hidden lg:flex items-center gap-x-14 border-r-2 border-neutral-300 pr-8`}>
                        <Link href={"/"} className='text-neutral-400 text-lg'>Home</Link>
                        <Link href={"/services"} className='text-neutral-400 text-lg'>Services</Link>
                        <Link href={"/prices"} className='text-neutral-400 text-lg'>Prices</Link>
                        <Link href={"/about-us"} className='text-neutral-400 text-lg'>About</Link>
                        <Link href={"/contact-us"} className='text-neutral-400 text-lg'>Contact us</Link>
                    </div>

                    {/* <div className='px-0 lg:px-4 flex flex-col gap-y-2'>
                        <CgMenuRight className='text-4xl text-neutral-200' />
                    </div> */}

                    <MobileNav />
                </div>
            </div>
        </div>
    )
}

export default Navbar