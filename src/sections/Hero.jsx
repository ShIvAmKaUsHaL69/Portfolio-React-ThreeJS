import React, { Suspense } from 'react'
import {Canvas} from "@react-three/fiber"
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../component/HackerRoom'
import Canvasloader from '../component/Canvasloader'
// import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../component/Target'
import Reactlogo from '../component/Reactlogo'
import Cube from '../component/Cube'
import Ring from '../component/Ring'
import Herocamera from '../component/Herocamera'
import Button from '../component/Button'


export default function Hero() {
  const ismobile = useMediaQuery({maxWidth: 768});
  const istablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
  const issmall = useMediaQuery({maxWidth: 440});
  
  const sizes = calculateSizes(issmall, ismobile, istablet)


  return (
    <section className='min-h-screen w-full flex flex-col relative' id='home'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am Shivam <span className='waving-hand'>👋</span></p>
            <p className='hero_tag text-gray_gradient'>Building Creative Projects</p>
        </div>
        <div className='w-full h-full absolute inset-0'>
        {/* <Leva /> */}
            <Canvas className='w-full h-full'>
              <Suspense fallback={<Canvasloader/>}>
                <PerspectiveCamera makeDefault position={[0,0,30]}/>
                <Herocamera ismobile={ismobile}>
                <HackerRoom 
                position={sizes.deskPosition} 
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}/>
                </Herocamera>

                <group>
                      <Target position={sizes.targetPosition}/>\
                      <Reactlogo position={sizes.reactLogoPosition}/>
                      <Cube position={sizes.cubePosition} />
                      <Ring position={sizes.ringPosition} />
                </group>
                
                <ambientLight intensity={1} />
                <directionalLight position={[10,10,10]} intensity={0.5} />
                </Suspense>
            </Canvas>

        </div>

        <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
          <a href='#about' className='w-fit'>
            <Button name="Contact Me" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
          </a>
        </div>
      
    </section>
  )
}
