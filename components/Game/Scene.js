import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  Vignette,
  DepthOfField,
} from "@react-three/postprocessing";
import * as THREE from "three";
import World from "./World";
import Player from "./Player";
import Landmark from "./Landmark";
import { LANDMARKS } from "./config";
import { useGameStore } from "./state";

export default function Scene() {
  const panelOpen = useGameStore((s) => !!s.openSection);
  return (
    <Canvas
      shadows="soft"
      dpr={[1, 1.8]}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.0,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      camera={{ position: [0, 9, 18], fov: 55, near: 0.1, far: 600 }}
    >
      <Suspense fallback={null}>
        <World />
        {LANDMARKS.map((lm) => (
          <Landmark key={lm.id} data={lm} />
        ))}
        <Player />
        <EffectComposer multisampling={0}>
          <Bloom
            intensity={0.45}
            luminanceThreshold={0.85}
            luminanceSmoothing={0.2}
            mipmapBlur
          />
          <DepthOfField
            focusDistance={0.0}
            focalLength={panelOpen ? 0.05 : 0.2}
            bokehScale={panelOpen ? 5 : 0}
          />
          <Vignette offset={0.5} darkness={0.2} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
