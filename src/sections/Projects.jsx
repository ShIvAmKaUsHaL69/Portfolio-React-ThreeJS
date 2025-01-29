import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import Canvasloader from '../component/Canvasloader'
import Democomputer from '../component/Democomputer';

export default function Projects() {
    const projectcount = myProjects.length
    const [sindex, Setsindex] = useState(0)
    const currentproject = myProjects[sindex];

    const handlenavigation = (direction) => {
        Setsindex((previndex) => {
            if(direction == 'previous'){
                return previndex === 0 ? projectcount - 1 : previndex - 1
            }
            else{
                return previndex === projectcount - 1 ? 0 : previndex + 1
            }

        })
    }
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
                    <a className='flex items-center gap-2 cursor-pointer text-white-600' href={currentproject.href} target='_blank' rel='noreferrer'><p>Check live Site</p>
                    <img src='/assets/arrow-up.png' className='w-3 h-3' alt='arrow'/></a>
                </div>
                <div className='flex justify-between items-center mt-7'>
                    <button className='arrow-btn' onClick={() => handlenavigation('previous')} >
                        <img src='/assets/left-arrow.png' alt='right arrow' className='w-4 h-4' />
                    </button>
                    <button className='arrow-btn' onClick={() => handlenavigation('next')} >
                        <img src='/assets/right-arrow.png' alt='right arrow' className='w-4 h-4' />
                    </button>
                </div>
            </div>
            <div className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full'>
                <Canvas>
                    <ambientLight intensity={Math.PI} />
                    <directionalLight position={[10,10,5]} />
                    <Center>
                        <Suspense fallback={<Canvasloader />}>
                            <group scale={2} position={[0,-3,0]} rotation={[0,-0.1,0]}>
                                <Democomputer texture={currentproject.texture}/>
                            </group>
                        </Suspense> 
                    </Center>
                    <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
                </Canvas>
            </div>
        </div>
      
    </section>
  )
}
