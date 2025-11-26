import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Icosahedron, Float } from '@react-three/drei';

const FloatingMesh = ({ color = "#3b82f6", size = 1, speed = 1 }) => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.2 * speed;
            meshRef.current.rotation.y = t * 0.3 * speed;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Icosahedron args={[1, 0]} scale={size} ref={meshRef}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={0.3}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.8}
                    wireframe={true}
                />
            </Icosahedron>
        </Float>
    );
};

const FloatingShape = ({ className, color, size }) => {
    return (
        <div className={`absolute pointer-events-none ${className}`}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <FloatingMesh color={color} size={size} />
            </Canvas>
        </div>
    );
};

export default FloatingShape;
