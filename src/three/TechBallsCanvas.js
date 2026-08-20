import React, {Suspense, useMemo} from "react";
import {Canvas} from "@react-three/fiber";
import {Decal, Float, Preload, useTexture} from "@react-three/drei";

/* One flat-shaded icosahedron carrying a logo decal, as in the reference. */
function Ball({imgUrl, position}) {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.6} rotationIntensity={1.1} floatIntensity={1.9}>
      <mesh position={position} castShadow receiveShadow scale={1}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
}

/**
 * All the balls live in a SINGLE canvas laid out on a grid.
 *
 * The reference mounts one <Canvas> per technology. With this many items that
 * is one WebGL context each, and browsers cap concurrent contexts at roughly
 * 16 — past the cap the earliest contexts get dropped and balls silently go
 * blank. One context rendering a grid looks the same and costs far less.
 */
export default function TechBallsCanvas({icons = [], perRow = 5}) {
  const layout = useMemo(() => {
    const spacing = 2.6;
    const rows = Math.ceil(icons.length / perRow);
    return icons.map((icon, i) => {
      const row = Math.floor(i / perRow);
      const col = i % perRow;
      const itemsInRow = Math.min(perRow, icons.length - row * perRow);
      return {
        icon,
        position: [
          (col - (itemsInRow - 1) / 2) * spacing,
          ((rows - 1) / 2 - row) * spacing,
          0
        ]
      };
    });
  }, [icons, perRow]);

  return (
    <Canvas
      frameloop="always"
      dpr={[1, 1.5]}
      camera={{position: [0, 0, 11], fov: 50}}
      gl={{antialias: true}}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[0, 0, 5]} intensity={1.1} />
      <Suspense fallback={null}>
        {layout.map(item => (
          <Ball
            key={item.icon.name}
            imgUrl={item.icon.img}
            position={item.position}
          />
        ))}
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
