import Link from 'next/link'
import React from 'react'
import CustomerReviewsCarousel from './CustomerReviewsCarousel'

const CustomerReviews = () => {
    return (
        <div className='mt-36 mb-28 !overflow-x-hidden' data-aos="fade-right" >
            <div className='w-[80%] mx-auto flex flex-wrap xl:flex-nowrap justify-between gap-y-14'>
                <div className='w-full xl:w-2/5'>
                    <h3 className='text-neutral-100 text-4xl lg:text-5xl leading-normal w-full lg:w-[80%] mb-4'>What Our Customers Says About Us?</h3>
                    <p className='text-neutral-200 ww-[80%]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>

                    <div className='mt-8'>
                        <Link href={"#"} className='bg-neutral-100 px-8 py-4 rounded-full'>See More</Link>
                    </div>
                </div>
                <div className='w-full xl:w-3/5'>
                    <CustomerReviewsCarousel />
                </div>
            </div>
        </div>
    )
}

export default CustomerReviews