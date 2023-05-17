import { useFrame } from '@react-three/fiber'
import { SoftShadows, BakeShadows, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'

// softShadows({
//     frustum: 3.75,
//     size: 0.00005,
//     near: 9.5,
//     samples: 17,
//     rings: 11
// })

export default function Experience()
{
    const cube = useRef()
    
    useFrame((state, delta) =>
    {
        cube.current.rotation.y += delta * 0.2
    })

    return <>

        {/* <SoftShadows 
            frustum={ 3.75 }
            size={ 0.00005 }
            near={ 9.5 }
            samples={ 17 }
            rings={ 11 }
        /> */}

        {/* <BakeShadows /> */}

        <color args={ [ 'ivory' ] } attach="background" />

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight 
            position={ [ 1, 2, 3 ] } 
            intensity={ 1.5 }
            castShadow
            shadow-mapSize={ [ 1024, 1024 ] }
        />
        <ambientLight intensity={ 0.5 } />

        <mesh castShadow position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow ref={ cube } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}