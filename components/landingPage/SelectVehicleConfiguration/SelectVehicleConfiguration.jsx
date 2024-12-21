'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import VehicleSelector from './VehicleSelector'
import { brand_id } from '@/data/brand_id'
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const SelectVehicleConfiguration = () => {
    const [brand, setBrand] = useState(null);
    const [model, setModel] = useState(null);
    const [generation, setGeneration] = useState(null);
    const [motorType, setMotorType] = useState(null);
    const [selected, setSelected] = useState({
        brand_id: null,
        model_id: null,
        generation_id: null,
        product_id: null
    });
    const [models, setModels] = useState([]);
    const [generations, setGenerations] = useState([]);
    const [motorTypes, setMotorTypes] = useState([]);
    const [carInfo, setCarInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingBrand, setIsLoadingBrand] = useState(false);
    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    const handleIframeError = () => {
        setIsLoading(false); // Handle error state if needed
    };
    return (
        <div className='mt-36 mb-24' data-aos="fade-up-right">
            <div className='w-[80%] mx-auto min-h-[150px] flex flex-col items-center flex-wrap lg:flex-nowrap !border-none bg-[#FDFFFF]'>
                <div className='w-full border-b-2  lg:border-r-2 lg:border-b-0 pb-4'>
                    <div className='w-full h-auto xl:h-1/2 bg-[#FDFFFF] flex items-center px-6 pt-6'>
                        <h4 className='text-[#5D5D5D] font-semibold text-xl'>Please Select Your Car</h4>
                    </div>

                    <div className='w-full h-auto xl:h-1/2 bg-[#FDFFFF] px-6  mt-4'>
                        <VehicleSelector
                            setBrand={setBrand}
                            setModel={setModel}
                            setGeneration={setGeneration}
                            setMotorType={setMotorType}
                            selected={selected}
                            setSelected={setSelected}
                            isLoadingBrand={isLoadingBrand}
                            setIsLoadingBrand={setIsLoadingBrand}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            models={models}
                            setModels={setModels}
                            generations={generations}
                            setGenerations={setGenerations}
                            motorTypes={motorTypes}
                            setMotorTypes={setMotorTypes}
                            carInfo={carInfo}
                            setCarInfo={setCarInfo}
                        />
                    </div>
                </div>

                {
                    isLoading && (
                        <div className='min-h-[20vh] w-full flex items-center justify-center bg-[#FDFFFF] !z-50'>
                            <AiOutlineLoading3Quarters className='animate-spin text-3xl' />
                        </div>
                    )
                }

                {
                    (carInfo) && (
                        <div className={`h-[135vh] w-full !overflow-hidden`}>
                            {/* <iframe src="https://tuning-shop.com/iframe/iframe.php?user=2489&car=holden-commodore-57-v8-306pk" frameBorder="0" className='h-[80vh] w-full'></iframe> */}
                            <iframe src={carInfo} frameBorder="0" className={isLoading ? "hidden" : 'h-full w-full !overflow-hidden'} onLoad={handleIframeLoad}
                                onError={handleIframeError}></iframe>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SelectVehicleConfiguration