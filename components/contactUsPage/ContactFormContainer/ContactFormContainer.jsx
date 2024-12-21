import Image from 'next/image'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import ContactUsForm from './ContactUsForm'

const ContactFormContainer = () => {
    return (
        <div data-aos="fade-up" className='mb-20'>
            <div className='w-[80%] lg:w-[70%] mx-auto flex flex-wrap-reverse lg:flex-nowrap gap-x-14 gap-y-10'>
                <div className='w-full lg:w-1/2'>
                    <div className='border border-neutral-600 p-3 rounded-3xl'>
                        <div className='bg-[#545454] p-4 rounded-3xl'>
                            <div className='relative'>
                                <Image src={`/assets/images/contact-us-form.jpg`} width={1000} height={1000} alt='Contact Us' className='object-cover rounded-3xl' />

                                <div className='w-full h-full absolute top-0 left-0 right-0 bottom-0 blur-xl bg-neutral-500/40'></div>
                            </div>

                            <div className='mt-6 flex items-center justify-between pb-4'>
                                <div className='flex items-center gap-x-8'>
                                    <div className='rounded-2xl bg-[#666666] p-4'>
                                        <FaPhone className='text-[#FDFFFF] text-3xl' />
                                    </div>

                                    <div className='flex flex-col gap-y-1'>
                                        <p className='text-[#FDFFFF] text-2xl'>Call Us Now!</p>
                                        <p className='text-[#FDFFFF] text-sm'>(98+) 786-224-178</p>
                                    </div>
                                </div>

                                <div className='hidden sm:inline-block rounded-full bg-[#FDFFFF] p-4'>
                                    <FaLongArrowAltRight className='text-[#222222] text-3xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <h2 className='text-[#FDFFFF] text-5xl '>Send Us Message!</h2>
                    <p className='text-[#FDFFFF] py-8'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>

                    <div>
                        <ContactUsForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactFormContainer