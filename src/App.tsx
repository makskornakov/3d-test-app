import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Scene from './components/Model';

function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <Stars />
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
