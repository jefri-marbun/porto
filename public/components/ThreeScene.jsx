import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const RotatingBox = () => {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.01));
  return (
    <Box args={[1, 1, 1]} position={[0, 0, 0]} ref={mesh}>
      <meshStandardMaterial attach="material" color="orange" />
    </Box>
  );
};

const ThreeScene = () => {
  return (
    <Canvas style={{ height: '400px' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RotatingBox />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
