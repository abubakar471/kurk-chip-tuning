import React from 'react'
import { CiMicrochip } from "react-icons/ci";
import { FaMicrochip, FaPowerOff } from 'react-icons/fa6';
import { ImMakeGroup } from 'react-icons/im';
import { MdCable } from 'react-icons/md';
import { TbEngine } from 'react-icons/tb';
import { PiEngineFill } from "react-icons/pi";

const OurServices = () => {
    return (
        <div className='mt-28 mb-32'>
            <div className='w-[80%] mx-auto'>
                {/* <h2 className='text-center text-[#FDFFFF] text-6xl font-semibold w-[40%] mx-auto leading-tight'>Extra features you will have with cars</h2>
            <p className='text-[#FDFFFF] text-center w-[35%] mx-auto mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem facere delectus sint non nam, tempora distinctio earum!
            </p> */}

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 w-full mx-auto'>
                    <div data-aos="fade-up-right" data-aos-delay="0" id='service-1' className='bg-[#FDFFFF] text-[#222222] px-6 py-12 flex flex-col gap-y-2 items-center justify-center'>
                        <FaMicrochip className="text-6xl" />

                        <h4 className='font-semibold text-xl'>Chiptuning stage 1</h4>
                        <p className='text-center'>
                            Op zoek naar meer power en brandstofbesparing? Laat jouw auto door ons chiptunen met garantie.
                        </p>
                    </div>

                    <div data-aos="fade-up-right" data-aos-delay="600" data-aos-anchor="service-1" id='service-2' className='bg-[#FDFFFF] text-[#222222] px-6 py-12 flex flex-col gap-y-2 items-center justify-center'>
                        <MdCable className="text-6xl" />

                        <h4 className='font-semibold text-xl'>Pops & Bangs 1</h4>
                        <p className='text-center'>
                            Pops and bangs zijn momenteel een grote hit en deze technologie kun je uiteraard door Ecu-Soft laten toepassen op jouw auto.
                        </p>
                    </div>

                    <div data-aos="fade-up-right" data-aos-delay="900" data-aos-anchor="service-2" id='service-3' className='bg-[#FDFFFF] text-[#222222] px-6 py-12 flex flex-col gap-y-2 items-center justify-center'>
                        <FaPowerOff className="text-6xl" />

                        <h4 className='font-semibold text-xl'>Start Stop uitschakelen</h4>
                        <p className='text-center'>
                            Ben je het ook zo zat dat iedere keer de motor uit gaat bij het stoplicht? Wij kunnen dit systeem uitschakelen!
                        </p>
                    </div>

                    <div data-aos="fade-up-right" data-aos-delay="1200" data-aos-anchor="service-3" id='service-4' className='bg-[#FDFFFF] text-[#222222] px-6 py-12 flex flex-col gap-y-2 items-center justify-center'>
                        <ImMakeGroup className="text-6xl" />

                        <h4 className='font-semibold text-xl'>EGR klep uitschakelen</h4>
                        <p className='text-center'>
                            De EGR klep wordt bij regulier onderhoud geregeld vervangen of gereinigd deze kosten lopen uit een van €200,- tot €800,-
                        </p>
                    </div>

                    <div data-aos="fade-up-right" data-aos-delay="1500" data-aos-anchor="service-4" id='service-5' className='bg-[#FDFFFF] text-[#222222] px-6 py-12 flex flex-col gap-y-2 items-center justify-center'>
                        <PiEngineFill className="text-6xl" />

                        <h4 className='font-semibold text-xl'>DPF uitschakelen</h4>
                        <p className='text-center'>
                            In onze database hebben we bestanden die DPF (FAP) -kaarten op het hele automodel uitschakelen. Onze ingenieurs zijn constant bezig om de database up-to-date te houden.
                        </p>
                    </div>

                    <div data-aos="fade-up-right" data-aos-delay="1800" data-aos-anchor="service-5" id='service-6' className='bg-[#FDFFFF] text-[#222222] px-6 py-12 flex flex-col gap-y-2 items-center justify-center'>
                        <TbEngine className="text-6xl" />

                        <h4 className='font-semibold text-xl'>COD/ACT uitschakelen</h4>
                        <p className='text-center'>
                            Heeft u last van een trillende en/of brommende auto laag in toeren? Het uitschakelen van de cilinderuitschakeling is mogelijk voor diverse motoren.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices