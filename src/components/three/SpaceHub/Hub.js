import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../../../../scene.gltf')
  return (
    <group castShadow position={[props.mousePosition[0]/2500, -2, 0]} ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh castShadow geometry={nodes.Object_5.geometry} material={materials['gran.001']} />
            <mesh castShadow geometry={nodes.Object_4.geometry} material={materials.UV_TEST} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../../../scene.gltf');
