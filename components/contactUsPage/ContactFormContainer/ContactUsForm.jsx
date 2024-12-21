"use client"

import { useToast } from '@/hooks/use-toast';
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ImSpinner2 } from "react-icons/im";


const ContactUsForm = () => {
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
        <form ref={form} onSubmit={sendEmail} className='w-full flex flex-col gap-y-5'>
            <input type='text' placeholder='Your Name' name="from_name" className="text-[#FDFFFF]/80 placeholder:text-[#FDFFFF]/20 text-sm w-full px-4 py-4 rounded-xl bg-[#666666]/20 focus:ring-0 outline-none border-none" />
            <input type='email'  placeholder='Email' name="from_email" className="text-[#FDFFFF]/80 placeholder:text-[#FDFFFF]/20 text-sm w-full px-4 py-4 rounded-xl bg-[#666666]/20 focus:ring-0 outline-none border-none" />
            <textarea type='text' name="message" placeholder='Your Message' rows={6} className="text-[#FDFFFF]/80 placeholder:text-[#FDFFFF]/20 text-sm w-full px-4 py-4 rounded-xl bg-[#666666]/20 focus:ring-0 outline-none border-none" />

            <button disabled={isSending} type='submit' className='bg-[#FDFFFF] hover:bg-[#FDFFFF]/90 transition-all duration-200 ease-in-out px-4 py-4 rounded-full flex items-center justify-center'>
                {
                    isSending ? (<ImSpinner2 className='text-2xl animate-spin' />
                    ) : ("Send Now")
                }
            </button>
        </form>
    )
}

export default ContactUsForm