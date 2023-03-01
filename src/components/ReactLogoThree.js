import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Line, OrbitControls, Sphere } from "@react-three/drei";

function ReactLogoThree() {
  const outer = useRef();
  const middle = useRef();
  const inner = useRef();

  // useFrame(() => {
  //   outer.current.rotation.x += 0.02;
  //   outer.current.rotation.y += 0.02;
  //   middle.current.rotation.x += 0.02;
  //   middle.current.rotation.y += 0.02;
  //   inner.current.rotation.x += 0.02;
  //   inner.current.rotation.y += 0.02;
  // });

  // const curve = new THREE.EllipseCurve(0, 0, 3, 2.8, 0, 2 * Math.PI, false, 0);
  const curve = new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0);
  const points = useMemo(() => curve.getPoints(100), []);
  console.log(points);

  return (
    <mesh>
      <Line
        ref={outer}
        rotation={[0, 0, 0]}
        points={points}
        color={"turquoise"}
        lineWidth={8}
      />
      <Line
        ref={outer}
        rotation={[0, 0, 1]}
        points={points}
        color={"turquoise"}
        lineWidth={8}
      />
      <Line
        ref={outer}
        rotation={[0, 0, -1]}
        points={points}
        color={"turquoise"}
        lineWidth={8}
      />
      {/* <Line
        ref={inner}
        scale={0.8}
        rotation={[1.55, 2.5, 0]}
        points={points}
        color={"green"}
        wireframe
        lineWidth={8}
      />
      <Line
        ref={middle}
        scale={0.9}
        rotation={[3.1, 5, 0]}
        points={points}
        color={"yellow"}
        wireframe
        lineWidth={8}
      /> */}
      <Sphere args={[0.55, 64, 64]}>
        <meshBasicMaterial color={"turquoise"} wireframe />
      </Sphere>
    </mesh>
  );
}

export default ReactLogoThree;
