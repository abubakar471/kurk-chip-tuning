"use client"

import React, { useEffect } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { brand_id } from '@/data/brand_id'
import axios from 'axios'

const VehicleSelector = ({ setBrand, setModel, setGeneration, setMotorType, selected, setSelected, isLoadingBrand, setIsLoadingBrand, isLoading, setIsLoading, models, setModels, generations, setGenerations, motorTypes, setMotorTypes, carInfo, setCarInfo }) => {
    const fetchingModels = async (value) => {
        setIsLoadingBrand(true);

        try {
            const res = await axios.get(`/api/models?brand_id=${value}`);
            const data = res?.data;

            if (data?.success) {
                console.log(res?.data)
                setModels(data?.data)
                setIsLoadingBrand(false);
            }
        } catch (err) {
            console.log(err);
            setIsLoadingBrand(false);
        }
    }

    const fetchingGenerations = async (value) => {
        setIsLoadingBrand(true);

        try {
            const res = await axios.get(`/api/generations?brand_id=${selected?.brand_id}&&model_id=${value}`);
            const data = res?.data;

            if (data?.success) {
                console.log(res?.data)
                setGenerations(data?.data)
                setIsLoadingBrand(false);
            }
        } catch (err) {
            console.log(err);
            setIsLoadingBrand(false);
        }
    }

    const fetchingMotorTypes = async (value) => {
        console.log('calling motor type')
        setIsLoadingBrand(true);

        try {
            const res = await axios.get(`/api/motortypes?brand_id=${selected?.brand_id}&&model_id=${selected?.model_id}&&generation_id=${value}`);
            const data = res?.data;

            if (data?.success) {
                console.log(res?.data)
                setMotorTypes(data?.data)
                setIsLoadingBrand(false);
            }
        } catch (err) {
            console.log(err);
            setIsLoadingBrand(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // const res = await axios.get(`/api/get-car-info-iframe?brand_id=${selected?.brand_id}&&model_id=${selected?.model_id}&&generation_id=${selected?.generation_id}&&product_id=${selected?.product_id}`);

        const setIframeSrc = async () => {
            setCarInfo(`/api/get-car-info-iframe?brand_id=${selected?.brand_id}&&model_id=${selected?.model_id}&&generation_id=${selected?.generation_id}&&product_id=${selected?.product_id}`)
            // setTimeout(() => {
            //     setIsLoading(false)
            // }, 2000)
        }

        await setIframeSrc()



        // try {
        //     const res = await axios.get(`/api/get-car-info-iframe?brand_id=${selected?.brand_id}&&model_id=${selected?.model_id}&&generation_id=${selected?.generation_id}&&product_id=${selected?.product_id}`);

        //     const data = res?.data;

        //     if (data) {
        //         console.log('ifram data : ', data);
        //         setCarInfo(data);
        //     }
        // } catch (err) {
        //     console.log(err);
        //     setIsLoading(false);
        // }
    }

    useEffect(() => {
        setModels([])
        setGenerations([])
        setMotorTypes([])
        setCarInfo(null)
        setSelected({
            ...selected, model_id: null, generation_id: null, product_id: null
        })
    }, [selected?.brand_id])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 gap-x-4 flex-wrap gap-y-3 !border-none'>
            <Select disabled={isLoadingBrand || isLoading} onValueChange={(value) => {
                setSelected({ ...selected, brand_id: value })
                fetchingModels(value);
            }}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Maker" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Maker</SelectLabel>
                        {
                            brand_id?.map((item, index) => (
                                <SelectItem key={index} value={item?.value}>{item?.label}</SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Select disabled={isLoadingBrand || isLoading || models?.length === 0} onValueChange={(value) => {
                setSelected({ ...selected, model_id: value })
                fetchingGenerations(value);
            }}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Model" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Model</SelectLabel>
                        {
                            models?.length > 0 && models?.map((item, index) => (
                                <SelectItem key={index} value={item?.value}>{item?.label}</SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Select disabled={isLoadingBrand || isLoading || generations?.length === 0} onValueChange={(value) => {
                setSelected({ ...selected, generation_id: value })
                fetchingMotorTypes(value);
            }}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Generation" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Generation</SelectLabel>
                        {
                            generations?.length > 0 && generations?.map((item, index) => (
                                <SelectItem key={index} value={item?.value}>{item?.label}</SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Select disabled={isLoadingBrand || isLoading || motorTypes?.length === 0} onValueChange={(value) => {
                setSelected({ ...selected, product_id: value })
            }}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Motortype" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Motor Type</SelectLabel>
                        {
                            motorTypes?.length > 0 && motorTypes?.map((item, index) => (
                                <SelectItem key={index} value={item?.value}>{item?.label}</SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>

            <button type='submit' onClick={(e) => handleSubmit(e)} disabled={isLoading || isLoadingBrand || models?.length === 0 || generations?.length === 0 || motorTypes?.length === 0 || !selected?.brand_id || !selected?.model_id || !selected?.generation_id || !selected?.product_id} className='bg-[#222222] disabled:bg-[#222222]/70 px-4 py-1.5 text-[#FDFFFF]'>
                View Performance Gains
            </button>
        </div>
    )
}

export default VehicleSelector