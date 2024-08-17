import { useState } from "react";
import CInput from "./Input";

const Modal = ({ setModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [link, setLink] = useState("");

  const save = () => {
    console.log(title, description, language, link);
    setTitle("");
    setDescription("");
    setLanguage("");
    setLink("");
  };

  const close = () => {
    setModal(false);
  };

  return (
    <div
      id="modal"
      className="text-center fixed z-50 mx-auto my-auto bg-primary p-6 rounded-lg w-[70%] md:w-[50%]"
    >
      <h1 className="mb-4 font-semibold">Add New Project</h1>
      <form action="" className="gap-2 flex flex-col">
        <CInput
          type="text"
          name="title"
          placeholder="Title"
          setState={setTitle}
          value={title}
        />
        <CInput
          type="text"
          name="description"
          placeholder="Short Description"
          setState={setDescription}
          value={description}
        />
        <CInput
          type="text"
          name="language"
          placeholder="Language"
          setState={setLanguage}
          value={language}
        />
        <CInput
          type="text"
          name="link"
          placeholder="Link"
          setState={setLink}
          value={link}
        />
      </form>
      <div className="flex gap-4 justify-end mt-4">
        <button
          className="border px-3 py-2 rounded hover:bg-red-500"
          onClick={close}
        >
          Cancel
        </button>
        <button
          className="border px-3 py-2 rounded hover:bg-sky-500"
          type="submit"
          onClick={save}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Modal;
