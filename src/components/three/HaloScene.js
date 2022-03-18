import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../../../../haloScene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.03, -1.55, -0.06]} rotation={[-Math.PI / 2, 0, 0]} scale={1.92}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh castShadow
            geometry={nodes.Object_7.geometry}
            material={materials.Jupiter_Body}
            skeleton={nodes.Object_7.skeleton}
          />
          <skinnedMesh castShadow
            geometry={nodes.Object_8.geometry}
            material={materials.Jupiter_Body_0}
            skeleton={nodes.Object_8.skeleton}
          />
          <skinnedMesh castShadow
            geometry={nodes.Object_10.geometry}
            material={materials.Jupiter_FaceAcc}
            skeleton={nodes.Object_10.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../../../haloScene.gltf')
