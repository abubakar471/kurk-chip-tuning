import Link from 'next/link'
import React from 'react'
import FAQAccordion from './FAQAccordion'

const FAQs = () => {
    return (
        <div className='mb-20' data-aos="fade-right">
            <div id="faqs" className='flex gap-x-10 gap-y-12 w-[80%] mx-auto flex-wrap-reverse lg:flex-nowrap py-10'>
                <div className='w-full lg:w-1/2'>
                    <FAQAccordion />
                </div>
                <div className='w-full lg:w-1/2'>
                    <h3 className='text-[#FDFFFF] text-4xl lg:text-6xl w-[90%] md:w-[70%] leading-normal'>Frequently Asked Questions</h3>
                    <p className='w-full md:w-[70%] text-neutral-200 mt-6 mb-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <div className='mt-10'>
                        <Link href={"#"} className='bg-neutral-100 px-8 py-4 rounded-full'>See More</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FAQs