import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Billboard, Text } from "@react-three/drei";
import { useGameStore } from "./state";

export default function Landmark({ data }) {
  const groupRef = useRef();
  const visited = useGameStore((s) => s.visited);
  const night = useGameStore((s) => s.night);
  const hasVisited = visited.has(data.id);

  useFrame((state) => {
    if (!groupRef.current) return;
    const { lookingAt, nearby } = useGameStore.getState();
    const active = lookingAt === data.id || nearby === data.id;
    const t = state.clock.elapsedTime;
    const target = active ? 1.05 + Math.sin(t * 4) * 0.025 : 1.0;
    const current = groupRef.current.scale.x;
    const next = current + (target - current) * 0.12;
    groupRef.current.scale.setScalar(next);
  });

  const facingYaw = Math.atan2(-data.position.x, -data.position.z);

  const onClick = (e) => {
    e.stopPropagation();
    const { openSection, open } = useGameStore.getState();
    if (!openSection) open(data.id);
  };

  const titleLen = data.title.length;
  const titleSize = titleLen <= 6 ? 0.7 : titleLen <= 8 ? 0.58 : 0.5;

  const Face = ({ back = false }) => (
    <group
      position={[0, 2.7, back ? -0.14 : 0.14]}
      rotation={[0, back ? Math.PI : 0, 0]}
    >
      <Text
        position={[0, 0.2, 0]}
        fontSize={titleSize}
        color={night ? "#fff4d6" : "#3f2410"}
        outlineWidth={0.015}
        outlineColor={night ? "#2a1505" : "#fff4d6"}
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
        maxWidth={2.6}
      >
        {data.title}
      </Text>
      <Text
        position={[0, -0.45, 0]}
        fontSize={0.18}
        color={night ? "#ffe6a3" : "#6a4a24"}
        outlineWidth={night ? 0.008 : 0}
        outlineColor="#2a1505"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.6}
      >
        {data.subtitle}
      </Text>
    </group>
  );

  return (
    <group
      ref={groupRef}
      position={data.position}
      rotation={[0, facingYaw, 0]}
      onClick={onClick}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "")}
    >
      <mesh position={[0, 0.1, 0]} receiveShadow>
        <cylinderGeometry args={[1.8, 2, 0.2, 32]} />
        <meshStandardMaterial color="#b08a5b" roughness={0.95} />
      </mesh>
      <mesh position={[0, 0.22, 0]} receiveShadow>
        <cylinderGeometry args={[1.6, 1.6, 0.05, 32]} />
        <meshStandardMaterial color="#6fb74a" roughness={1} />
      </mesh>

      <mesh position={[0, 1.3, 0]} castShadow>
        <cylinderGeometry args={[0.14, 0.16, 2.4, 12]} />
        <meshStandardMaterial color="#7a5330" roughness={0.9} />
      </mesh>

      <mesh position={[0, 2.7, 0]} castShadow>
        <boxGeometry args={[3.2, 2.2, 0.25]} />
        <meshStandardMaterial color={data.color} roughness={0.8} />
      </mesh>
      <mesh position={[0, 2.7, 0.135]}>
        <planeGeometry args={[2.95, 1.95]} />
        <meshStandardMaterial
          color={night ? "#3a2a16" : "#f2e2c3"}
          emissive={night ? "#ffc14a" : "#000000"}
          emissiveIntensity={night ? 0.28 : 0}
          roughness={0.9}
        />
      </mesh>
      <mesh position={[0, 2.7, -0.135]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[2.95, 1.95]} />
        <meshStandardMaterial
          color={night ? "#3a2a16" : "#f2e2c3"}
          emissive={night ? "#ffc14a" : "#000000"}
          emissiveIntensity={night ? 0.28 : 0}
          roughness={0.9}
        />
      </mesh>

      <Face />
      <Face back />

      <mesh position={[0, 4.05, 0]} castShadow>
        <boxGeometry args={[3.5, 0.2, 0.35]} />
        <meshStandardMaterial color={data.color} roughness={0.6} />
      </mesh>

      {(useGameStore.getState().nearby === data.id || night) && (
        <pointLight
          color={night ? "#ffd166" : data.color}
          intensity={night ? 1.4 : 1.2}
          distance={night ? 6 : 7}
          position={[0, 3, 0]}
        />
      )}

      {hasVisited && (
        <mesh position={[1.3, 4.08, 0.2]}>
          <sphereGeometry args={[0.12, 12, 10]} />
          <meshStandardMaterial color="#fff4d6" emissive="#ffd166" emissiveIntensity={1.2} />
        </mesh>
      )}
    </group>
  );
}
