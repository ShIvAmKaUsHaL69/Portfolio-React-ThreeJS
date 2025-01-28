import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import React, { useRef } from 'react'

export default function Target(props) {
    const targetref = useRef();
    
    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',);
    
    useGSAP(() => {
        gsap.to(targetref.current.position, {
            y: targetref.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        })
    })
    return (
    <mesh { ...props} ref={targetref} rotation={[0, Math.PI/5,0]} scale={1.5}>
        <primitive object={scene} />
    </mesh>
  )
}
