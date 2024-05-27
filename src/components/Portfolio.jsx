import Card from "./Card";
import { useState, useEffect } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

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
    <section className="pl-6 mt-10 w-full flex flex-col items-center xl:items-start xl:ml-[25%]">
      <h1 className="text-2xl text-center lg:text-3xl font-bold 2xl:text-4xl xl:text-left xl:ml-2">
        My Portfolio
      </h1>
      <div className="w-full py-6 px-6 flex flex-col sm:flex-row sm:flex-wrap sm:gap-2 md:gap-3 md:justify-center lg:px-2 lg:gap-4 xl:gap-4 xl:justify-start xl:w-full">
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
    </section>
  );
};

export default Portfolio;
