import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Plane, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const GridPlane = () => {
    const mesh = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (mesh.current) {
            // Move the grid backwards to create forward motion effect
            mesh.current.position.z = (t * 2) % 2;
        }
    });

    return (
        <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeGeometry args={[100, 100, 50, 50]} />
            <meshBasicMaterial
                color="#3b82f6"
                wireframe
                transparent
                opacity={0.15}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
};

const CeilingGrid = () => {
    const mesh = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.position.z = (t * 2) % 2;
        }
    });

    return (
        <mesh ref={mesh} rotation={[Math.PI / 2, 0, 0]} position={[0, 5, 0]}>
            <planeGeometry args={[100, 100, 50, 50]} />
            <meshBasicMaterial
                color="#ec4899"
                wireframe
                transparent
                opacity={0.1}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
};

const CyberGridBackground = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-50 bg-slate-900">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 pointer-events-none z-10" />
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <fog attach="fog" args={['#0f172a', 5, 20]} />
                <ambientLight intensity={0.5} />
                <GridPlane />
                <CeilingGrid />
            </Canvas>
        </div>
    );
};

export default CyberGridBackground;
