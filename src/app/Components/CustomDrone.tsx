'use client'
import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Group } from "three";

useGLTF.preload("/cube_robot.glb");

function MeshComponent({ mousePosition }: { mousePosition: { x: number; y: number } }) {
    const mesh = useRef<Group>(null);
    const { animations, scene } = useGLTF("/cube_robot.glb") as any;
    const { actions } = useAnimations(animations, scene) as any;
    const { camera } = useThree();
    const windowWidth = window.innerWidth;

    const targetPosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        actions["Fly"].play();
    }, [actions]);

    useFrame(() => {
        if (mesh.current) {
            if (windowWidth < 640) {
                camera.position.z = 4
            } else {
                camera.position.z = 3
            }
            targetPosition.current.x += (mousePosition.x * 2 - targetPosition.current.x) * 0.05;
            targetPosition.current.y += (mousePosition.y * 2 - targetPosition.current.y) * 0.05;
            mesh.current.position.x = targetPosition.current.x;
            mesh.current.position.y = targetPosition.current.y;
        }
    });

    return (
        <group ref={mesh}>
            <primitive object={scene} />
        </group>
    );
}

export const Drone = ({ mousePosition: externalMousePosition }: { mousePosition?: { x: number; y: number } }) => {
    const [internalMousePosition, setInternalMousePosition] = useState({ x: 0, y: 0 });

    const mousePosition = externalMousePosition || internalMousePosition;

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (externalMousePosition) return;
        const rect = event.currentTarget.getBoundingClientRect();
        setInternalMousePosition({
            x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
            y: -((event.clientY - rect.top) / rect.height) * 2 + 1,
        });
    };
    

    return (
        
        <Canvas
            gl={{ antialias: true }}
            dpr={[1, 1.5]}
            onMouseMove={handleMouseMove}>
            <directionalLight position={[-5, -5, 5]} intensity={4} />
            <Suspense fallback={null}>
                <MeshComponent mousePosition={mousePosition} />
            </Suspense>
        </Canvas>
    );
};
