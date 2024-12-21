import Link from 'next/link'
import React from 'react'
import { FaAward } from 'react-icons/fa6';
import { GrSettingsOption } from "react-icons/gr";
import { MdCleaningServices } from 'react-icons/md';

const Qualifications = () => {
    return (
        <div className='mt-32' data-aos="fade-right">
            <div className='w-[80%] mx-auto min-h-[200px] rounded-3xl relative bg-transparent px-6 lg:px-10 pt-20 pb-10'>
                <div className='flex flex-wrap justify-between items-end pb-16 border-b-2 border-neutral-500/50 w-full gap-x-4 gap-y-9'>
                    <h2 className='text-[#FDFFFF] text-4xl lg:text-6xl w-full lg:w-[50%]'>We Are Qualified & Professional</h2>

                    <div className='mt-0'>
                        <Link href={"#"} className='bg-neutral-100 px-8 py-4 rounded-full'>See More</Link>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 mt-10 gap-x-10 gap-y-10'>
                    <div className='w-[80%]'>
                        <div className='bg-neutral-400/70 text-white w-fit p-2 rounded-2xl'>
                            <GrSettingsOption className='text-white text-4xl' />
                        </div>
                        <div>
                            <p className='text-[#FDFFFF] text-2xl mt-4'>High Quality Tools</p>
                            <p className='text-[#FDFFFF] text-md mt-6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
                            </p>
                        </div>
                    </div>

                    <div className='w-[80%]'>
                        <div className='bg-neutral-400/70 text-white w-fit p-2 rounded-2xl'>
                            <FaAward className='text-white text-4xl' />
                        </div>
                        <div>
                            <p className='text-[#FDFFFF] text-2xl mt-4'>Affordable Price</p>
                            <p className='text-[#FDFFFF] text-md mt-6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
                            </p>
                        </div>
                    </div>

                    <div className='w-[80%]'>
                        <div className='bg-neutral-400/70 text-white w-fit p-2 rounded-2xl'>
                            <MdCleaningServices className='text-white text-4xl' />
                        </div>
                        <div>
                            <p className='text-[#FDFFFF] text-2xl mt-4'>Fast Service</p>
                            <p className='text-[#FDFFFF] text-md mt-6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-[#393939] backdrop:blur-md rounded-3xl -z-10'></div>
                <div className='absolute top-0 left-0 bottom-0 right-0 w-full h-full backdrop:blur-xl blur-md rounded-3xl -z-10' style={{
                    background: `url("/assets/images/abstract-1.png") rgba(0,0,0,0.3)`,
                    opacity: 0.1,
                    backgroundBlendMode: "darken",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }} ></div>
            </div>
        </div>
    )
}

export default Qualifications