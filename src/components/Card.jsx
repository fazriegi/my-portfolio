import { useState } from "react";

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
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.9703 3.3437C13.0166 2.88543 10.9834 2.88543 9.02975 3.3437C6.20842 4.00549 4.0055 6.20841 3.3437 9.02974C2.88543 10.9834 2.88543 13.0166 3.3437 14.9703C4.0055 17.7916 6.20842 19.9945 9.02975 20.6563C10.9834 21.1146 13.0166 21.1146 14.9703 20.6563C17.7916 19.9945 19.9945 17.7916 20.6563 14.9703C21.1146 13.0166 21.1146 10.9834 20.6563 9.02975C19.9945 6.20842 17.7916 4.00549 14.9703 3.3437ZM7.72959 9.23905C7.93266 8.99536 8.29484 8.96244 8.53853 9.16551L10.5279 10.8233C11.2627 11.4357 11.2627 12.5643 10.5279 13.1766L8.53853 14.8344C8.29484 15.0375 7.93266 15.0046 7.72959 14.7609C7.52651 14.5172 7.55943 14.155 7.80313 13.9519L9.7925 12.2941C9.9762 12.141 9.9762 11.8589 9.7925 11.7058L7.80313 10.048C7.55943 9.84493 7.52651 9.48275 7.72959 9.23905ZM12.4786 13.8188C12.1614 13.8188 11.9042 14.076 11.9042 14.3932C11.9042 14.7104 12.1614 14.9676 12.4786 14.9676H15.8291C16.1463 14.9676 16.4035 14.7104 16.4035 14.3932C16.4035 14.076 16.1463 13.8188 15.8291 13.8188H12.4786Z"
                fill="#a2c0df"
              ></path>{" "}
            </g>
          </svg>
          <h3 className="ml-1 text-secondary-text">{programmingLang}</h3>
        </div>
      </div>
    </a>
  );
};

export default Card;
