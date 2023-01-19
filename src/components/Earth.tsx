import { useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

// enum EarthGLTF {
//   Earth_Ground = 'Earth_Ground',
//   Earth_Water = 'Earth_Water',
//   Scene = 'Scene',
// }

export function EarthScene(props: any) {
  // const manGltf = useLoader(GLTFLoader, '/snow.gltf');
  // console.log(gltf.nodes);
  // console.log(gltf.materials);

  const manGltf = useGLTF('/Earth_Low_Poly.glb');

  return (
    <Suspense fallback={null}>
      <primitive object={manGltf.scene} />
    </Suspense>
  );

  // // const group = useRef()
  // const { nodes, materials, scene } = useGLTF('/model.glb')

  // // const realNodes = nodes as unknown as Object3D<Mesh<BufferGeometry, Material>>;

  // console.log('nodes,', nodes);
  // console.log('materials', materials);

  // const textureProps = useTexture('photka.jpg');

  // return (
  //   <>
  //   <group {...scene}>

  //     {/* @ts-expect-error */}
  //     <mesh castShadow receiveShadow geometry={nodes[EarthGLTF.Earth_Ground].geometry} material={materials[EarthGLTF.Earth_Ground]}>
  //       {/* <meshStandardMaterial color={"lightgreen"} /> */}
  //       {/* <meshStandardMaterial {...textureProps} /> */}
  //     </mesh>

  //     {/* @ts-expect-error */}
  //     <mesh castShadow receiveShadow geometry={nodes[EarthGLTF.Earth_Water].geometry} material={materials[EarthGLTF.Earth_Water]}/>

  //   </group>
  //   </>
  // )
}
