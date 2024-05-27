import Image from "../assets/me.jpg";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Email from "../assets/email.svg";
import SocialLink from "./SocialLink";

const Profile = () => {
  return (
    <section className="flex flex-col items-center justify-center p-4 text-center xl:w-1/4 xl:fixed xl:h-screen">
      <img
        src={Image}
        alt="Profile Picture"
        className="rounded-full w-44 mx-auto md:w-48 lg:w-52 xl:w-60 2xl:w-72"
      />
      <h1 className="mt-4 text-2xl lg:text-3xl font-bold 2xl:text-4xl">Fazri Egi Ramadhan</h1>
      <h2 className="mt-2 text-xl font-semibold text-slate-300 xl:text-2xl">Backend Developer</h2>
      <div className="flex justify-center gap-4 mt-4">
        <SocialLink
          link="https://www.linkedin.com/in/fazri-egi-ramadhan"
          svg={LinkedIn}
          type="LinkedIn"
        />
        <SocialLink
          link="https://www.github.com/fazriegi"
          svg={Github}
          type="Github"
        />
        <SocialLink
          link="mailto:fazriegi80@gmail.com"
          svg={Email}
          type="Email"
        />
      </div>
    </section>
  );
};

export default Profile;
