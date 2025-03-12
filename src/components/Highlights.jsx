import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils/index";
import VideoCarousel from "./VideoCarousel";
import { animateWithGsap } from '../utils/animation';

const Highlights = () => {
  useGSAP(() => {
    animateWithGsap("#heading-highlights", { y: 0, opacity: 1 });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      delay: 2,
      duration: 1,
      stagger: 0.25
    });
  }, []);

  return (
    <section className="w-screen h-full overflow-hidden common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="items-center justify-between w-full mb-12 md:flex">
          <h1 id="heading-highlights" className="section-heading">Get the Highlights.</h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film <img src={watchImg} alt="Watch" className="ml-2" />
            </p>

            <p className="link">
              Watch the event{" "}
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
