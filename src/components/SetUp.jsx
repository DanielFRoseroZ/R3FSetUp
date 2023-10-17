/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function SetUp(props) {
  const { nodes, materials } = useGLTF("/models/setup.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.542, 5.896, -9.235]} scale={12.467}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Monitor001.geometry}
          material={materials["Material.016"]}
          position={[-0.442, -0.007, 0.125]}
          rotation={[0, 0.544, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Monitor002.geometry}
          material={materials["Material.016"]}
          position={[0, -0.008, 0.002]}
          scale={100}
        />
      </group>
      <group
        position={[-7.326, 5.933, -0.712]}
        rotation={[0, -0.296, 1.605]}
        scale={0.147}
      >
        <group
          position={[0, 2.913, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[77.503, 358.399, 246.323]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Controller_1.geometry}
            material={materials.Controller}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Controller_2.geometry}
            material={materials["Button Colour"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Controller_3.geometry}
            material={materials["Red-Button"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Controller_4.geometry}
            material={materials["Yellow Button"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Controller_5.geometry}
            material={materials["Blue Button"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Controller_6.geometry}
            material={materials["Green Button"]}
          />
        </group>
      </group>
      <group scale={10}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={nodes.Plane004.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_1.geometry}
          material={nodes.Plane004_1.material}
        />
      </group>
      <group
        position={[0.263, 11.141, -7.538]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={15.916}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.books_3.geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.books_3_1.geometry}
          material={materials["carpetDarker.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.books_3_2.geometry}
          material={materials.carpetWhite}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.books_3_3.geometry}
          material={materials.plant}
        />
      </group>
      <group
        position={[-7.515, 6.243, -3.269]}
        rotation={[-2.609, 1.083, 1.045]}
        scale={-0.013}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GooglepCube51_1.geometry}
          material={materials["Google:blinn1SG"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GooglepCube51_1_1.geometry}
          material={materials.blinn3SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GooglepCube51_1_2.geometry}
          material={materials["Ambulance_01:blinn3SG"]}
        />
      </group>
      <group
        position={[4.169, 6.819, -9.444]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={2.487}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh324829603.geometry}
          material={materials.mat22}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh324829603_1.geometry}
          material={materials["mat23.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh324829603_2.geometry}
          material={materials["mat21.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh324829603_3.geometry}
          material={materials.mat8}
        />
      </group>
      <group
        position={[-3.856, 11.953, -8.821]}
        rotation={[3.054, Math.PI / 4, Math.PI]}
        scale={0.312}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434636807.geometry}
          material={materials.mat16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434636807_1.geometry}
          material={materials.mat9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434636807_2.geometry}
          material={materials.mat17}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434636807_3.geometry}
          material={materials.mat13}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434636807_4.geometry}
          material={materials.mat21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434636807_5.geometry}
          material={materials.mat20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434636807_6.geometry}
          material={materials.mat15}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434636807_7.geometry}
          material={materials.mat12}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434636807_8.geometry}
          material={materials.mat23}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh434636807_9.geometry}
          material={materials.mat18}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keyboard1.geometry}
        material={materials.lambert3SG}
        position={[-1.16, 5.873, -6.643]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Desk.geometry}
        material={materials.standardSurface21SG}
        position={[-2.693, -1.548, -2.818]}
        rotation={[-1.57, -0.001, -0.005]}
        scale={1.567}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Router.geometry}
        material={materials.standardSurface17SG}
        position={[-5.642, 1.073, -5.77]}
        rotation={[-1.57, -0.001, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MousePad.geometry}
        material={materials.standardSurface3SG}
        position={[-2.369, -0.287, -3.443]}
        rotation={[-1.57, -0.001, -0.005]}
        scale={[1.207, 1.177, 1.307]}
      />
      <group
        position={[3.963, 11.477, -8.155]}
        rotation={[0, -0.658, 0]}
        scale={-0.011}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_1.geometry}
          material={materials.blinn9SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_1_1.geometry}
          material={materials.blinn2SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_1_2.geometry}
          material={materials.blinn11SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_1_3.geometry}
          material={materials.blinn4SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_1_4.geometry}
          material={materials.blinn6SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_1_5.geometry}
          material={materials.blinn7SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_1_6.geometry}
          material={materials.blinn5SG}
        />
      </group>
      <group position={[1.678, 5.883, -6.618]} scale={8.484}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mouse001.geometry}
          material={materials["Material.002"]}
          scale={100}
        />
      </group>
      <group
        position={[-0.267, 2.568, -1.758]}
        rotation={[Math.PI, -0.002, Math.PI]}
        scale={7.435}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ExecutiveChair1.geometry}
          material={materials.LeatherExecutiveChair1}
          position={[0.078, -0.043, 0.21]}
          rotation={[-Math.PI / 2, 0, -0.187]}
          scale={87.534}
        />
      </group>
      <group position={[-0.043, 10.98, -8.913]} scale={3.626}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_ShelfSM_Shelf1_1.geometry}
          material={materials.lambert2SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry}
          material={materials["lambert3SG.001"]}
        />
      </group>
      <group position={[4.637, 0.015, -9.418]} scale={12.41}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rugRound_3.geometry}
          material={materials.carpetDarker}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rugRound_3_1.geometry}
          material={materials.carpet}
        />
      </group>
      <group position={[7.599, -0.03, -8.937]} scale={8.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Trashbin.geometry}
          material={materials.Material}
          scale={148.041}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/setup.gltf");
