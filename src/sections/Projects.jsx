import React from 'react'
import { myProjects } from '../constants'

export default function Projects() {
    const currentproject = myProjects[0];
  return (
    <section className='c-space my-20'>
        <p className='head-text'>My Work</p>
        <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full' >
            <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
                <div className='absolute top-0 right-0'>
                    <img src={currentproject.spotlight} alt='spotlight' className='w-full h-96 object-cover rounded-xl' />
                </div>
                <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentproject.logoStyle}>
                    <img src={currentproject.logo} alt='logo' className='w-10 h-10 shadow-sm'/>
                </div>   
                <div className='flex flex-col gap-5 text-white-600 my-5'>
                    <p className='text-white text-2xl font-semibold animatedText'>{currentproject.title}</p>
                    <p className='animatedText'>{currentproject.desc}</p>
                    <p className='animatedText'>{currentproject.subdesc}</p>
                </div>
                <div className='flex items-center justify-between flex-wrap gap-5'>
                    <div className='flex items-center gap-3'>
                        {currentproject.tags.map((tag,i) => (<div key={i} className='tech-logo'>
                            <img src={tag.path} alt={tag.name} />
                        </div> ))}
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}
