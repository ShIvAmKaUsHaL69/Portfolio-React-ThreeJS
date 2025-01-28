import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import React, { useRef } from 'react'

export default function Herocamera({children, ismobile}) {
    const groupRef = useRef()
    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0,0,20] ,0.25 , delta)
        if(!ismobile){
            easing.dampE(groupRef.current.rotation, [-state.pointer.y / 3 , -state.pointer.x / 5,0] ,0.25 , delta)
        }
    })
    
  return (
   <group scale={ismobile ? 1.0 : 1.3} ref={groupRef}>
    {children}
   </group>
  )
}
