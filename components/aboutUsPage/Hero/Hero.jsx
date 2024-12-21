import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div data-aos="fade-up" className='min-h-[45vh] relative'>
            <div className='w-[80%] mx-auto mt-40 md:mt-32'>
                <div className='w-full flex flex-col items-center justify-center'>
                    <h1 className='text-[#FDFFFF] text-6xl md:text-8xl text-center'>About Us</h1>
                    <p className='mt-4 text-[#FDFFFF] text-xl'>Home / <span className='underline'>About</span></p>
                </div>
            </div>

            <Image src={`/assets/images/gray-blob.png`} alt='Blog' width={800} height={800} className='w-[400px] h-[] object-cover absolute -top-32 lg:-top-28 right-1/2 bottom-0 left-1/2 -translate-x-1/2 -z-10' />
        </div>
    )
}

export default Hero