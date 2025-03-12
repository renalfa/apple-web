import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="text-xs font-light text-gray">
            More ways to shop:
            <span className="underline text-blue"> Find an Apple Store </span>
            or <span className="underline text-blue">other retailer</span>
          </p>
          <p className="text-xs font-light text-gray">
            Or call 000800-040-1966
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full"></div>

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-xs font-light text-gray">
            Copyright @ 2024 Apple Inc. All rights reserved.
          </p>

          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={i} className="text-xs font-light text-gray">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
