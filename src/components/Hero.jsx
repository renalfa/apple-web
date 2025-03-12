import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = React.useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleInnerWindowChange = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleInnerWindowChange);

    return () => {
      window.removeEventListener("resize", handleInnerWindowChange);
    };
  }, []);

  useGSAP(() => {
    gsap.to(".hero-title", {
      opacity: 1,
      ease: "back.out(2)",
      delay: 2,
    });

    gsap.to("#cta", {
      opacity: 1,
      ease: "back.out(2)",
      delay: 2,
      y: -50,
    });
  }, []);

  return (
    <section className="relative w-full bg-black nav-height">
      <div className="flex-col w-full h-5/6 flex-center">
        <p className="hero-title">Iphone 15 Pro</p>
        <div className="w-9/12 md:w-10/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center translate-y-20 opacity-0"
      >
        <a href="#" className="capitalize transition-all duration-200 btn">
          buy
        </a>
      </div>
    </section>
  );
};

export default Hero;
