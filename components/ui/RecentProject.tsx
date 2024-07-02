import { projects } from '@/data'
import { title } from 'process'
import React from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { PinContainer } from './3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProject = () => {
    return (
        <div className='py-20' id='projects'>
            {/* HEADING */}
            <h1 className='heading'>
                A small sellection of {''}
                <span className='text-purple'>Recent Projects</span>
            </h1>
            <div className="flex flex-wrap text-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {projects.map(({ id, title, des, img, iconLists, link, }) => (
                    <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex text-center justify-center sm:w-[570px] w-[80vw]'>
                        <PinContainer title={title} href={link}>
                            <div className='relative flex text-center justify-center sm:w-[570px] sm:h-[40vh] w-[30vw] overflow-hidden h-[20vh] mb-10'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <img src="/bg.png" alt="bg,img" />
                                </div>
                                <img src={img} alt={title} className='z-10 absolute bottom-0' />
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                {title}
                            </h1>

                            <p className='lg:text-xl font-light text-sm line-clamp-2'>
                                {des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className='flex items-center'>
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className='border
                                        border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={
                                                { transform: `translateX(-${5 * index * 2}px)` }
                                            }>
                                            <img src={icon} alt={icon} className='p-2' />
                                        </div>
                                    ))}
                                </div>
                                <div className='flex items-center'>
                                    <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check live Sites</p>
                                    <FaLocationArrow className='ms-3'
                                        color='#cbacf9' />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProject
