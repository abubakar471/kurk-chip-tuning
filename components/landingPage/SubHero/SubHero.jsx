import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const SubHero = () => {
 
    return (
        <div data-aos="zoom-in-up" className="grid grid-cols-1 lg:grid-cols-4 w-full mx-auto mt-20">
            <div className="bg-[#FDFFFF] flex flex-col items-center pt-4 pb-8 px-6">
                <div className="w-full flex justify-end">
                    <MoveRight className="text-neutral-600" size={40} />
                </div>
                <Image src={'/assets/images/ecu-chip-tuning.png'} alt="Tire" width={400} height={400} className="w-[70%] grayscale" />
                <p className="text-xl xl:text-xl text-neutral-600 font-semibold pt-6 text-center">ECU Tuning</p>
            </div>

            <div className="bg-[#5D5D5D] flex flex-col items-center pt-4 pb-8 px-6">
                <div className="w-full flex justify-end">
                    <MoveRight className="text-[#FDFFFF]" size={40} />
                </div>
                <Image src={'/assets/images/tcu-chip-tuning.png'} alt="Engine" width={400} height={400} className="w-[45%] grayscale" />
                <p className="text-xl xl:text-xl text-[#FDFFFF] font-semibold pt-6 text-center">TCU Tuning</p>
            </div>

            <div className="bg-[#FDFFFF] flex flex-col items-center pt-4 pb-8 px-6">
                <div className="w-full flex justify-end">
                    <MoveRight className="text-neutral-600" size={40} />
                </div>
                <Image src={'/assets/images/catalatic-coverter.png'} alt="Tire" width={400} height={400} className="w-[45%]" />
                <p className="text-xl xl:text-xl text-neutral-600 font-semibold pt-0 text-center">OPF/CATALATIC removals</p>
            </div>

            <div className="bg-[#5D5D5D] flex flex-col items-center pt-4 pb-8 px-6">
                <div className="w-full flex justify-end">
                    <MoveRight className="text-[#FDFFFF]" size={40} />
                </div>
                <Image src={'/assets/images/exhaust-system.png'} alt="Exhause System" width={400} height={400} className="w-[60%] grayscale" />
                <p className="text-xl xl:text-xl text-[#FDFFFF] font-semibold pt-5 text-center">Custom Exhaust System</p>
            </div>
        </div>
    )
}

export default SubHero