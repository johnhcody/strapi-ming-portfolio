import React, { useState, useEffect } from 'react'
import moment from 'moment'

const Footer:React.FunctionComponent = () => {

    const [width, setWidth] = useState(null);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        if (typeof window !== 'undefined') setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let isMobile: boolean = (width <= 768)
    
    return (
        <>
        <div className={`footer-wrapper w-full ${!isMobile ? 'mt-96' : ''}`}>
            <div className="icons-wrapper">
                <a href="https://www.facebook.com/mingyaisiri" target="_blank"><i className="fab fa-facebook-f"></i></a>
                <a href="https://instagram.com/mingkwn?igshid=1u0twlot1lt36" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="mailto:mingkwn@gmail.com?subject=Getting%20in%20Touch" target="_blank"><i className="fas fa-envelope-open-text"></i></a>
            </div>
            <div className="bottom-text-wrappe flex flex-col items-center justify-center">
                <p className="font-sans pt-4">	&copy;{` Mingkwan Rattanakot ${moment().format('YYYY')}`}  </p>
            </div>
        </div>
        </>
    )
}

export default Footer