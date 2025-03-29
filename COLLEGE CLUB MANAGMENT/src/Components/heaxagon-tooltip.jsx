import React from "react";

const speakers = [
  { id: 1, src: "./src/assets/singer.png", alt: "Speaker 1" },
  { id: 2, src: "./src/assets/singer.png", alt: "Speaker 2" },
  { id: 3, src: "./src/assets/singer.png", alt: "Speaker 3" },
];

export default function DiamondSpeakers() {
  return (
    <div className=" absolute flex justify-center items-center p-6 top-[-40px] left-4">
      {speakers.map((speaker, index) => (
        <div
          key={speaker.id}
          className={`relative w-12 h-12 ${index !== 0 ? "-ml-4" : ""}`}
        >
          {/* Diamond Shape */}
          <div className="relative w-8 h-8 transform rotate-45 overflow-hidden bg-gray-300">
  <img
    src={speaker.src}
    alt={speaker.alt}
    className="absolute inset-0 w-full h-full object-cover transform -rotate-45"
  />
</div>


        </div>
      ))}
    </div>
  );
}
