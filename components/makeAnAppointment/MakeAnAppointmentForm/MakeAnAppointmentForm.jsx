"use client"

import { useToast } from '@/hooks/use-toast';
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ImSpinner2 } from "react-icons/im";


const MakeAnAppointmentForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const { toast } = useToast();

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);




        emailjs
            .sendForm('service_xdxhv7c', 'template_kjejjg8', form.current, {
                publicKey: 'cvv3LxkVdvEXX0MaS',
            })
            .then(
                (response) => {
                    const data = response.status;

                    if (data === 200) {
                        toast({
                            description: "Your message has been sent. Thank You!",
                        })

                        setIsSending(false);

                    }

                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsSending(false);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='w-full h-full flex flex-col gap-y-5 bg-[#FDFFFF] px-4 py-4'>
            {/* <h4 className='text-[#2A2A2A] text-4xl font'>It&apos;s Quick & Easy</h4> */}
            <input type='text' placeholder='Your Name' name="from_name" className="text-[#2A2A2A]/80 placeholder:text-[#2A2A2A]/80 text-sm w-full px-4 py-4 rounded-none bg-[#666666]/20 focus:ring-0 outline-none border-none" />
            <input type='email' placeholder='Email' name="from_email" className="text-[#2A2A2A]/80 placeholder:text-[#2A2A2A]/80 text-sm w-full px-4 py-4 rounded-none bg-[#666666]/20 focus:ring-0 outline-none border-none" />
            <textarea type='text' name="message" placeholder='Your Requirements or Questions' rows={6} className="text-[#2A2A2A]/80 placeholder:text-[#2A2A2A]/80 text-sm w-full px-4 py-4 rounded-none bg-[#666666]/20 focus:ring-0 outline-none border-none" />
            <p className='text-sm text-[#2A2A2A]'>
                Book an appointment in no time with us. Just submit this form and fill your initial requirements. We will be in touch with you in no time.
            </p>
            <button disabled={isSending} type='submit' className='bg-[#2A2A2A] hover:bg-[#2A2A2A]/90 transition-all duration-200 ease-in-out px-4 py-4 rounded-full flex items-center justify-center text-[#FDFFFF]'>
                {
                    isSending ? (<ImSpinner2 className='text-2xl animate-spin' />
                    ) : ("Send Now")
                }
            </button>

        </form>
    )
}

export default MakeAnAppointmentForm