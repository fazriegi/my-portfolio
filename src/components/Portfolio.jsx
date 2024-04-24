import Card from "./Card";

const Portfolio = () => {
  return (
    <section className="mt-10 my-auto xl:w-full xl:pl-[27rem]">
      <h1 className="text-3xl font-bold text-center xl:text-left xl:ml-6">
        My Portfolio
      </h1>
      <div className="p-6 lg:flex lg:justify-center lg:flex-wrap lg:gap-4 xl:justify-start xl:w-full">
        <Card
          title="My Gram API"
          description="API for social media application."
          programmingLang="Golang"
          link="https://github.com/fazriegi/my-gram"
        />
        <Card
          title="Send Email API"
          description="API for sending email."
          programmingLang="TypeScript"
          link="https://github.com/fazriegi/send-email-API"
        />
        <Card
          title="Apotek API"
          description="API for apotek online application."
          programmingLang="Golang"
          link="https://github.com/fazriegi/mini-project-apotek"
        />
        <Card
          title="Camilin Landing Page"
          description="F&B website landing page."
          programmingLang="HTML"
          link="https://github.com/fazriegi/camilin"
        />
        <Card
          title="SILOKERNF"
          description="Job vacancy web application."
          programmingLang="PHP"
          link="https://github.com/fazriegi/Project-Akhir-CI-Siloker-NF/tree/dev"
        />
        <Card
          title="Winkel Landing Page"
          description="UMKM website landing page."
          programmingLang="HTML"
          link="https://github.com/fazriegi/Winkel-Landing-Page"
        />
      </div>
    </section>
  );
};

export default Portfolio;
