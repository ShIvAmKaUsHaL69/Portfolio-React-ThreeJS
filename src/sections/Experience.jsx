import React, { Suspense, useState } from 'react'
import {Canvas} from "@react-three/fiber"
import { workExperiences } from '../constants'
import { OrbitControls } from '@react-three/drei'
import Canvasloader from '../component/Canvasloader'
import Developer from '../component/Developer'

export default function Experience() {
    const [animationName , setanimationName] = useState('idle')
  return (
    <section className='c-space my-20' id='work'>
        <div className='w-full text-white-600'>
            <h3 className='head-text'>My Work Experience</h3>
            <div className='work-container'>
                <div className='work-canvas'>
                    <Canvas>
                        <ambientLight intensity={7} />
                        <spotLight position={[10,10,10]} angle={0.15} penumbra={1} />
                        <directionalLight position={[10,10,10]} intensity={1} />
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2}/>
                        <Suspense fallback={<Canvasloader/>} >
                        <Developer position-y={-3} scale={3} animationName={animationName}/>
                        </Suspense>
                    </Canvas>
                </div>
                <div className='work-content'>
                    <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
                        {workExperiences.map((item)=> (
                            <div key={item.id} className='work-content_container group' onClick={() => {setanimationName(item.animation)}} onPointerOver={() => {setanimationName(item.animation)}} onPointerOut={() => {setanimationName('idle')}} >
                                <div className='flex flex-col h-full justify-start items-center py-2'>
                                    <div className='work-content_logo'>
                                        <img src={item.icon} alt='logo' className='w-full h-full'/>
                                    </div> 
                                    <div className='work-content_bar'/>
                                </div>
                                <div className='sm:p-5 px-2.5 py-5'>
                                    <p className='font-bold text-white-800'>{item.name}</p>
                                    <p className='text-sm mb-5'>{item.pos} -- {item.duration}</p>
                                    <p className='group-hover:text-white transition ease-in-out duration-500'>
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
