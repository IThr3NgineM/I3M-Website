import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface FloatingLinkProps {
  children: React.ReactNode;
  to: string;
}

const FloatingLink: React.FC<FloatingLinkProps> = ({ children, to }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.z = hovered ? 0.5 : 0;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={[0, 0, 0]}
    >
      <Text fontSize={0.5} color={hovered ? "#FF00E2" : "white"}>
        {children}
      </Text>
    </mesh>
  );
};

export default FloatingLink;
