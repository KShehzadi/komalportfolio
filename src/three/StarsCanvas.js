import React, {useRef, useState, Suspense} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {Points, PointMaterial, Preload} from "@react-three/drei";
import {random} from "maath";

/* Procedural starfield — no asset to download, the geometry is generated in
   the browser. Ported from the reference design's Stars canvas. */
/* three.js cannot read CSS variables, so the star colour is pulled off the
   document once at mount. Shell remounts this canvas on theme change. */
function starColor() {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue("--stars")
    .trim();
  return value || "#f272c8";
}

function Stars(props) {
  const ref = useRef();
  const [color] = useState(starColor);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5001), {radius: 1.2})
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={color}
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
  return (
    <Canvas camera={{position: [0, 0, 1]}} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
