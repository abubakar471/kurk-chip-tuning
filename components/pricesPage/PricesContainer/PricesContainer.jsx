import React from 'react'

const PricesContainer = () => {
    const services = [
        {
            id: 1,
            title: "Chiptuning Stage 1",
            description: "Includes free vMax delete.",
            price: 175
        },
        {
            id: 2,
            title: "Chiptuning Stage 2",
            description: "Includes free vMax delete; modifications tailored to the car's needs.",
            price: 275
        },
        {
            id: 3,
            title: "Automatic Transmission (TCU) Tuning",
            description: "Improves shifting moments and maximizes torque.",
            price: 175
        },
        {
            id: 4,
            title: "Chiptuning + Transmission (Stage 1 + TCU)",
            description: "Includes free vMax delete for ECU and TCU tuning simultaneously.",
            price: 325
        },
        {
            id: 5,
            title: "Pops & Bangs",
            description: "Recommended to remove the middle and end mufflers.",
            price: 175
        },
        {
            id: 6,
            title: "Pops & Bangs + Stage 1",
            description: "Includes free vMax delete and complete tuning.",
            price: 325
        },
        {
            id: 7,
            title: "DPF/OPF Removal",
            description: "Must be completed before removing the DPF/OPF, not afterward.",
            price: 175
        },
        {
            id: 8,
            title: "AdBlue Removal",
            description: "Disabling AdBlue for diesel engines.",
            price: 175
        },
        {
            id: 9,
            title: "Decat",
            description: "Removal of the catalytic converter.",
            price: 90
        },
        {
            id: 10,
            title: "EGR Removal",
            description: "Disabling the EGR system.",
            price: 90
        },
        {
            id: 11,
            title: "EGR + DPF Removal",
            description: "Complete removal of both EGR and DPF for diesel engines.",
            price: 210
        },
        {
            id: 12,
            title: "Decat + OPF Removal",
            description: "Must be completed before removing the OPF, not afterward.",
            price: 250
        }
    ];

    return (
        <div data-aos="fade-up" className='mb-20'>
            <div className='w-[80%] mx-auto bg-gradient-to-r from-[#FAFCFC]/10 -from-0% to-40% to-[#222222] border-2 border-neutral-600/50 p-4 rounded-3xl flex flex-col items-start gap-x-4 gap-y-4'>
                <div className='w-full grid grid-cols-12 gap-x-4 gap-y-2 justify-between pb-2 border-b border-[#FDFFFF]/20'>
                    <div className='col-span-1'>
                        {/* <p className='text-[#FDFFFF] text-lg w-full'>{item?.id}.</p> */}
                    </div>
                    <div className='col-span-8'>
                        {/* <p className='text-[#FDFFFF] text-lg col-span-6 w-full'>{item?.title}</p> */}
                    </div>
                    <div className='col-span-3'>
                        <div className='w-full flex justify-start text-[#FDFFFF] text-lg'>
                            <span className='font-semibold mr-1'>Price</span>
                        </div>
                    </div>
                </div>
                {
                    services?.map((item, i) => (
                        <div key={item?.id} className={`w-full grid grid-cols-12 gap-x-4 gap-y-2 justify-between pb-2 ${item?.id === 12 ? "" : "border-b border-[#FDFFFF]/20"}`}>
                            <div className='col-span-1'>
                                <p className='text-[#FDFFFF] text-sm md:text-lg w-full'>{item?.id}.</p>
                            </div>
                            <div className='col-span-8'>
                                <p className='text-[#FDFFFF] text-sm md:text-lg col-span-6 w-full'>{item?.title}</p>
                            </div>
                            <div className='col-span-3'>
                                <div className='w-full flex justify-start text-[#FDFFFF] text-sm md:text-lg '>
                                    <span className='font-semibold mr-1'>€</span>
                                    {item?.price}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PricesContainer