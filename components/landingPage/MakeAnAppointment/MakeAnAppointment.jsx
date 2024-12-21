'use client'

import Link from 'next/link'
import React from 'react'

const MakeAnAppointment = () => {
    return (
        <div className='bg-[#393939] min-h-[200px] border-b border-neutral-600'>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-[80%] mx-auto py-20 flex items-center justify-center flex-col gap-x-10 gap-y-10'>
                <p className='text-[#FDFFFF] text-5xl w-full leading-tight text-center'>
                    Power Meets Precision
                </p>
                <div className='w-full text-neutral-300 flex items-center justify-center text-center'>
                    <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[50%]'>

                        Book an appointment with us to give your car the upgrade it deserves. Our team is here to provide reliable and customized tuning that fits your needs. Let&apos;s get your vehicle running at its best.
                    </div>
                </div>
                <div className="w-fit flex items-center justify-center">
                    <Link href={"/make-an-appointment"} className='bg-[#FDFFFF] text-[#222222] px-8 py-4 rounded-full text-xl font-semibold w-full'>Book an Appointment</Link>
                </div>
            </div>
        </div>
    )
}

export default MakeAnAppointment