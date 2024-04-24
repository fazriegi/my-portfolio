import Card from "./Card";
import { useState, useEffect } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./../../projects.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="mt-10 my-auto xl:w-full xl:pl-[27rem]">
      <h1 className="text-3xl font-bold text-center xl:text-left xl:ml-6">
        My Portfolio
      </h1>
      <div className="p-6 lg:flex lg:justify-center lg:flex-wrap lg:gap-4 xl:justify-start xl:w-full">
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
