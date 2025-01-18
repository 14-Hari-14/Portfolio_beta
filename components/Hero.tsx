import React from 'react'
import { TypewriterEffect } from './ui/typewriter-effect'
import locationtag from '../images/location.png'
import MagicButton from './ui/magicbutton'
import { FloatingDockVertical } from './ui/floating-dock'

const Hero = () => {
    const words = [
        {
            text: "Hi,",
            className: "text-white-100",
        },
        {
            text: "I'm",
            className: "text-white-100",
        },
        {
            text: "Hari",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    return (
        <div className='pb-12 sm:pb-16 lg:pb-20 pt-24 sm:pt-28 lg:pt-36'>
            <div className='flex justify-center relative my-8 sm:my-12 lg:my-20 z-10'>
                <div className='w-[90vw] sm:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center px-4 sm:px-6'>
                    <TypewriterEffect
                        className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
                        words={words}
                        cursorClassName=''
                    />
                    <h1 className='uppercase tracking-widest text-xl sm:text-2xl lg:text-[30px] text-center text-purple-100 max-w-full mt-2 sm:mt-3'>
                        Fullstack | Python Developer
                    </h1>
                    
                    <div className='flex items-center justify-center gap-2 my-4 sm:my-5'>
                        <img
                            className='h-8 w-8 sm:h-10 sm:w-10 lg:h-[50px] lg:w-[50px]'
                            src={locationtag.src}
                            alt="location icon"
                        />
                        <p className='text-lg sm:text-xl lg:text-[25px]'>Based in Kerala, India</p>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 sm:mt-6'>
                        <a href="#contact">
                            <MagicButton
                                title="Contact Me"
                            />
                        </a>
                        <a href="#projects">
                            <MagicButton
                                title="My Projects"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;