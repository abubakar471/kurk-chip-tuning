import MakeAnAppointment from '@/components/landingPage/MakeAnAppointment/MakeAnAppointment'
import Hero from '@/components/makeAnAppointment/Hero/Hero'
import MakeAnAppointmentFormContainer from '@/components/makeAnAppointment/MakeAnAppointmentFormContainer/MakeAnAppointmentFormContainer'
import React from 'react'

export const metadata = {
    title : "Book Your Appointment – Reliable Car Performance Tuning",
    description : "Schedule an appointment for expert chip tuning and exhaust solutions. Choose a time that works for you, and let us optimize your vehicle for top performance."
}

const MakeAnAppointmentPage = () => {
    return (
        <div>
            {/* <Hero /> */}
            <MakeAnAppointmentFormContainer />
        </div>
    )
}

export default MakeAnAppointmentPage