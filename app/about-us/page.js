import AboutUsDescription from '@/components/aboutUsPage/AboutUsDescription/AboutUsDescription'
import Hero from '@/components/aboutUsPage/Hero/Hero'
import OurMission from '@/components/aboutUsPage/OurMission/OurMission'
import OurTeam from '@/components/aboutUsPage/OurTeam/OurTeam'
import FAQs from '@/components/landingPage/FAQs/FAQs'
import MakeAnAppointment from '@/components/landingPage/MakeAnAppointment/MakeAnAppointment'
import Qualifications from '@/components/landingPage/Qualifications/Qualifications'
import React from 'react'

export const metadata = {
    title : "About Us – Passionate About Performance & Automotive Tuning",
    description : "Learn about our mission to deliver high-quality car chip tuning and exhaust solutions. Discover our commitment to helping you get the most out of your vehicle."
}

const AboutUsPage = () => {
    return (
        <div>
            <Hero />
            <AboutUsDescription />
            <OurMission />
            <div className='mb-20'>
                <Qualifications />
            </div>

            <OurTeam />
            <FAQs />
            <MakeAnAppointment />
        </div>
    )
}

export default AboutUsPage