'use client'
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useProgress } from "@react-three/drei";

function LoadingWatcher({ onProgress, onLoaded }: { onProgress: (p: number) => void, onLoaded: () => void }) {
    const { active, progress } = useProgress();
    const calledRef = useRef(false);

    useEffect(() => {
        onProgress(progress);
        if (!active && progress === 100 && !calledRef.current) {
            calledRef.current = true;
            onLoaded();
        }
    }, [active, progress, onProgress, onLoaded]);

    return null;
}

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

export const Developer = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    const onProgress = useCallback((p: number) => setProgress(p), []);
    const onLoaded = useCallback(() => setLoading(false), []);

    return (
        <div className="relative w-full h-full">
            {loading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-kang-red-900 transition-all duration-300 ease-out"
                                style={{ width: `${Math.round(progress)}%` }}
                            />
                        </div>
                        <p className="text-white font-kang-pixels text-lg mt-2">{Math.round(progress)}%</p>
                    </div>
                </div>
            )}
            <Canvas className="bg-cover overflow-hidden" style={{ opacity: loading ? 0 : 1 }}>
                <LoadingWatcher onProgress={onProgress} onLoaded={onLoaded} />
                <ambientLight />
                <Suspense fallback={null}>
                    <MeshComponent />
                </Suspense>
            </Canvas>
        </div>
    )
}
