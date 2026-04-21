import { useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  Environment,
  Stars,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";
import { LANDMARKS, WORLD_RADIUS } from "./config";
import { useGameStore } from "./state";

const RIVER_INNER = WORLD_RADIUS + 10;
const RIVER_OUTER = WORLD_RADIUS + 14;
const RIVER_START = -Math.PI * 0.15;
const RIVER_SWEEP = Math.PI * 1.1;
const BRIDGE_THETA = Math.PI * 0.35;
const WATERFALL_THETA = RIVER_START + 0.03;

const DAY = {
  bg: "#3aa5e3",
  fog: ["#bcdff0", 80, 300],
  sun: { pos: [22, 22, 14], intensity: 2.2, color: "#fff0cc" },
  ambient: 0.28,
  hemisphere: ["#bfe3ff", "#7aac6e", 0.7],
  grassDark: "#4e8f46",
  grassLight: "#6ab464",
  plazaStone: "#b3a998",
  treeShade: 1,
};

const NIGHT = {
  bg: "#0a1230",
  fog: ["#050a1a", 30, 130],
  sun: { pos: [-12, 22, -6], intensity: 0.28, color: "#8da5e6" },
  ambient: 0.11,
  hemisphere: ["#1a2850", "#050a1a", 0.25],
  grassDark: "#1d3626",
  grassLight: "#2a4534",
  plazaStone: "#364150",
  treeShade: 0.35,
};

export default function World() {
  const night = useGameStore((s) => s.night);
  const T = night ? NIGHT : DAY;
  return (
    <>
      <color attach="background" args={[T.bg]} />
      <fog attach="fog" args={T.fog} />
      <hemisphereLight args={T.hemisphere} />
      <ambientLight intensity={T.ambient} />
      <directionalLight
        position={T.sun.pos}
        intensity={T.sun.intensity}
        color={T.sun.color}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0002}
        shadow-normalBias={0.05}
        shadow-camera-left={-60}
        shadow-camera-right={60}
        shadow-camera-top={60}
        shadow-camera-bottom={-60}
        shadow-camera-near={0.5}
        shadow-camera-far={110}
      />
      <Environment preset={night ? "night" : "park"} />
      {!night && <SkyDome />}
      {!night && <SkyClouds />}
      {night && <Stars radius={120} depth={40} count={3500} factor={4} fade speed={0.6} />}
      {night && <Moon />}
      <Birds />
      {!night && <HotAirBalloon />}
      {!night && <FallingPetals />}
      <Ground T={T} />
      <GroundFog />
      <StonePlaza color={T.plazaStone} />
      <River night={night} />
      <Waterfall night={night} />
      <Bridge />
      <Pond night={night} />
      <Windmill position={[0, 0, -2]} night={night} />
      <FeatureCottage position={[6, 0, 4]} rotation={-0.9} night={night} />
      <ForestGrove shade={T.treeShade} />
      <Meadow shade={T.treeShade} />
      <Rocks />
      {night && <LampPosts />}
      <Rabbits />
      <Butterflies />
    </>
  );
}

function Ground({ T }) {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <circleGeometry args={[WORLD_RADIUS + 40, 96]} />
        <meshStandardMaterial color={T.grassDark} roughness={0.98} metalness={0} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.012, 0]} receiveShadow>
        <circleGeometry args={[WORLD_RADIUS - 4, 64]} />
        <meshStandardMaterial color={T.grassLight} roughness={1} />
      </mesh>
    </group>
  );
}

function GroundFog() {
  const night = useGameStore((s) => s.night);
  if (night) return null;
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.3, 0]}>
      <ringGeometry args={[WORLD_RADIUS + 6, WORLD_RADIUS + 40, 96]} />
      <meshBasicMaterial color="#e0edf2" transparent opacity={0.18} depthWrite={false} />
    </mesh>
  );
}

function StonePlaza({ color }) {
  return (
    <group position={[0, 0, -2]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.014, 0]} receiveShadow>
        <circleGeometry args={[6, 48]} />
        <meshStandardMaterial color={color} roughness={0.95} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.015, 0]} receiveShadow>
        <ringGeometry args={[5.8, 6, 64]} />
        <meshStandardMaterial color="#908578" roughness={1} />
      </mesh>
    </group>
  );
}

function River({ night }) {
  const waveRef = useRef();
  useFrame((state) => {
    if (waveRef.current) {
      waveRef.current.material.opacity =
        0.2 + Math.abs(Math.sin(state.clock.elapsedTime * 0.8)) * 0.12;
    }
  });
  return (
    <group position={[0, 0.02, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <ringGeometry
          args={[RIVER_INNER - 0.6, RIVER_OUTER + 0.6, 96, 1, RIVER_START - 0.04, RIVER_SWEEP + 0.08]}
        />
        <meshStandardMaterial color={night ? "#4a3a26" : "#c4a678"} roughness={1} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <ringGeometry args={[RIVER_INNER, RIVER_OUTER, 96, 1, RIVER_START, RIVER_SWEEP]} />
        <meshStandardMaterial
          color={night ? "#1e3a5c" : "#3a89c2"}
          roughness={0.15}
          metalness={0.3}
          emissive={night ? "#0e2540" : "#1a5378"}
          emissiveIntensity={night ? 0.3 : 0.08}
        />
      </mesh>
      <mesh ref={waveRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.015, 0]}>
        <ringGeometry
          args={[
            RIVER_INNER + 1.0,
            RIVER_OUTER - 1.0,
            96,
            1,
            RIVER_START + 0.08,
            RIVER_SWEEP - 0.16,
          ]}
        />
        <meshBasicMaterial
          color={night ? "#b0d8ff" : "#d4eeff"}
          transparent
          opacity={0.3}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function Waterfall({ night }) {
  const r = (RIVER_INNER + RIVER_OUTER) / 2;
  const x = Math.cos(WATERFALL_THETA) * r;
  const z = -Math.sin(WATERFALL_THETA) * r;
  const yaw = Math.atan2(x, z);

  const fallRef = useRef();
  const mistRef = useRef();

  useFrame((_, dt) => {
    if (fallRef.current) {
      fallRef.current.material.map?.offset &&
        (fallRef.current.material.map.offset.y -= dt * 0.6);
    }
    if (mistRef.current) {
      mistRef.current.rotation.y += dt * 0.2;
    }
  });

  return (
    <group position={[x, 0, z]} rotation={[0, yaw, 0]}>
      {/* Cliff */}
      <mesh position={[0, 2.5, -2]} castShadow receiveShadow>
        <boxGeometry args={[7, 5, 3]} />
        <meshStandardMaterial color={night ? "#2a3540" : "#8a8f95"} roughness={1} flatShading />
      </mesh>
      <mesh position={[-2.4, 3.2, -1.2]} castShadow>
        <dodecahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial color={night ? "#354254" : "#9ea3aa"} roughness={1} flatShading />
      </mesh>
      <mesh position={[2.6, 3, -1.1]} castShadow>
        <dodecahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial color={night ? "#354254" : "#9ea3aa"} roughness={1} flatShading />
      </mesh>
      {/* Falling water */}
      <mesh ref={fallRef} position={[0, 2.6, -0.45]}>
        <planeGeometry args={[3, 5.2]} />
        <meshStandardMaterial
          color={night ? "#4b7eb5" : "#7ec3e8"}
          emissive={night ? "#2a4b74" : "#bee0f0"}
          emissiveIntensity={night ? 0.5 : 0.3}
          transparent
          opacity={0.88}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Splash mist */}
      <mesh ref={mistRef} position={[0, 0.15, 0.6]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.2, 24]} />
        <meshBasicMaterial
          color={night ? "#7ea0c6" : "#e8f4fb"}
          transparent
          opacity={0.55}
          depthWrite={false}
        />
      </mesh>
      {/* Top pool lip */}
      <mesh position={[0, 4.9, -0.3]}>
        <boxGeometry args={[3.2, 0.3, 0.4]} />
        <meshStandardMaterial color={night ? "#2f4878" : "#4d9cd0"} roughness={0.3} metalness={0.2} />
      </mesh>
    </group>
  );
}

function Bridge() {
  const r = (RIVER_INNER + RIVER_OUTER) / 2;
  const x = Math.cos(BRIDGE_THETA) * r;
  const z = -Math.sin(BRIDGE_THETA) * r;
  const yaw = Math.atan2(x, z);
  return (
    <group position={[x, 0.2, z]} rotation={[0, yaw, 0]}>
      <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 0.18, 8]} />
        <meshStandardMaterial color="#8d5a30" roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.6, 0.25, 12, 24, Math.PI]} />
        <meshStandardMaterial color="#b59674" roughness={0.95} />
      </mesh>
      {[-1.4, 1.4].map((sx, i) => (
        <group key={i}>
          <mesh position={[sx, 0.75, 0]} castShadow>
            <boxGeometry args={[0.12, 0.6, 8]} />
            <meshStandardMaterial color="#6d4322" roughness={0.9} />
          </mesh>
          {[-3.2, -1.6, 0, 1.6, 3.2].map((pz, j) => (
            <mesh key={j} position={[sx, 0.55, pz]} castShadow>
              <cylinderGeometry args={[0.06, 0.06, 0.4, 6]} />
              <meshStandardMaterial color="#6d4322" roughness={0.9} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

function Pond({ night }) {
  const waterRef = useRef();
  useFrame((state) => {
    if (waterRef.current) {
      waterRef.current.material.opacity =
        0.82 + Math.sin(state.clock.elapsedTime * 1.4) * 0.05;
    }
  });
  const lilies = useMemo(
    () => [
      { pos: [0.6, 0, 0.6], color: "#ff6b8b" },
      { pos: [-0.5, 0, 0.4], color: "#ffd166" },
      { pos: [0.2, 0, -0.8], color: "#ffffff" },
      { pos: [-0.7, 0, -0.3], color: "#ffb3d1" },
    ],
    []
  );
  return (
    <group position={[12, 0, -6]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]} receiveShadow>
        <circleGeometry args={[2.4, 32]} />
        <meshStandardMaterial color={night ? "#3a2c1e" : "#a3845a"} roughness={1} />
      </mesh>
      <mesh ref={waterRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.04, 0]}>
        <circleGeometry args={[2.1, 32]} />
        <meshStandardMaterial
          color={night ? "#1e3a5c" : "#3a89c2"}
          emissive={night ? "#0e2540" : "#1a5378"}
          emissiveIntensity={night ? 0.35 : 0.15}
          transparent
          opacity={0.85}
          roughness={0.2}
        />
      </mesh>
      {lilies.map((l, i) => (
        <group key={i} position={[l.pos[0] * 0.9, 0.06, l.pos[2] * 0.9]}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.22, 10]} />
            <meshStandardMaterial color="#3f8a52" roughness={0.9} side={THREE.DoubleSide} />
          </mesh>
          <mesh position={[0.02, 0.05, 0]}>
            <sphereGeometry args={[0.07, 10, 8]} />
            <meshStandardMaterial
              color={l.color}
              emissive={l.color}
              emissiveIntensity={0.2}
              roughness={0.8}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function FeatureCottage({ position, rotation, night }) {
  const palette = { body: "#fde79a", roof: "#c94f3d" };
  const smoke = useRef();
  useFrame((_, dt) => {
    if (smoke.current) {
      smoke.current.children.forEach((p) => {
        p.position.y += dt * 0.6;
        p.material.opacity -= dt * 0.25;
        p.scale.addScalar(dt * 0.4);
        if (p.material.opacity <= 0) {
          p.position.y = 0;
          p.material.opacity = 0.7;
          p.scale.setScalar(0.4 + Math.random() * 0.15);
        }
      });
    }
  });

  const windowGlow = night ? 2.6 : 0.35;

  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh position={[0, 0.12, 0]} receiveShadow>
        <boxGeometry args={[3.6, 0.24, 3.2]} />
        <meshStandardMaterial color="#b59674" roughness={0.95} />
      </mesh>
      <mesh position={[0, 1.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 2.2, 2.8]} />
        <meshStandardMaterial color={palette.body} roughness={0.95} />
      </mesh>
      <mesh position={[0, 2.95, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[2.5, 1.5, 4]} />
        <meshStandardMaterial color={palette.roof} roughness={0.85} />
      </mesh>
      <mesh position={[0.9, 3.0, -0.6]} castShadow>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
        <meshStandardMaterial color="#a0755a" roughness={0.95} />
      </mesh>
      <mesh position={[0, 0.8, 1.41]} castShadow>
        <boxGeometry args={[0.7, 1.5, 0.06]} />
        <meshStandardMaterial color="#5a3a1d" roughness={0.9} />
      </mesh>
      <mesh position={[-1.0, 1.5, 1.41]}>
        <planeGeometry args={[0.7, 0.7]} />
        <meshStandardMaterial color="#fff6c5" emissive="#ffd166" emissiveIntensity={windowGlow} />
      </mesh>
      <mesh position={[1.0, 1.5, 1.41]}>
        <planeGeometry args={[0.7, 0.7]} />
        <meshStandardMaterial color="#fff6c5" emissive="#ffd166" emissiveIntensity={windowGlow} />
      </mesh>
      {night && (
        <pointLight position={[0, 1.8, 1.9]} intensity={2} distance={9} color="#ffd166" />
      )}
      <mesh position={[0.7, 0.28, 1.55]} castShadow>
        <cylinderGeometry args={[0.15, 0.12, 0.2, 10]} />
        <meshStandardMaterial color="#a86a4a" roughness={0.95} />
      </mesh>
      <mesh position={[0.7, 0.46, 1.55]}>
        <sphereGeometry args={[0.18, 10, 8]} />
        <meshStandardMaterial color="#ff6b8b" roughness={0.85} />
      </mesh>
      <group ref={smoke} position={[0.9, 3.7, -0.6]}>
        {Array.from({ length: 4 }).map((_, i) => (
          <mesh key={i} position={[0, i * 0.4, 0]}>
            <sphereGeometry args={[0.25, 10, 8]} />
            <meshStandardMaterial
              color={night ? "#cfd4dc" : "#f3f3f3"}
              transparent
              opacity={0.7 - i * 0.15}
            />
          </mesh>
        ))}
      </group>
      <ContactShadows position={[0, 0.01, 0]} opacity={0.55} scale={8} blur={2.4} far={6} />
    </group>
  );
}

function Windmill({ position, night }) {
  const blades = useRef();
  useFrame((_, dt) => {
    if (blades.current) blades.current.rotation.z -= dt * 1.0;
  });
  const windowGlow = night ? 2.6 : 0.35;
  return (
    <group position={position}>
      {/* Stone base */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[2.4, 2.7, 0.8, 16]} />
        <meshStandardMaterial color="#6b5f50" roughness={1} />
      </mesh>
      {/* Main tower - taller, darker */}
      <mesh position={[0, 4.2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.1, 2.0, 7, 10]} />
        <meshStandardMaterial color="#cfc2a8" roughness={0.95} />
      </mesh>
      {/* Stripe trim */}
      <mesh position={[0, 2.2, 0]}>
        <cylinderGeometry args={[1.82, 1.82, 0.18, 16]} />
        <meshStandardMaterial color="#6b5f50" roughness={1} />
      </mesh>
      <mesh position={[0, 5.3, 0]}>
        <cylinderGeometry args={[1.28, 1.28, 0.18, 16]} />
        <meshStandardMaterial color="#6b5f50" roughness={1} />
      </mesh>
      {/* Dome roof */}
      <mesh position={[0, 8.0, 0]} castShadow>
        <sphereGeometry args={[1.25, 18, 14, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#6a3a22" roughness={0.85} />
      </mesh>
      <mesh position={[0, 8.9, 0]} castShadow>
        <coneGeometry args={[0.18, 0.6, 12]} />
        <meshStandardMaterial color="#4a2a15" roughness={0.9} />
      </mesh>
      {/* Door */}
      <mesh position={[0, 1.4, 2.0]} castShadow>
        <boxGeometry args={[0.8, 1.8, 0.12]} />
        <meshStandardMaterial color="#4a2a15" roughness={0.9} />
      </mesh>
      {/* Windows */}
      {[3.4, 5.7].map((y, i) => (
        <group key={i}>
          <mesh position={[1.6, y, 0]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry args={[0.55, 0.55]} />
            <meshStandardMaterial
              color="#fff6c5"
              emissive="#ffd166"
              emissiveIntensity={windowGlow}
            />
          </mesh>
          <mesh position={[-1.6, y, 0]} rotation={[0, -Math.PI / 2, 0]}>
            <planeGeometry args={[0.55, 0.55]} />
            <meshStandardMaterial
              color="#fff6c5"
              emissive="#ffd166"
              emissiveIntensity={windowGlow}
            />
          </mesh>
        </group>
      ))}
      {night && (
        <pointLight position={[0, 5, 0]} intensity={2.2} distance={12} color="#ffd166" />
      )}
      {/* Hub + blades */}
      <group position={[0, 7.1, 1.6]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.28, 0.28, 0.5, 16]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color="#3a3a3a" roughness={0.4} metalness={0.5} />
        </mesh>
        <group ref={blades}>
          {[0, 1, 2, 3].map((i) => (
            <group key={i} rotation={[0, 0, (i * Math.PI) / 2]}>
              <mesh position={[0, 2.2, 0]} castShadow>
                <boxGeometry args={[0.4, 4.0, 0.08]} />
                <meshStandardMaterial color="#efe4c8" roughness={0.9} />
              </mesh>
              <mesh position={[0.3, 2.2, 0.05]}>
                <boxGeometry args={[1.0, 3.8, 0.04]} />
                <meshStandardMaterial color="#cdbd8f" roughness={0.9} />
              </mesh>
            </group>
          ))}
        </group>
      </group>
      <ContactShadows position={[0, 0.02, 0]} opacity={0.65} scale={10} blur={2.4} far={8} />
    </group>
  );
}

function SwayTree({ position, scale = 1, phase, children }) {
  const canopy = useRef();
  useFrame((state) => {
    if (canopy.current) {
      const t = state.clock.elapsedTime;
      canopy.current.rotation.z = Math.sin(t * 1.1 + phase) * 0.045;
      canopy.current.rotation.x = Math.cos(t * 1.3 + phase) * 0.03;
    }
  });
  return (
    <group position={position} scale={scale}>
      {children({ canopy })}
    </group>
  );
}

function OakTree({ position, scale, tint, phase }) {
  const shades = useMemo(() => {
    const base = new THREE.Color(tint);
    return {
      main: base,
      dark: base.clone().multiplyScalar(0.82),
      light: base.clone().lerp(new THREE.Color("#ffffff"), 0.14),
    };
  }, [tint]);
  return (
    <SwayTree position={position} scale={scale} phase={phase}>
      {({ canopy }) => (
        <>
          <mesh position={[0, 0.9, 0]} castShadow>
            <cylinderGeometry args={[0.2, 0.32, 1.8, 10]} />
            <meshStandardMaterial color="#6d4524" roughness={0.95} />
          </mesh>
          <group ref={canopy} position={[0, 1.8, 0]}>
            <mesh position={[0, 0.6, 0]} castShadow>
              <sphereGeometry args={[1.15, 14, 12]} />
              <meshStandardMaterial color={shades.main} roughness={0.95} />
            </mesh>
            <mesh position={[0.55, 0.45, 0.35]} castShadow>
              <sphereGeometry args={[0.8, 12, 10]} />
              <meshStandardMaterial color={shades.dark} roughness={0.95} />
            </mesh>
            <mesh position={[-0.55, 0.7, -0.25]} castShadow>
              <sphereGeometry args={[0.75, 12, 10]} />
              <meshStandardMaterial color={shades.light} roughness={0.95} />
            </mesh>
            <mesh position={[0.1, 1.25, 0.15]} castShadow>
              <sphereGeometry args={[0.65, 12, 10]} />
              <meshStandardMaterial color={shades.main} roughness={0.95} />
            </mesh>
          </group>
        </>
      )}
    </SwayTree>
  );
}

function PineTree({ position, scale, tint, phase }) {
  const shades = useMemo(() => {
    const base = new THREE.Color(tint);
    return {
      main: base,
      dark: base.clone().multiplyScalar(0.78),
    };
  }, [tint]);
  return (
    <SwayTree position={position} scale={scale} phase={phase}>
      {({ canopy }) => (
        <>
          <mesh position={[0, 0.7, 0]} castShadow>
            <cylinderGeometry args={[0.14, 0.2, 1.4, 10]} />
            <meshStandardMaterial color="#5d3e21" roughness={0.95} />
          </mesh>
          <group ref={canopy} position={[0, 1.4, 0]}>
            <mesh position={[0, 0.3, 0]} castShadow>
              <coneGeometry args={[1.0, 1.4, 12]} />
              <meshStandardMaterial color={shades.dark} roughness={0.95} />
            </mesh>
            <mesh position={[0, 1.15, 0]} castShadow>
              <coneGeometry args={[0.8, 1.2, 12]} />
              <meshStandardMaterial color={shades.main} roughness={0.95} />
            </mesh>
            <mesh position={[0, 1.9, 0]} castShadow>
              <coneGeometry args={[0.55, 0.9, 12]} />
              <meshStandardMaterial color={shades.main} roughness={0.95} />
            </mesh>
          </group>
        </>
      )}
    </SwayTree>
  );
}

function Bush({ position, scale, tint }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.35, 0]} castShadow>
        <sphereGeometry args={[0.55, 12, 10]} />
        <meshStandardMaterial color={tint} roughness={0.95} />
      </mesh>
      <mesh position={[0.3, 0.3, 0.15]} castShadow>
        <sphereGeometry args={[0.4, 12, 10]} />
        <meshStandardMaterial color={tint} roughness={0.95} />
      </mesh>
      <mesh position={[-0.25, 0.3, -0.15]} castShadow>
        <sphereGeometry args={[0.38, 12, 10]} />
        <meshStandardMaterial color={tint} roughness={0.95} />
      </mesh>
    </group>
  );
}

function ForestGrove({ shade }) {
  const trees = useMemo(() => {
    const greens = ["#4d8f38", "#437d30", "#5fa640", "#356a24", "#3d7828"];
    const out = [];
    for (let i = 0; i < 46; i++) {
      const angle = -Math.PI * 0.7 + (Math.random() - 0.5) * Math.PI * 0.9;
      const r = WORLD_RADIUS - 4 + Math.random() * 10;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const distToCenter = Math.hypot(x, z);
      if (distToCenter > RIVER_INNER - 1 && distToCenter < RIVER_OUTER + 1) continue;
      const safe = !LANDMARKS.some(
        (lm) => Math.hypot(x - lm.position.x, z - lm.position.z) < 5
      );
      if (!safe) continue;
      out.push({
        position: [x, 0, z],
        scale: 1 + Math.random() * 0.7,
        tint: greens[i % greens.length],
        type: Math.random() < 0.55 ? "pine" : Math.random() < 0.8 ? "oak" : "bush",
        phase: Math.random() * Math.PI * 2,
      });
    }
    return out;
  }, []);
  return (
    <group>
      {trees.map((t, i) => {
        const c = new THREE.Color(t.tint).multiplyScalar(shade);
        const p = { ...t, tint: `#${c.getHexString()}` };
        if (t.type === "pine") return <PineTree key={i} {...p} />;
        if (t.type === "oak") return <OakTree key={i} {...p} />;
        return <Bush key={i} {...p} />;
      })}
    </group>
  );
}

function Meadow({ shade }) {
  const items = useMemo(() => {
    const out = [];
    const flowerColors = ["#ff6b8b", "#ffd166", "#ffffff", "#b28dff", "#ff9c6a"];
    const greens = ["#6fb74a", "#86ca66"];
    const center = [-10, 0, 10];
    const patchRadius = 3.2;
    for (let i = 0; i < 22; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * patchRadius;
      const x = center[0] + Math.cos(a) * r;
      const z = center[2] + Math.sin(a) * r;
      const safe =
        !LANDMARKS.some(
          (lm) => Math.hypot(x - lm.position.x, z - lm.position.z) < 2.5
        ) && Math.hypot(x, z) > 7;
      if (!safe) continue;
      out.push({
        position: [x, 0, z],
        flowerColor: flowerColors[i % flowerColors.length],
        kind: i % 7 === 0 ? "bush" : "flower",
        scale: 0.75 + Math.random() * 0.3,
        phase: Math.random() * Math.PI * 2,
        green: greens[i % greens.length],
      });
    }
    return out;
  }, []);
  return (
    <group>
      {items.map((it, i) => {
        if (it.kind === "bush") {
          const c = new THREE.Color(it.green).multiplyScalar(shade);
          return (
            <Bush
              key={i}
              position={it.position}
              scale={it.scale}
              tint={`#${c.getHexString()}`}
            />
          );
        }
        return <Wildflower key={i} {...it} shade={shade} />;
      })}
    </group>
  );
}

function Wildflower({ position, flowerColor, phase, scale, shade }) {
  const stem = useRef();
  useFrame((state) => {
    if (stem.current) {
      stem.current.rotation.z = Math.sin(state.clock.elapsedTime * 2 + phase) * 0.1;
    }
  });
  const petalColor = useMemo(() => {
    const c = new THREE.Color(flowerColor).multiplyScalar(shade);
    return `#${c.getHexString()}`;
  }, [flowerColor, shade]);
  const centerColor = useMemo(() => {
    const c = new THREE.Color("#ffd95c").multiplyScalar(shade);
    return `#${c.getHexString()}`;
  }, [shade]);
  const leafColor = useMemo(() => {
    const c = new THREE.Color("#4a8c38").multiplyScalar(shade);
    return `#${c.getHexString()}`;
  }, [shade]);

  const stemHeight = scale * 0.75;
  const headY = stemHeight + 0.04;
  const petalSize = 0.11 * scale;

  const petals = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return {
          x: Math.cos(angle) * petalSize * 0.85,
          z: Math.sin(angle) * petalSize * 0.85,
          rotY: angle,
        };
      }),
    [petalSize]
  );

  return (
    <group ref={stem} position={position}>
      <mesh position={[0, stemHeight / 2, 0]} castShadow>
        <cylinderGeometry args={[0.025, 0.035, stemHeight, 6]} />
        <meshStandardMaterial color={leafColor} roughness={0.95} />
      </mesh>
      <mesh
        position={[0.12 * scale, stemHeight * 0.45, 0]}
        rotation={[0, 0, -Math.PI / 4]}
        scale={[0.18 * scale, 0.1 * scale, 0.04 * scale]}
        castShadow
      >
        <sphereGeometry args={[1, 8, 6]} />
        <meshStandardMaterial color={leafColor} roughness={0.9} side={THREE.DoubleSide} />
      </mesh>
      {petals.map((p, i) => (
        <mesh
          key={i}
          position={[p.x, headY, p.z]}
          rotation={[Math.PI / 2, 0, p.rotY]}
          scale={[petalSize, petalSize * 0.55, 0.03 * scale]}
          castShadow
        >
          <sphereGeometry args={[1, 10, 8]} />
          <meshStandardMaterial
            color={petalColor}
            roughness={0.7}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
      <mesh position={[0, headY, 0]} castShadow>
        <sphereGeometry args={[0.075 * scale, 10, 8]} />
        <meshStandardMaterial
          color={centerColor}
          emissive={centerColor}
          emissiveIntensity={0.1}
          roughness={0.85}
        />
      </mesh>
    </group>
  );
}

function Rocks() {
  const rocks = useMemo(() => {
    const out = [];
    for (let i = 0; i < 9; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 12 + Math.random() * (WORLD_RADIUS - 15);
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const safe = !LANDMARKS.some(
        (lm) => Math.hypot(x - lm.position.x, z - lm.position.z) < 5
      );
      if (!safe) continue;
      out.push({
        pos: [x, 0.15, z],
        scale: 0.35 + Math.random() * 0.5,
      });
    }
    return out;
  }, []);
  return (
    <group>
      {rocks.map((r, i) => (
        <mesh key={i} position={r.pos} scale={r.scale} castShadow receiveShadow>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#7b8087" roughness={1} flatShading />
        </mesh>
      ))}
    </group>
  );
}

function LampPosts() {
  const positions = useMemo(() => {
    return LANDMARKS.map((lm) => {
      const dx = lm.position.x;
      const dz = lm.position.z;
      const len = Math.hypot(dx, dz);
      return [(dx / len) * (len * 0.55), 0, (dz / len) * (len * 0.55)];
    });
  }, []);
  return (
    <group>
      {positions.map((p, i) => (
        <LampPost key={i} position={p} />
      ))}
    </group>
  );
}

function LampPost({ position }) {
  const night = useGameStore((s) => s.night);
  return (
    <group position={position}>
      <mesh position={[0, 1.2, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.08, 2.4, 8]} />
        <meshStandardMaterial color="#3a2a1a" roughness={0.9} />
      </mesh>
      <mesh position={[0, 2.55, 0]} castShadow>
        <coneGeometry args={[0.22, 0.3, 6]} />
        <meshStandardMaterial color="#3a2a1a" roughness={0.9} />
      </mesh>
      <mesh position={[0, 2.3, 0]}>
        <sphereGeometry args={[0.18, 12, 10]} />
        <meshStandardMaterial
          color="#fff4d6"
          emissive="#ffd166"
          emissiveIntensity={night ? 3.2 : 0.15}
          transparent
          opacity={0.95}
        />
      </mesh>
      {night && (
        <pointLight position={[0, 2.3, 0]} intensity={1.6} distance={8} color="#ffd166" />
      )}
    </group>
  );
}

function Birds() {
  const flocks = useMemo(
    () => [
      { radius: 22, height: 14, speed: 0.25, offset: 0 },
      { radius: 16, height: 18, speed: -0.35, offset: Math.PI * 0.6 },
      { radius: 28, height: 12, speed: 0.18, offset: Math.PI * 1.2 },
    ],
    []
  );
  return (
    <group>
      {flocks.map((f, i) => (
        <Flock key={i} {...f} />
      ))}
    </group>
  );
}

function Flock({ radius, height, speed, offset }) {
  const group = useRef();
  const wingsRefs = useRef([]);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      const a = t * speed + offset;
      group.current.position.x = Math.cos(a) * radius;
      group.current.position.z = Math.sin(a) * radius;
      group.current.position.y = height + Math.sin(t * 0.5) * 0.5;
      group.current.rotation.y = -a + Math.PI / 2;
    }
    wingsRefs.current.forEach((w, i) => {
      if (!w) return;
      w.rotation.z = Math.sin(t * 8 + i * 0.6) * 0.6;
    });
  });
  const members = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => ({
        offset: [i * 0.8 - 0.8, (i % 2) * 0.25, (i % 2) * 0.4 - 0.2],
      })),
    []
  );
  return (
    <group ref={group}>
      {members.map((m, i) => (
        <group key={i} position={m.offset}>
          <mesh>
            <sphereGeometry args={[0.12, 8, 6]} />
            <meshStandardMaterial color="#333" />
          </mesh>
          <group ref={(el) => (wingsRefs.current[i] = el)}>
            <mesh rotation={[0, 0, 0.3]} position={[0.25, 0, 0]}>
              <boxGeometry args={[0.5, 0.03, 0.2]} />
              <meshStandardMaterial color="#222" />
            </mesh>
            <mesh rotation={[0, 0, -0.3]} position={[-0.25, 0, 0]}>
              <boxGeometry args={[0.5, 0.03, 0.2]} />
              <meshStandardMaterial color="#222" />
            </mesh>
          </group>
        </group>
      ))}
    </group>
  );
}

function HotAirBalloon() {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime;
      ref.current.position.x = 12 + Math.sin(t * 0.12) * 4;
      ref.current.position.z = -16 + Math.cos(t * 0.09) * 4;
      ref.current.position.y = 13 + Math.sin(t * 0.4) * 0.5;
      ref.current.rotation.y = Math.sin(t * 0.1) * 0.3;
    }
  });
  return (
    <group ref={ref} position={[12, 13, -16]}>
      <mesh>
        <sphereGeometry args={[2.5, 20, 18, 0, Math.PI * 2, 0, Math.PI * 0.8]} />
        <meshStandardMaterial color="#ff6b8b" roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.1, 0]}>
        <torusGeometry args={[2.4, 0.15, 8, 24]} />
        <meshStandardMaterial color="#ffd166" roughness={0.7} />
      </mesh>
      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i * Math.PI) / 2) * 0.8,
            -1.4,
            Math.sin((i * Math.PI) / 2) * 0.8,
          ]}
        >
          <cylinderGeometry args={[0.02, 0.02, 1.5, 6]} />
          <meshStandardMaterial color="#6d4a2b" />
        </mesh>
      ))}
      <mesh position={[0, -2.2, 0]}>
        <boxGeometry args={[1.4, 0.8, 1.4]} />
        <meshStandardMaterial color="#8d5a30" roughness={0.9} />
      </mesh>
    </group>
  );
}

function FallingPetals() {
  const COUNT = 50;
  const data = useMemo(
    () =>
      Array.from({ length: COUNT }, () => ({
        x: (Math.random() - 0.5) * (WORLD_RADIUS * 2),
        y: Math.random() * 18 + 5,
        z: (Math.random() - 0.5) * (WORLD_RADIUS * 2),
        fall: 0.4 + Math.random() * 0.5,
        sway: 0.4 + Math.random() * 1,
        phase: Math.random() * Math.PI * 2,
        color: ["#ffd1dc", "#ffe3f1", "#fff7c5", "#ffffff"][
          Math.floor(Math.random() * 4)
        ],
      })),
    []
  );
  const refs = useRef([]);
  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    refs.current.forEach((r, i) => {
      if (!r) return;
      const d = data[i];
      r.position.y -= d.fall * dt;
      r.position.x += Math.sin(t + d.phase) * d.sway * dt;
      r.rotation.z += dt * 0.6;
      r.rotation.y += dt * 0.3;
      if (r.position.y < 0.2) r.position.y = 18 + Math.random() * 6;
    });
  });
  return (
    <group>
      {data.map((p, i) => (
        <mesh
          key={i}
          ref={(el) => (refs.current[i] = el)}
          position={[p.x, p.y, p.z]}
        >
          <planeGeometry args={[0.18, 0.14]} />
          <meshBasicMaterial color={p.color} transparent opacity={0.8} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}

function Moon() {
  return (
    <group position={[-40, 28, -60]}>
      <mesh>
        <sphereGeometry args={[3.5, 32, 32]} />
        <meshBasicMaterial color="#fdf6e3" />
      </mesh>
      <pointLight intensity={0.3} distance={200} color="#cfd6ff" />
    </group>
  );
}

function SkyDome() {
  const mat = useMemo(() => {
    return new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      toneMapped: false,
      uniforms: {
        topColor: { value: new THREE.Color("#1e6fc0") },
        horizonColor: { value: new THREE.Color("#bde2f7") },
        offset: { value: 30 },
        exponent: { value: 0.7 },
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 horizonColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition + vec3(0.0, offset, 0.0)).y;
          float t = pow(max(h, 0.0), exponent);
          vec3 col = mix(horizonColor, topColor, t);
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
  }, []);
  return (
    <mesh material={mat}>
      <sphereGeometry args={[400, 32, 16]} />
    </mesh>
  );
}

function SkyClouds() {
  const clouds = useMemo(
    () => [
      { pos: [-34, 22, -26], scale: 3.2, drift: 0.08 },
      { pos: [30, 26, -18], scale: 4, drift: -0.06 },
      { pos: [10, 28, 36], scale: 3.5, drift: 0.1 },
      { pos: [-40, 20, 18], scale: 3, drift: -0.12 },
      { pos: [0, 32, -42], scale: 4.5, drift: 0.05 },
      { pos: [42, 24, 8], scale: 3.2, drift: 0.09 },
      { pos: [-14, 30, 40], scale: 3.6, drift: -0.07 },
    ],
    []
  );
  const refs = useRef([]);
  useFrame((state, dt) => {
    refs.current.forEach((g, i) => {
      if (!g) return;
      g.position.x += clouds[i].drift * dt;
      if (g.position.x > 60) g.position.x = -60;
      if (g.position.x < -60) g.position.x = 60;
    });
  });
  return (
    <group>
      {clouds.map((c, i) => (
        <group
          key={i}
          ref={(el) => (refs.current[i] = el)}
          position={c.pos}
          scale={c.scale}
        >
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[1.1, 14, 12]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#f3f7fc"
              emissiveIntensity={0.35}
              roughness={1}
            />
          </mesh>
          <mesh position={[1.25, -0.15, 0.3]}>
            <sphereGeometry args={[0.85, 14, 12]} />
            <meshStandardMaterial color="#ffffff" roughness={1} />
          </mesh>
          <mesh position={[-1.1, -0.1, -0.25]}>
            <sphereGeometry args={[0.78, 14, 12]} />
            <meshStandardMaterial color="#ffffff" roughness={1} />
          </mesh>
          <mesh position={[0.5, 0.45, 0.4]}>
            <sphereGeometry args={[0.65, 14, 12]} />
            <meshStandardMaterial color="#ffffff" roughness={1} />
          </mesh>
          <mesh position={[-0.55, 0.38, 0.3]}>
            <sphereGeometry args={[0.6, 14, 12]} />
            <meshStandardMaterial color="#ffffff" roughness={1} />
          </mesh>
          <mesh position={[0.2, -0.3, -0.5]}>
            <sphereGeometry args={[0.55, 14, 12]} />
            <meshStandardMaterial color="#ffffff" roughness={1} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Rabbits() {
  const rabbits = useMemo(
    () =>
      [
        { start: [-8, 0, 8], phase: 0, color: "#f5efe3" },
        { start: [10, 0, -2], phase: 1.2, color: "#d9cdb4" },
        { start: [-4, 0, -10], phase: 2.4, color: "#e8dfc8" },
      ],
    []
  );
  return (
    <group>
      {rabbits.map((r, i) => (
        <Rabbit key={i} {...r} />
      ))}
    </group>
  );
}

function Rabbit({ start, phase, color }) {
  const group = useRef();
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime + phase;
    const hop = Math.max(0, Math.sin(t * 2.2));
    group.current.position.x = start[0] + Math.sin(t * 0.3) * 2.5;
    group.current.position.z = start[2] + Math.cos(t * 0.3) * 2.5;
    group.current.position.y = hop * 0.35;
    group.current.rotation.y = Math.atan2(
      Math.cos(t * 0.3) * 0.3,
      -Math.sin(t * 0.3) * 0.3
    );
  });
  return (
    <group ref={group} position={start}>
      <mesh position={[0, 0.18, 0]} castShadow>
        <sphereGeometry args={[0.18, 14, 10]} />
        <meshStandardMaterial color={color} roughness={0.9} />
      </mesh>
      <mesh position={[0.18, 0.3, 0]} castShadow>
        <sphereGeometry args={[0.12, 10, 8]} />
        <meshStandardMaterial color={color} roughness={0.9} />
      </mesh>
      <mesh position={[0.18, 0.45, 0.05]} castShadow>
        <coneGeometry args={[0.04, 0.18, 6]} />
        <meshStandardMaterial color={color} roughness={0.9} />
      </mesh>
      <mesh position={[0.18, 0.45, -0.05]} castShadow>
        <coneGeometry args={[0.04, 0.18, 6]} />
        <meshStandardMaterial color={color} roughness={0.9} />
      </mesh>
      <mesh position={[-0.2, 0.22, 0]}>
        <sphereGeometry args={[0.06, 8, 6]} />
        <meshStandardMaterial color="#ffffff" roughness={0.9} />
      </mesh>
    </group>
  );
}

function Butterflies() {
  const night = useGameStore((s) => s.night);
  const butterflies = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        center: [
          Math.cos((i / 6) * Math.PI * 2) * 9,
          1 + Math.random() * 1.5,
          Math.sin((i / 6) * Math.PI * 2) * 9,
        ],
        color: ["#ff6b8b", "#ffd166", "#b28dff", "#ffffff"][i % 4],
        phase: i * 0.9,
      })),
    []
  );
  if (night) return null;
  return (
    <group>
      {butterflies.map((b, i) => (
        <Butterfly key={i} {...b} />
      ))}
    </group>
  );
}

function Butterfly({ center, color, phase }) {
  const group = useRef();
  const wingL = useRef();
  const wingR = useRef();
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime + phase;
    group.current.position.x = center[0] + Math.sin(t * 0.7) * 1.4;
    group.current.position.y = center[1] + Math.sin(t * 1.4) * 0.5;
    group.current.position.z = center[2] + Math.cos(t * 0.9) * 1.4;
    group.current.rotation.y = t * 0.5;
    const flap = Math.sin(t * 14) * 0.8;
    if (wingL.current) wingL.current.rotation.y = flap;
    if (wingR.current) wingR.current.rotation.y = -flap;
  });
  return (
    <group ref={group} position={center}>
      <mesh>
        <sphereGeometry args={[0.04, 6, 6]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <group ref={wingL} position={[0.0, 0, 0]}>
        <mesh position={[0.18, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.16, 10]} />
          <meshStandardMaterial color={color} side={THREE.DoubleSide} roughness={0.8} />
        </mesh>
      </group>
      <group ref={wingR}>
        <mesh position={[-0.18, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.16, 10]} />
          <meshStandardMaterial color={color} side={THREE.DoubleSide} roughness={0.8} />
        </mesh>
      </group>
    </group>
  );
}

