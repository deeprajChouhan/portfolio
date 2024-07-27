import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import the default styles
import { Suspense, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { useAnimations, useFBX } from "@react-three/drei";
import Avatar from "./Avatar";

const AboutContent = () => {
  const skills = [
    { label: "Fullstack", percentage: 90 },
    { label: "Android", percentage: 75 },
    { label: "UI/UX", percentage: 85 },
    { label: "Server", percentage: 90 },
    { label: "Graphics", percentage: 90 },
    { label: "Content", percentage: 50 },
  ];

  return (
    <div className="about-content">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-md-6">
            <div className="part-txt">
              <h2 className="section-title">
                About <span>Me</span>
              </h2>
              <p>I'm a Software Engineer</p>
              <p>
                with a talent for problem-solving and a commitment to
                innovation. I excel in collaborative environments and thrive on
                delivering high-quality software solutions.
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            {/* <div>
              <Canvas shadows camera={{ position: [0, 2, 3], fov: 30 }}>
                <color attach="background" args={["#ececec"]} />
                <OrbitControls />
                <group position={[0,-0.7,0]}>
                  <Avatar />
                </group>
                <ambientLight intensity={1} />
              </Canvas>
            </div> */}
            <div className="part-txt">
              <div className="progress-wrap">
                {skills.map((skill, index) => (
                  <div className="progress-box" key={index}>
                    <div className="circle-progressbar">
                      <CircularProgressbarWithChildren
                        value={skill.percentage}
                        strokeWidth={8}
                        styles={buildStyles({
                          pathColor: "#CB26B6",
                          textColor: "#212529",
                          transition: "stroke-dashoffset 0.5s ease-in-out",
                        })}
                      >
                        <div className="txt progressbar-text-container">
                          <span className="percent">{skill.percentage}%</span>
                          <p>{skill.label}</p>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
