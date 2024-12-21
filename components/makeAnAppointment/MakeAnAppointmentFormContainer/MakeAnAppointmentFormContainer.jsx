import Link from 'next/link'
import React from 'react'
import MakeAnAppointmentForm from '../MakeAnAppointmentForm/MakeAnAppointmentForm'

const MakeAnAppointmentFormContainer = () => {
    return (
        <div className='mt-32 mb-48'>
            <div className='w-[80%] mx-auto bg-[#393939] px-4 lg:px-10 py-10 relative flex flex-wrap xl:flex-nowrap items-start gap-y-10'>
                <div data-aos="fade-up-right" id="make-an-appoinment-text" className='w-full xl:w-1/2'>
                    <h1 className='flex flex-wrap flex-col gap-x-2 gap-y-2 text-[#FDFFFF] uppercase text-4xl lg:text-5xl'>
                        <span>Make An</span>
                        <span>Appointment</span>
                    </h1>
                    <p className='text-[#FDFFFF] mt-10 w-full lg:w-[80%]'>
                        Scheduling your appointment has never been easier. Whether you&apos;re looking for expert chiptuning, custom exhaust work, or performance upgrades, we&apos;re here to help. Simply choose a time that works for you, and our team will ensure your vehicle gets the attention and care it needs.
                    </p>

                    <div className='flex items-center flex-wrap lg:flex-nowrap gap-x-8 gap-y-3 mt-10'>
                        <Link href={"/services"} className='w-full md:w-fit px-4 md:px-10 py-4 bg-[#2A2A2A] text-white rounded-[5px] scale-100 lg:scale-105'>Explore Our Services</Link>
                        <Link href={"/contact-us"} className='w-full md:w-fit px-4 md:px-10 py-3 bg-[#FDFFFF] text-[#2A2A2A] rounded-[5px]'>Contact Us Now</Link>

                    </div>
                </div>

                <div data-aos="fade-up-right" data-aos-delay="400" data-aos-anchor="#make-an-appoinment-text" className='w-full xl:w-1/2'>
                    <MakeAnAppointmentForm />
                </div>
            </div>
        </div>
    )
}

export default MakeAnAppointmentFormContainer