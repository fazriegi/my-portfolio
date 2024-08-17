import Card from "./Card";
import Modal from "./Modal";
import { useState, useEffect } from "react";

const Portfolio = ({ modal, setModal }) => {
  const [projects, setProjects] = useState([]);
  // const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/projects.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="mt-10 w-full flex flex-col items-center xl:pl-6 xl:items-start xl:ml-[25%]">
      <div className={modal ? "backdrop-blur pointer-events-none" : ""}>
        <div className="relative w-[93%] mb-9 md:w-[93%] lg:w-[91%] 2xl:w-[86%]">
          <h1 className="text-primary-text text-2xl text-center lg:text-3xl font-bold 2xl:text-4xl xl:text-left xl:ml-2">
            My Projects
          </h1>
          <button
            className="bg-green-600 font-semibold text-lg p-2 rounded absolute right-0 top-11 lg:text-xl"
            onClick={() => {
              setModal(true);
            }}
          >
            New
          </button>
        </div>
        <div className="w-full py-6 px-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap md:gap-3 md:justify-center lg:px-2 lg:gap-4 xl:gap-4 xl:justify-start xl:w-full">
          {projects.map((element, i) => (
            <Card
              key={i}
              title={element.title}
              description={element.description}
              programmingLang={element.language}
              link={element.link}
            />
          ))}
        </div>
      </div>
      {modal ? <Modal setModal={setModal} /> : ""}
      {/* <Modal /> */}
    </section>
  );
};

export default Portfolio;
