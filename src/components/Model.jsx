import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGSAPTimeline, animateWithGsap } from "../utils/animation";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const tl = gsap.timeline();

  useEffect(() => {
    if (size === "large") {
      animateWithGSAPTimeline(tl, small, smallRotation, "#view1", "#view2", {
        transform: "translate(-100%)",
        duration: 2,
      });
    }

    if (size === "small") {
      animateWithGSAPTimeline(tl, large, largeRotation, "#view2", "#view1", {
        transform: "translate(0)",
        duration: 2,
      });
    }
  }, [size]);

  useGSAP(() => {
    animateWithGsap("#heading-model", { y: 0, opacity: 1 });
  }, []);

  return (
    <div className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading-model" className="section-heading">
          Take a closer look
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />

            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="w-full mx-auto">
            <p className="mb-5 text-sm font-light text-center">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    style={{ backgroundColor: item.color[0] }}
                    key={i}
                    className="mx-2 rounded-full size-6 cursor-pointer"
                    onClick={() => setModel(item)}
                  ></li>
                ))}
              </ul>

              <button className="size-btn-container cursor-pointer">
                {sizes.map((item, i) => (
                  <span
                    style={{
                      backgroundColor:
                        item.value === size ? "white" : "transparent",
                      color: item.value === size ? "black" : "white",
                    }}
                    key={i}
                    className="size-btn"
                    onClick={() => setSize(item.value)}
                  >
                    {item.label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
