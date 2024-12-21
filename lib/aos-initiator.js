"use client"

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const AOSInitiator = ({ children }) => {
    useEffect(() => {
        Aos.init({
            duration: 800,
            delay: 200,
            once: false,
        })

        if (typeof (window) !== null) {
            document.querySelectorAll('img')
                .forEach((img) =>
                    img.addEventListener('load', () =>
                        Aos.refresh()
                    )
                )
        }

        return () => Aos.refresh();
    }, [])

    return <>{children}</>

}

export default AOSInitiator