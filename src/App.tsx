import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stars } from '@react-three/drei';
import Scene from './components/Model';
import ManScene from './components/Man';
import { EarthScene } from './components/Earth';

function App() {
  return (
    <div className="App" style={{ height: '100vh' }}>
      <Canvas>
        <OrbitControls autoRotate autoRotateSpeed={2} />
        <Stars />
        {/* <Scene /> */}
        {/* <ManScene /> */}
        <EarthScene />
        <Environment preset="sunset" background />
      </Canvas>
    </div>
  );
}

export default App;
