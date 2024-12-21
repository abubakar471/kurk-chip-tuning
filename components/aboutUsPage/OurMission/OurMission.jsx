import Image from 'next/image'
import React from 'react'

const OurMission = () => {
    return (
        <div>
            <div className='w-[80%] mx-auto'>
                <div data-aos="fade-right" className='relattive w-fit' id='our-mission-heading'>
                    <h2 className='text-[#FDFFFF] text-2xl'>Our Mission</h2>
                    <div className='bg-[#FDFFFF] w-[32%] h-[2px] mt-2' />
                </div>

                <div  className='mt-10 flex flex-wrap lg:flex-nowrap gap-x-10 gap-y-16'>
                    <div data-aos="fade-right" data-aos-anchor="#our-mission-heading" id='our-mission-description' className='w-full lg:w-1/2 flex flex-col gap-y-4'>
                        <p className='text-neutral-400'>
                            At the core of our mission is the desire to help drivers experience their vehicles like never before. Through advanced chip tuning solutions, we aim to enhance performance, improve fuel efficiency, and ensure every drive is both thrilling and reliable. We believe every vehicle has untapped potential, and our goal is to unlock it for you.
                        </p>

                        <p className='text-neutral-400'>
                            We are dedicated to delivering chip tuning services that exceed expectations. By utilizing the latest technology and adhering to the highest standards, we craft solutions that enhance both power and sustainability. Every vehicle we tune is treated with the utmost care, ensuring precision and quality in every detail.
                        </p>

                        <p className='text-neutral-400'>
                            Our business is built on a foundation of trust and customer satisfaction. From the moment you reach out to us, we provide clear communication, expert guidance, and comprehensive support. We are here not just to enhance your vehicle but to create a partnership based on transparency and reliability.
                        </p>
                    </div>

                    <div  data-aos="fade-right" data-aos-anchor="#our-mission-description" data-aos-delay="500" className='w-full lg:w-1/2 flex flex-row gap-y-2 px-4 lg:px-10'>
                        <Image src={`/assets/images/our-mission-1.jpg`} alt='our mission' width={800} height={800} className='object-cover w-1/2 h-[300px] rounded-3xl rotate-12' />
                        <Image src={`/assets/images/our-mission-2.jpg`} alt='our mission' width={800} height={800} className='object-cover w-1/2 h-[300px] rounded-3xl rotate-12 grayscale' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMission