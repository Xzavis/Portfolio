// IMPORT COMPONENT
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/magicButton'
import { Spotlight } from './ui/spolight'
import { TextGenerateEffect } from './ui/text-generate-effect'


const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className='-top-40 -left-10 md:left-10 md:-top-20 h-full ' fill="blue"/>
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw] ' fill="purple"/>
                <Spotlight className='top-28 left-80 md:-left-32 h-[80vh] w-[50vw] 'fill="white" />
            </div>

            {/* GRID AND DOT */}
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            {/* CONTENT HERO */}
            <div className='flex justify-center relative my-10 z-10 '>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                        Frond-end dev & UI designer
                    </h2>
                    <TextGenerateEffect
                        className='text-center text-[35px] md:text-5xl lg:text-6xl'
                        words='Passionate Front-End Developer Innovative 
                        UI Experiences'
                    />
                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"'>Hi! I’m Xza, a Frond-End Developer based in Indonesia.</p>
                    {/* IS MAGIC BUTTON */}
                    <a href="#about">
                        <MagicButton
                            title='Show My Work'
                            icon={<FaLocationArrow />}
                            position='right'
                        />
                    </a>
                </div>
            </div>
        </div>


    )
}

export default Hero
