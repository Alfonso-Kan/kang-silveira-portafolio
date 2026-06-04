'use client'
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useProgress, Html } from "@react-three/drei";

function MeshComponent() {
    const fileUrl = '/model/developerModel/developer.gltf';
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);
    const { camera } = useThree();

    useEffect(() => {
        const updateCameraPosition = () => {
            camera.position.z = window.innerWidth < 768 ? 3 : 5;
        };
        updateCameraPosition();
        window.addEventListener('resize', updateCameraPosition);
        return () => window.removeEventListener('resize', updateCameraPosition);
    }, [camera]);

    useFrame(() => {
        mesh.current.rotation.y -= 0.006;
    })

    return (
        <mesh ref={mesh}>
            <primitive object={gltf.scene} />
            <meshBasicMaterial color={'red'} />
        </mesh>
    )
}

function Loader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="flex flex-col items-center justify-center">
                <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-kang-red-900 transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="text-white font-kang-pixels text-lg mt-2">{Math.round(progress)}%</p>
            </div>
        </Html>
    );
}

export const Developer = () => {
    return (
        <Canvas className="bg-cover overflow-hidden">
            <ambientLight />
            <Suspense fallback={<Loader />}>
                <MeshComponent />
            </Suspense>
        </Canvas>
    )
}
