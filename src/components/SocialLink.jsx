const SocialLink = ({ link, svg, type }) => {
  return (
    <a href={link} target="_blank">
      <img src={svg} alt={type} />
    </a>
  );
};

export default SocialLink;
