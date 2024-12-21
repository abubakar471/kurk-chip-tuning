import Hero from '@/components/pricesPage/Hero/Hero'
import PricesContainer from '@/components/pricesPage/PricesContainer/PricesContainer'
import React from 'react'

export const metadata = {
    title: "Our Prices - Affordable Chip Tuning & Custom Exhaust Prices",
    description: "Discover our transparent pricing for chip tuning, exhaust systems, and performance upgrades. Quality solutions that fit your budget."
}

const PricesPage = () => {

    return (
        <div>
            <Hero />

            <PricesContainer />
        </div>
    )
}

export default PricesPage