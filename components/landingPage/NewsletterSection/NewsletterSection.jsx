import React from 'react'

const NewsletterSection = () => {
    return (
        <div className='mt-32 mb-20' data-aos="fade-right">
            <div className='w-[80%] mx-auto flex items-center justify-center flex-col'>
                <h2 className='text-4xl text-[#FDFFFF] text-center'>
                    Subscribe to Our Newsletter
                </h2>
                <p className='text-neutral-300 w-full lg:w-[40%] mt-2 text-center'>
                    Stay up-to date with latest news, product launch and other other cool thing - all delivered in your inbox
                </p>

                <form className='mt-12 lg:mt-8 w-[90%] xl:w-1/2 flex flex-col items-center gap-x-2 gap-y-4'>
                    <input type='text' placeholder='Enter your email...' className='bg-transparent focus:ring-0 outline-none border-b border-neutral-600 pb-2 px-4   text-neutral-300 placeholder:text-neutral-400 w-full lg:w-[50%] text-center' />
                    <button type='submit' className='px-16 py-4 rounded-full text-[#FDFFFF] bg-[#000000]/20'>Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default NewsletterSection