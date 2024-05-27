const SocialLink = ({ link, svg, type }) => {
  return (
    <a href={link} target="_blank" className="inline-block w-[2.5rem] lg:w-[3rem]">
      <img src={svg} alt={type} className="w-full h-auto" />
    </a>
  );
};

export default SocialLink;
