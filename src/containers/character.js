import { Box } from "@mui/material";
import { Plane, RoundedBox, Shadow, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { useGesture } from "react-use-gesture";

const Model = () => {
  const gltf = useGLTF("/models/ghostheadset.glb");
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  const bind = useGesture({
    onDrag: ({ delta }) => {
      if (meshRef.current) {
        meshRef.current.rotation.y += delta[0] / 100;
      }
    },
  });

  return (
    <mesh {...bind()} ref={meshRef} position={[0, 0, -1]}>
      <primitive object={gltf.scene} dispose={null} />{" "}
    </mesh>
  );
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[-5, 5, -5]} intensity={2} color="#6C00FF" />
      <directionalLight position={[5, 5, -2]} intensity={5} color="#FB2576" />
      <directionalLight
        position={[0, 10, 0]}
        intensity={1}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
      />
    </>
  );
};

function CameraControls() {
  const { camera } = useThree();

  // Define a altura inicial da câmera
  const initialCameraPositionY = 0;

  camera.position.x = 0;
  camera.position.z = 5;

  // Usa o useFrame para atualizar a posição da câmera a cada renderização
  useFrame(() => {
    const currentPositionY = window.pageYOffset;
    camera.position.y = initialCameraPositionY - currentPositionY * 0.01;
    camera.lookAt(0, 0, 0); // opcional: mantém a câmera olhando para a origem da cena
  });

  return null;
}

export default function CharacterContainer({ children }) {
  return (
    <Box height={400}>
      <Canvas shadows style={{ touchAction: "none" }}>
        <CameraControls />
        <Suspense fallback={null}>
          <Shadow
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[3, 3, 1]}
            position={[0, -2, 0]}
            opacity={0.4}
          >
            <Plane receiveShadow />
          </Shadow>
          <Lights />
          <Model />
        </Suspense>
      </Canvas>
    </Box>
  );
}
