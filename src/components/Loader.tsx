import { Html, useProgress } from '@react-three/drei'

export function Loader() {
  const { progress } = useProgress()
  return <Html center style={{color: '#000', fontSize: '50px'}}>{progress} % loaded</Html>
}
