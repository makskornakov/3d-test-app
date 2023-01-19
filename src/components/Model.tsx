import { useGLTF, useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { BufferGeometry, Material, Mesh, Object3D, TextureLoader } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Loader } from './Loader';

enum EarthGLTF {
  Earth_Ground = 'Earth_Ground',
  Earth_Water = 'Earth_Water',
  Scene = 'Scene',
}

function Scene(props: any) {
  // const gltf = useLoader(GLTFLoader, '/model.glb')
  // console.log(gltf.nodes);
  // console.log(gltf.materials);

  // const earthGltf = useGLTF('/model.glb');

  // return (
  //   <Suspense fallback={<Loader />}>
  //     <primitive object={earthGltf.scene} >
  //       <meshStandardMaterial color={"red"} />
  //     </primitive>
  //   </Suspense>
  // )

  // const group = useRef()
  const { nodes, materials, scene } = useGLTF('/model.glb');

  // const realNodes = nodes as unknown as Object3D<Mesh<BufferGeometry, Material>>;

  console.log('nodes,', nodes);
  console.log('materials', materials);

  // const textureProps = useTexture('photka.jpg');

  // const colorMap = useLoader(TextureLoader, 'PavingStones092_1K_Color.jpg');
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    'PavingStones092_1K_Color.jpg',
    'PavingStones092_1K_Displacement.jpg',
    'PavingStones092_1K_NormalGL.jpg',
    'PavingStones092_1K_Roughness.jpg',
    'PavingStones092_1K_AmbientOcclusion.jpg',
  ]);

  return (
    <group {...scene} scale={[0.1, 0.1, 0.1]}>
      <mesh
        castShadow
        receiveShadow
        // @ts-expect-error
        geometry={nodes[EarthGLTF.Earth_Ground].geometry}
        material={materials[EarthGLTF.Earth_Ground]}
      >
        {/* <meshStandardMaterial color={'lightgreen'} /> */}
        <meshStandardMaterial
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
        />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        // @ts-expect-error
        geometry={nodes[EarthGLTF.Earth_Water].geometry}
        material={materials[EarthGLTF.Earth_Water]}
      />
    </group>
  );
}

export default Scene;
