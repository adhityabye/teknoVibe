import { HiEnvelope } from "react-icons/hi2";

export default function EmailInput({ emailError, handleEmailChange }) {
  return (
    <div className="w-full">
      <div className="relative flex items-center gap-x-3 text-black-900 mb-4 group">
        <HiEnvelope className="absolute bottom-3 w-5 h-5" />
        <input
          type="email"
          placeholder=""
          autoComplete="off"
          id="email"
          name="email"
          className={`w-full bg-transparent pt-5 pb-1.5 pl-7 text-base border-0 border-b-2 focus:outline-none focus:ring-0 peer ${
            emailError ? "border-b-red-500" : "border-b-purple-800"
          }`}
          onChange={handleEmailChange}
        />
        <label
          className="absolute text-base font-medium text-black-900 pt-2 left-0 duration-200 transform -translate-y-6 scale-[0.8] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:left-8 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-black-900 peer-focus:text-black-900 peer-focus:scale-[0.8] peer-focus:-translate-y-6"
          htmlFor="email"
        >
          Email
        </label>
      </div>
      {emailError && <p className="text-red-500 pt-1 text-xs">{emailError}</p>}
    </div>
  );
}
