import React, {useMemo, useRef} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";

/* =========================================================================
   A procedurally generated planet.

   Deliberately not a downloaded model: this ships no third-party asset, so
   there is no attribution requirement and nothing to fetch. It also removes
   ~2.2 MB from the page compared with a glTF planet.

   Everything below is drawn into <canvas> at runtime and uploaded as a
   texture, so the whole thing costs a few kB of code.
   ========================================================================= */

/** Deterministic PRNG so the planet looks identical on every visit. */
function mulberry32(seed) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Surface: deep ocean, layered landmasses, ice caps. */
function makeSurfaceTexture() {
  const w = 1024;
  const h = 512;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  const rand = mulberry32(20260820);

  // ocean
  const ocean = ctx.createLinearGradient(0, 0, 0, h);
  ocean.addColorStop(0, "#1b2a6b");
  ocean.addColorStop(0.5, "#12205c");
  ocean.addColorStop(1, "#0d1747");
  ctx.fillStyle = ocean;
  ctx.fillRect(0, 0, w, h);

  // landmasses: clusters of soft blobs, denser near the equator
  const land = ["#2f7d63", "#3a8f6b", "#276b57", "#48a074"];
  for (let cluster = 0; cluster < 16; cluster++) {
    const cx = rand() * w;
    const cy = h * 0.18 + rand() * h * 0.64;
    const blobs = 26 + Math.floor(rand() * 34);
    for (let i = 0; i < blobs; i++) {
      const angle = rand() * Math.PI * 2;
      const dist = rand() * 78;
      const x = cx + Math.cos(angle) * dist * 1.7;
      const y = cy + Math.sin(angle) * dist * 0.8;
      const r = 10 + rand() * 30;
      ctx.globalAlpha = 0.5 + rand() * 0.5;
      ctx.fillStyle = land[Math.floor(rand() * land.length)];
      ctx.beginPath();
      ctx.ellipse(x, y, r * 1.4, r, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.globalAlpha = 1;

  // ice caps
  ["top", "bottom"].forEach(edge => {
    const grad = ctx.createLinearGradient(
      0,
      edge === "top" ? 0 : h,
      0,
      edge === "top" ? h * 0.16 : h * 0.84
    );
    grad.addColorStop(0, "rgba(233,240,255,0.95)");
    grad.addColorStop(1, "rgba(233,240,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, edge === "top" ? 0 : h * 0.84, w, h * 0.16);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

/** Clouds: wispy white bands on transparent black, used as its own layer. */
function makeCloudTexture() {
  const w = 1024;
  const h = 512;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  const rand = mulberry32(97531);

  ctx.clearRect(0, 0, w, h);
  for (let band = 0; band < 90; band++) {
    const y = rand() * h;
    const x = rand() * w;
    const rx = 40 + rand() * 150;
    const ry = 8 + rand() * 26;
    ctx.globalAlpha = 0.05 + rand() * 0.3;
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function Planet() {
  const surface = useMemo(makeSurfaceTexture, []);
  const clouds = useMemo(makeCloudTexture, []);
  const cloudRef = useRef();

  // clouds drift slightly faster than the planet's own rotation
  useFrame((_state, delta) => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y += delta * 0.035;
    }
  });

  return (
    <group>
      <mesh>
        <sphereGeometry args={[2.4, 64, 64]} />
        <meshStandardMaterial map={surface} roughness={0.85} metalness={0.05} />
      </mesh>

      <mesh ref={cloudRef} scale={1.016}>
        <sphereGeometry args={[2.4, 48, 48]} />
        <meshStandardMaterial
          map={clouds}
          transparent
          opacity={0.5}
          depthWrite={false}
          roughness={1}
        />
      </mesh>

      {/* atmosphere: a slightly larger back-faced shell reads as a rim glow */}
      <mesh scale={1.075}>
        <sphereGeometry args={[2.4, 48, 48]} />
        <meshBasicMaterial
          color="#7fb2ff"
          transparent
          opacity={0.13}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

export default function PlanetCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{antialias: true}}
      camera={{fov: 45, near: 0.1, far: 200, position: [-4, 2.2, 6]}}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 3, 5]} intensity={2.1} />
      {/* cool fill on the dark side so the terminator is not pure black */}
      <directionalLight
        position={[-5, -2, -3]}
        intensity={0.25}
        color="#8fb8ff"
      />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.6}
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Planet />
    </Canvas>
  );
}
