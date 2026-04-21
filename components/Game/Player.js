import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { INTERACT_RADIUS, LANDMARKS, PLAYER_START, WORLD_RADIUS } from "./config";
import { useGameStore } from "./state";

useGLTF.preload("/models/RobotExpressive.glb");

const ROBOT_SCALE = 0.55;
const IDLE_CLIP = "Idle";
const WALK_CLIP = "Walking";
const RUN_CLIP = "Running";

const MIN_PITCH = 0.1;
const MAX_PITCH = 1.25;
const MIN_DIST = 3.5;
const MAX_DIST = 18;
const JUMP_VELOCITY = 5.5;
const GRAVITY = 16;
const EMOTE_CLIPS = new Set(["Wave", "ThumbsUp", "Yes", "No", "Jump", "Dance"]);

export default function Player() {
  const group = useRef();
  const modelRoot = useRef();
  const keys = useRef({});
  const { camera } = useThree();
  const camTarget = useRef(new THREE.Vector3());
  const heading = useRef(Math.PI);
  const moving = useRef(false);
  const verticalVel = useRef(0);
  const grounded = useRef(true);
  const dustRefs = useRef([]);
  const dustData = useRef([]);
  const [actionName, setActionName] = useState(IDLE_CLIP);

  const yawOffset = useRef(0);
  const pitch = useRef(0.22);
  const distance = useRef(9);
  const posUpdateAccum = useRef(0);
  const emote = useRef(null);

  const { scene, animations } = useGLTF("/models/RobotExpressive.glb");
  const { actions } = useAnimations(animations, modelRoot);

  const dustPool = useMemo(
    () =>
      Array.from({ length: 12 }, () => ({
        pos: new THREE.Vector3(0, -10, 0),
        vel: new THREE.Vector3(),
        life: 0,
      })),
    []
  );
  dustData.current = dustPool;

  useEffect(() => {
    scene.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
  }, [scene]);

  useEffect(() => {
    const a = actions[actionName];
    if (!a) return;
    a.reset().fadeIn(0.2);
    if (EMOTE_CLIPS.has(actionName)) {
      a.setLoop(THREE.LoopOnce, 1);
      a.clampWhenFinished = true;
    } else {
      a.setLoop(THREE.LoopRepeat, Infinity);
      a.clampWhenFinished = false;
    }
    a.play();
    return () => {
      a.fadeOut(0.2);
    };
  }, [actionName, actions]);

  useEffect(() => {
    const playEmote = (clip) => {
      const panelOpen = useGameStore.getState().openSection;
      if (panelOpen) return;
      const a = actions[clip];
      if (!a) return;
      emote.current = clip;
      setActionName(clip);
      const durationMs = a.getClip().duration * 1000;
      setTimeout(() => {
        if (emote.current === clip) emote.current = null;
      }, Math.max(400, durationMs));
    };

    const down = (e) => {
      keys.current[e.code] = true;
      if (e.code === "KeyE" || e.code === "Enter") {
        const { nearby, open, openSection } = useGameStore.getState();
        if (nearby && !openSection) {
          open(nearby);
          playEmote("Wave");
        }
      }
      if (e.code === "Space") {
        const { openSection } = useGameStore.getState();
        if (!openSection && grounded.current) {
          verticalVel.current = JUMP_VELOCITY;
          grounded.current = false;
          playEmote("Jump");
        }
      }
      if (e.code === "KeyX") playEmote("Dance");
      if (e.code === "Digit1") playEmote("Wave");
      if (e.code === "Digit2") playEmote("ThumbsUp");
      if (e.code === "Digit3") playEmote("Yes");
      if (e.code === "Digit4") playEmote("No");
      if (e.code === "Escape") useGameStore.getState().close();
    };
    const up = (e) => {
      keys.current[e.code] = false;
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  useEffect(() => {
    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    const isOrbitTarget = (el) => {
      if (!el) return false;
      if (el.closest && el.closest("[data-no-orbit]")) return false;
      const tag = el.tagName;
      if (tag === "BUTTON" || tag === "A" || tag === "INPUT") return false;
      return true;
    };

    const onDown = (e) => {
      if (e.pointerType === "touch") return;
      if (!isOrbitTarget(e.target)) return;
      const panelOpen = useGameStore.getState().openSection;
      if (panelOpen) return;
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      document.body.style.cursor = "grabbing";
    };
    const onMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      yawOffset.current -= dx * 0.005;
      pitch.current = Math.max(MIN_PITCH, Math.min(MAX_PITCH, pitch.current + dy * 0.004));
    };
    const onUp = () => {
      dragging = false;
      document.body.style.cursor = "";
    };
    const onWheel = (e) => {
      const panelOpen = useGameStore.getState().openSection;
      if (panelOpen) return;
      distance.current = Math.max(
        MIN_DIST,
        Math.min(MAX_DIST, distance.current + e.deltaY * 0.01)
      );
    };

    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  useEffect(() => {
    if (group.current) {
      group.current.position.copy(PLAYER_START).setY(0);
      group.current.rotation.y = heading.current;
    }
  }, []);

  useFrame((state, dt) => {
    if (!group.current) return;
    const panelOpen = useGameStore.getState().openSection;
    const virtual = useGameStore.getState().input;
    const k = keys.current;

    let forward = 0;
    let turn = 0;
    let sprint = false;
    if (!panelOpen) {
      if (k.KeyW || k.ArrowUp) forward += 1;
      if (k.KeyS || k.ArrowDown) forward -= 1;
      if (k.KeyA || k.ArrowLeft) turn += 1;
      if (k.KeyD || k.ArrowRight) turn -= 1;
      forward += -virtual.y;
      turn += -virtual.x;
      sprint = !!k.ShiftLeft || !!k.ShiftRight;
    }

    const turnSpeed = 2.8;
    const walkSpeed = 5;
    const runSpeed = 10;
    const moveSpeed = sprint ? runSpeed : walkSpeed;

    heading.current += turn * turnSpeed * dt;
    group.current.rotation.y = heading.current;

    const pos = group.current.position;
    const isMoving = Math.abs(forward) > 0.05;
    if (isMoving) {
      const dx = Math.sin(heading.current) * forward * moveSpeed * dt;
      const dz = Math.cos(heading.current) * forward * moveSpeed * dt;
      pos.x += dx;
      pos.z += dz;
    }

    // Vertical physics (jump + gravity)
    verticalVel.current -= GRAVITY * dt;
    pos.y += verticalVel.current * dt;
    if (pos.y <= 0) {
      if (!grounded.current && verticalVel.current < -1) {
        spawnDust(pos, dustPool);
      }
      pos.y = 0;
      verticalVel.current = 0;
      grounded.current = true;
    } else {
      grounded.current = false;
    }

    // Dust particles while running
    if (isMoving && sprint && grounded.current && Math.random() < 0.3) {
      spawnDust(pos, dustPool);
    }
    updateDust(dustPool, dustRefs.current, dt);

    if (emote.current && isMoving) {
      emote.current = null;
    }

    const desiredAnim = emote.current
      ? emote.current
      : panelOpen
      ? IDLE_CLIP
      : isMoving
      ? sprint
        ? RUN_CLIP
        : WALK_CLIP
      : IDLE_CLIP;
    if (desiredAnim !== actionName) {
      moving.current = isMoving;
      setActionName(desiredAnim);
    }

    const r = Math.hypot(pos.x, pos.z);
    if (r > WORLD_RADIUS) {
      pos.x *= WORLD_RADIUS / r;
      pos.z *= WORLD_RADIUS / r;
    }

    let nearestId = null;
    let nearestDist = INTERACT_RADIUS;
    for (const lm of LANDMARKS) {
      const d = Math.hypot(pos.x - lm.position.x, pos.z - lm.position.z);
      if (d < nearestDist) {
        nearestDist = d;
        nearestId = lm.id;
      }
    }
    useGameStore.getState().setNearby(nearestId);

    posUpdateAccum.current += dt;
    if (posUpdateAccum.current > 0.08) {
      posUpdateAccum.current = 0;
      useGameStore.getState().setPlayerTransform(pos.x, pos.z, heading.current);
    }

    const azimuth = heading.current + yawOffset.current;
    const horiz = distance.current * Math.cos(pitch.current);
    const vert = distance.current * Math.sin(pitch.current);
    const desired = new THREE.Vector3(
      pos.x - Math.sin(azimuth) * horiz,
      pos.y + 1.2 + vert,
      pos.z - Math.cos(azimuth) * horiz
    );
    const lerpAmt = 1 - Math.exp(-4 * dt);
    camera.position.lerp(desired, lerpAmt);
    camTarget.current.lerp(pos.clone().add(new THREE.Vector3(0, 0.8, 0)), lerpAmt);
    camera.lookAt(camTarget.current);

    // Figure out which portal the camera is aimed at (for Landmark wobble)
    const camDir = new THREE.Vector3();
    camera.getWorldDirection(camDir);
    let aimingAt = null;
    let bestDot = 0.92;
    for (const lm of LANDMARKS) {
      const toLm = new THREE.Vector3(
        lm.position.x - camera.position.x,
        lm.position.y + 2.7 - camera.position.y,
        lm.position.z - camera.position.z
      ).normalize();
      const dot = toLm.dot(camDir);
      if (dot > bestDot) {
        bestDot = dot;
        aimingAt = lm.id;
      }
    }
    useGameStore.getState().setLookingAt(aimingAt);
  });

  return (
    <>
      <group ref={group}>
        <group ref={modelRoot} scale={ROBOT_SCALE}>
          <primitive object={scene} />
        </group>
        <directionalLight position={[-6, 4, -4]} intensity={0.8} color="#b4d7ff" />
      </group>
      <group>
        {dustPool.map((_, i) => (
          <mesh
            key={i}
            ref={(el) => (dustRefs.current[i] = el)}
            visible={false}
          >
            <sphereGeometry args={[0.12, 6, 6]} />
            <meshBasicMaterial color="#e6dcc2" transparent opacity={0.6} />
          </mesh>
        ))}
      </group>
    </>
  );
}

function spawnDust(playerPos, pool) {
  for (const p of pool) {
    if (p.life <= 0) {
      p.pos.set(
        playerPos.x + (Math.random() - 0.5) * 0.3,
        0.1,
        playerPos.z + (Math.random() - 0.5) * 0.3
      );
      p.vel.set(
        (Math.random() - 0.5) * 0.6,
        0.6 + Math.random() * 0.5,
        (Math.random() - 0.5) * 0.6
      );
      p.life = 0.6 + Math.random() * 0.2;
      return;
    }
  }
}

function updateDust(pool, refs, dt) {
  pool.forEach((p, i) => {
    const ref = refs[i];
    if (!ref) return;
    if (p.life <= 0) {
      ref.visible = false;
      return;
    }
    p.pos.addScaledVector(p.vel, dt);
    p.vel.y -= 0.8 * dt;
    p.vel.multiplyScalar(0.96);
    p.life -= dt;
    ref.visible = true;
    ref.position.copy(p.pos);
    const scale = Math.min(1, p.life * 2);
    ref.scale.setScalar(scale);
    ref.material.opacity = 0.5 * scale;
  });
}
