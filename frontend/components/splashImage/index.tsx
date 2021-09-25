import React, { useState, useEffect } from 'react'
import Typed from 'react-typed'

const SplashImage:React.FunctionComponent= () => {

    const [width, setWidth] = useState<number>(null);
    function handleWindowSizeChange() {
            setWidth(window.innerWidth)
        }

    useEffect(() => {
        if (typeof window !== 'undefined') setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, []);

    let isMobile: boolean = (width <= 768)

    return (
        <div className="index-page-wrapper">
            <Typed
                strings={[
                    'Local Wisdom',
                    'Environment',
                    'Sustainability',
                    'Creative Culture']}
                typeSpeed={40}
                backSpeed={50}
                backDelay={1000}
                className={isMobile ? 'typed-text-mobile' : 'typed-text-desktop'}
                loop
            />

        </div>
    )
}

export default SplashImage;