import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Line, RoundedBox, Sphere } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import HeroHUD from "./HeroHUD";
import { profile } from "../../data/portfolio";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const prefersReducedMotion = () => {
  return typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
};

const VectorField = () => {
  const groupRef = useRef();
  const nodes = useMemo(
    () => [
      [-1.55, 0.9, -0.1],
      [-1.02, 1.32, -0.36],
      [-0.38, 1.08, 0.2],
      [0.24, 1.42, -0.28],
      [0.96, 1.1, 0.1],
      [1.48, 0.66, -0.16],
      [-1.36, 0.1, 0.18],
      [-0.62, 0.28, -0.24],
      [0.12, 0.18, 0.28],
      [0.82, 0.34, -0.18],
      [1.34, -0.18, 0.18],
      [-0.96, -0.64, -0.12],
      [-0.18, -0.76, 0.24],
      [0.72, -0.62, -0.18],
    ],
    []
  );
  const links = useMemo(
    () => [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [0, 6],
      [6, 7],
      [7, 8],
      [8, 9],
      [9, 10],
      [7, 2],
      [8, 3],
      [9, 4],
      [6, 11],
      [11, 12],
      [12, 13],
      [13, 10],
      [8, 12],
    ],
    []
  );

  useFrame((state) => {
    if (!groupRef.current || prefersReducedMotion()) return;
    groupRef.current.rotation.y = state.pointer.x * 0.08 + Math.sin(state.clock.elapsedTime * 0.25) * 0.08;
    groupRef.current.rotation.x = -state.pointer.y * 0.04;
  });

  return (
    <group ref={groupRef} position={[0.05, 0.02, 0]}>
      {links.map(([from, to]) => (
        <Line
          key={`${from}-${to}`}
          points={[nodes[from], nodes[to]]}
          color="#7dd3fc"
          lineWidth={0.8}
          transparent
          opacity={0.34}
        />
      ))}
      {nodes.map((position, index) => (
        <Sphere key={position.join("-")} args={[index % 5 === 0 ? 0.058 : 0.038, 20, 20]} position={position}>
          <meshStandardMaterial
            color={index % 5 === 0 ? "#e0f2fe" : "#60a5fa"}
            emissive={index % 5 === 0 ? "#38bdf8" : "#2563eb"}
            emissiveIntensity={index % 5 === 0 ? 0.9 : 0.38}
            roughness={0.18}
            metalness={0.25}
          />
        </Sphere>
      ))}
    </group>
  );
};

const HolographicCore = () => {
  const coreRef = useRef();
  const ringARef = useRef();
  const ringBRef = useRef();
  const ringCRef = useRef();

  useFrame((state) => {
    if (prefersReducedMotion()) return;
    const time = state.clock.elapsedTime;
    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.42;
      coreRef.current.rotation.x = Math.sin(time * 0.4) * 0.16;
    }
    if (ringARef.current) ringARef.current.rotation.z = time * 0.36;
    if (ringBRef.current) ringBRef.current.rotation.x = time * -0.28;
    if (ringCRef.current) ringCRef.current.rotation.y = time * 0.24;
  });

  return (
    <group position={[0.24, 0.42, 0.08]}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.42, 1]} />
        <meshStandardMaterial
          color="#dbeafe"
          emissive="#2563eb"
          emissiveIntensity={0.55}
          transparent
          opacity={0.58}
          roughness={0.08}
          metalness={0.2}
        />
      </mesh>
      <mesh ref={ringARef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.74, 0.006, 16, 128]} />
        <meshStandardMaterial color="#93c5fd" emissive="#2563eb" emissiveIntensity={1.1} />
      </mesh>
      <mesh ref={ringBRef} rotation={[0.8, 0.1, 0]}>
        <torusGeometry args={[0.98, 0.005, 16, 128]} />
        <meshStandardMaterial color="#7dd3fc" emissive="#0891b2" emissiveIntensity={0.8} />
      </mesh>
      <mesh ref={ringCRef} rotation={[0.25, Math.PI / 2, 0.34]}>
        <torusGeometry args={[1.2, 0.004, 16, 128]} />
        <meshStandardMaterial color="#c4b5fd" emissive="#6366f1" emissiveIntensity={0.6} />
      </mesh>
    </group>
  );
};

const TerminalPanel = ({ position, rotation, width, lines, accent = "#60a5fa" }) => {
  return (
    <group position={position} rotation={rotation}>
      <RoundedBox args={[width, 0.92, 0.035]} radius={0.045}>
        <meshStandardMaterial color="#0f172a" transparent opacity={0.86} roughness={0.32} metalness={0.28} />
      </RoundedBox>
      <mesh position={[0, 0.34, 0.024]}>
        <boxGeometry args={[width * 0.82, 0.025, 0.008]} />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.55} />
      </mesh>
      {lines.map((line, index) => (
        <mesh key={`${line}-${index}`} position={[-width * 0.18 + index * 0.035, 0.12 - index * 0.15, 0.026]}>
          <boxGeometry args={[line, 0.018, 0.008]} />
          <meshStandardMaterial color={index % 2 === 0 ? "#bfdbfe" : "#7dd3fc"} emissive="#2563eb" emissiveIntensity={0.25} />
        </mesh>
      ))}
    </group>
  );
};

const AiCockpitScene = () => {
  const rigRef = useRef();

  useFrame((state) => {
    if (!rigRef.current || prefersReducedMotion()) return;
    rigRef.current.rotation.y = state.pointer.x * 0.08 + Math.sin(state.clock.elapsedTime * 0.2) * 0.04;
    rigRef.current.rotation.x = -state.pointer.y * 0.035;
  });

  return (
    <>
      <color attach="background" args={["#050816"]} />
      <ambientLight intensity={0.46} />
      <directionalLight position={[3, 4, 4]} intensity={2.3} color="#e0f2fe" />
      <pointLight position={[-2.2, 1.6, 2.2]} intensity={6} color="#60a5fa" />
      <pointLight position={[2.4, 1.2, 1.8]} intensity={4} color="#a78bfa" />
      <group ref={rigRef} position={[0, -0.02, 0]}>
        <mesh position={[0, -1.08, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.82, 1.84, 128]} />
          <meshStandardMaterial color="#7dd3fc" transparent opacity={0.22} emissive="#2563eb" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0, -1.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[1.8, 128]} />
          <meshStandardMaterial color="#0f172a" transparent opacity={0.46} />
        </mesh>
        <TerminalPanel
          position={[-1.05, -0.1, 0.18]}
          rotation={[0.05, 0.36, 0.02]}
          width={1.42}
          lines={[0.76, 0.52, 0.86, 0.62]}
        />
        <TerminalPanel
          position={[1.1, -0.2, -0.08]}
          rotation={[0.03, -0.38, -0.02]}
          width={1.28}
          lines={[0.58, 0.72, 0.46, 0.8]}
          accent="#c4b5fd"
        />
        <HolographicCore />
        <VectorField />
        <Html center distanceFactor={8} position={[0.18, 1.82, 0]}>
          <button className="scene-play-card scene-play-card--dark" type="button" onClick={() => scrollToSection("projects")}>
            Explore AI Systems
          </button>
        </Html>
      </group>
    </>
  );
};

const ThreeHero = () => {
  return (
    <section className="modern-hero" aria-labelledby="hero-title">
      <HeroHUD />
      <div className="modern-hero__content">
        <p className="modern-kicker">{profile.role}</p>
        <h1 id="hero-title">I build production LLM systems, RAG pipelines, and secure AI workflows.</h1>
        <p>{profile.summary}</p>
        <div className="modern-hero__chips" aria-label="AI engineering focus areas">
          <span>RAG</span>
          <span>Agentic workflows</span>
          <span>Evaluation</span>
          <span>Secure AI</span>
        </div>
        <div className="modern-hero__actions">
          <button className="modern-button modern-button--primary" type="button" onClick={() => scrollToSection("projects")}>
            View AI Work
          </button>
          <a className="modern-button" href={profile.cvUrl} target="_blank" rel="noreferrer">
            Download CV
          </a>
        </div>
      </div>
      <div className="modern-hero__scene" aria-label="Interactive 3D AI systems cockpit">
        <Canvas camera={{ position: [0, 0.28, 4.65], fov: 34 }} dpr={[1, 1.5]}>
          <Suspense fallback={null}>
            <AiCockpitScene />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default ThreeHero;
