import ContactAddress from '@/components/contactUsPage/ContactAddress/ContactAddress'
import ContactFormContainer from '@/components/contactUsPage/ContactFormContainer/ContactFormContainer'
import Hero from '@/components/contactUsPage/Hero/Hero'
import React from 'react'

export const metadata = {
    title : "Contact Us - Get in Touch for Performance Tuning Solutions",
    description : "Have questions or need expert advice? Contact us today for professional guidance on chip tuning, exhaust systems, and more. We're here to help."
}

const ContactUsPage = () => {
    return (
        <div className='w-full bg-[]'>
            <Hero />
            <ContactFormContainer />
            <ContactAddress />
        </div>
    )
}

export default ContactUsPage