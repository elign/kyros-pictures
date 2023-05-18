import React from "react";
import texture from "../images/texture.jpg";

export default function StylishContact() {
  return (
    <div
      className="md:p-20 p-6 text-4xl font-semibold"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <h3 className="text-white">
        Do you want pictures like these 👆? Call me Now 🤗 ...
      </h3>
      <span className="text-white">+91 877 803 4315</span>
    </div>
  );
}
