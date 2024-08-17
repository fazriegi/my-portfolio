const CInput = ({ type, name, placeholder, setState, value }) => {
  const setValue = (e) => {
    setState(e.target.value);
  };

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="bg-secondary p-2 rounded-md focus:outline-none"
      onChange={setValue}
      value={value}
    />
  );
};

export default CInput;
