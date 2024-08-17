import { useState } from "react";
import Terminal from "../assets/terminal.svg";

const Card = ({ title, description, programmingLang, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      className="w-full sm:w-[49%] md:w-[45%] lg:w-5/12 xl:w-[45%] 2xl:w-[28%] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ zIndex: isHovered ? 10 : 1 }} // Ensure hovered card is on top
    >
      <div
        className={`rounded-lg bg-secondary p-4 transform transition duration-500 shadow shadow-slate-800 hover:scale-105 lg:w-full lg:mb-2 xl:w-full ${
          isHovered ? "absolute top-0 left-0 right-0" : ""
        }`}
        style={{ zIndex: isHovered ? 10 : 1 }}
      >
        <h1 className="text-primary-text text-lg md:text-xl lg:text-2xl font-semibold">
          {title}
        </h1>
        <p
          className={`text-primary-text mt-2 text-base md:text-lg ${
            isHovered
              ? "overflow-visible"
              : "overflow-hidden whitespace-nowrap overflow-ellipsis"
          }`}
        >
          {description}
        </p>

        <div className="mt-4 flex items-center">
          <img src={Terminal} alt="Language" />
          <h3 className="ml-1 text-secondary-text">{programmingLang}</h3>
        </div>
      </div>
    </a>
  );
};

export default Card;
