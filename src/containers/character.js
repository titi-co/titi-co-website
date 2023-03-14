import { Box, CircularProgress, useTheme } from "@mui/material";
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
    <mesh {...bind()} ref={meshRef} position={[0, -0.5, -1]}>
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
      <directionalLight position={[5, 5, -2]} intensity={5} color="#6C00FF" />
      <directionalLight color="#FB2576" position={[0, 10, 0]} intensity={5} />
      <directionalLight color="#6C00FF" position={[-5, 0, 0]} intensity={3} />
    </>
  );
};

function CameraControls() {
  const { camera } = useThree();

  // Define a altura inicial da câmera
  const initialCameraPositionY = 0;

  camera.position.x = 0;
  camera.position.z = 3.5;

  // Usa o useFrame para atualizar a posição da câmera a cada renderização
  useFrame(() => {
    const currentPositionY = window.pageYOffset;
    camera.position.y = initialCameraPositionY - currentPositionY * 0.01;
    camera.lookAt(0, 0, 0); // opcional: mantém a câmera olhando para a origem da cena
  });

  return null;
}

export default function CharacterContainer({ children }) {
  const theme = useTheme();
  return (
    <Box
      height={450}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Suspense
        fallback={
          <CircularProgress
            variant="indeterminate"
            color="primary"
            disableShrink
            size="5rem"
          />
        }
      >
        <Canvas shadows style={{ touchAction: "none" }}>
          <CameraControls />

          <Lights />
          <Model />
        </Canvas>
      </Suspense>
    </Box>
  );
}
