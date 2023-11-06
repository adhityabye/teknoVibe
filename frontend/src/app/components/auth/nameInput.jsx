import { HiUser } from "react-icons/hi2";

export default function NameInput({ nameError, handleNameChange }) {
  return (
    <div className="w-full">
      <div className="w-full relative flex items-center gap-x-3 text-black-900 mb-3 group">
        <HiUser className="absolute bottom-3 w-5 h-5 text-purple-200" />
        <input
          type="text"
          placeholder=""
          autoComplete="off"
          id="name"
          name="name"
          className={`w-full bg-transparent pt-5 pb-1.5 pl-7 text-base border-0 border-b-2 focus:outline-none focus:ring-0 peer ${
            nameError ? "border-b-red-500" : "border-b-purple-200"
          }`}
          onChange={handleNameChange}
        />
        <label
          className="absolute appearance-none text-base font-medium text-black-900 pt-2 left-0 duration-200 transform -translate-y-6 scale-[0.8] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:left-8 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:text-black-900 peer-focus:scale-[0.8] peer-focus:-translate-y-6"
          htmlFor="name"
        >
          Nama
        </label>
      </div>
      {nameError && <p className="text-red-500 text-xs">{nameError}</p>}
    </div>
  );
}
