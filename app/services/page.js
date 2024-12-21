import FAQs from '@/components/landingPage/FAQs/FAQs'
import MakeAnAppointment from '@/components/landingPage/MakeAnAppointment/MakeAnAppointment'
import Hero from '@/components/servicesPage/Hero/Hero'
import OurServices from '@/components/servicesPage/OurServices/OurServices'

export const metadata = {
    title : "Our Services - Expert Chip Tuning & Custom Exhaust Services",
    description : "Explore our range of services, including ECU/TCU tuning, custom exhaust systems, and catalytic converter removals. Precision solutions for all your performance needs."
}


const ServicesPage = () => {
    return (
        <div>
            <Hero />
            <OurServices />
            <FAQs />
            <MakeAnAppointment />
        </div>
    )
}

export default ServicesPage