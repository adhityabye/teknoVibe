import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { HiUser, HiEnvelope, HiLockClosed } from "react-icons/hi2";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    // Check if name field are filled
    if (!name) {
      setNameError("Name is required");
      hasError = true;
    } else {
      setNameError("");
    }

    // Check if email field are filled
    if (!email) {
      setEmailError("Email is required");
      hasError = true;
    } else {
      setEmailError("");
    }

    // Check if password field are filled
    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    } else {
      setPasswordError("");
    }

    // Check if confirm password field are filled
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm Password is required");
      hasError = true;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      hasError = true;
    } else {
      setConfirmPasswordError("");
    }

    if (hasError) {
      return;
    }

    // Check if all required fields are filled
    if (!name || !email || !password) {
      alert("Please fill in all required fields");
      return;
    }

    axios
      .post("http://localhost:9090/register", { name, email, password })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen relative bg-cover overflow-hidden mx-auto">
      <div className="min-h-screen gap-2 flex flex-col justify-center items-center pt-[50px] lg:pt-[30px] 2xl:pt-0 pb-[20px]">
        <div className="font-josefin overflow-hidden w-full max-w-[400px] md:max-w-[500px] xl:max-w-[500px] px-6 sm:px-12 md:px-20">
          <h1 className="text-center text-purple-200 font-bold text-xl">
            Daftar Akun
          </h1>
          <form
            className="w-full flex flex-col sm:mt-4"
            onSubmit={handleSubmit}
          >
            <div className="w-full relative flex items-center gap-x-3 text-black-900 mb-3 group">
              <HiUser className="absolute bottom-3 w-5 h-5" />
              <input
                type="text"
                placeholder=""
                autoComplete="off"
                name="name"
                className={`w-full bg-transparent pt-5 pb-1.5 pl-7 text-base border-0 border-b-2 focus:outline-none focus:ring-0 peer ${
                  nameError ? "border-b-red-500" : "border-b-purple-800"
                }`}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError("");
                }}
              />
              <label
                className="absolute appearance-none text-base font-medium text-black-900 pt-2 left-0 duration-200 transform -translate-y-6 scale-[0.8] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:left-8 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-black-900 peer-focus:text-black-900 peer-focus:scale-[0.8] peer-focus:-translate-y-6"
                htmlFor="name"
              >
                Nama
              </label>
            </div>
            {nameError && <p className="text-red-500 text-xs">{nameError}</p>}
            <div className="relative flex items-center gap-x-3 text-black-900 mb-4 group">
              <HiEnvelope className="absolute bottom-3 w-5 h-5" />
              <input
                type="email"
                placeholder=""
                autoComplete="off"
                name="email"
                className={`w-full bg-transparent pt-5 pb-1.5 pl-7 text-base border-0 border-b-2 focus:outline-none focus:ring-0 peer ${
                  nameError ? "border-b-red-500" : "border-b-purple-800"
                }`}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
              />
              <label
                className="absolute text-base font-medium text-black-900 pt-2 left-0 duration-200 transform -translate-y-6 scale-[0.8] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:left-8 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-black-900 peer-focus:text-black-900 peer-focus:scale-[0.8] peer-focus:-translate-y-6"
                htmlFor="email"
              >
                Email
              </label>
            </div>
            {emailError && (
              <p className="text-red-500 pt-1 text-xs">{emailError}</p>
            )}
            <div className="relative flex items-center gap-x-3 text-black-900 mb-4 group">
              <HiLockClosed className="absolute bottom-3 w-5 h-5" />
              <input
                type="password"
                placeholder=""
                autoComplete="off"
                name="password"
                className={`w-full bg-transparent pt-5 pb-1.5 pl-7 text-base border-0 border-b-2 focus:outline-none focus:ring-0 peer ${
                  passwordError ? "border-red-500" : "border-b-purple-800"
                }`}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
              />
              <label
                className="absolute text-base font-medium text-black-900 pt-2 left-0 duration-200 transform -translate-y-6 scale-[0.8] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:left-8 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-black-900 peer-focus:text-black-900 peer-focus:scale-[0.8] peer-focus:-translate-y-6"
                htmlFor="password"
              >
                Kata Sandi
              </label>
            </div>
            {passwordError && (
              <p className="text-red-500 pt-1 text-xs">{passwordError}</p>
            )}
            <div className="relative flex items-center gap-x-3 text-black-900 mb-4 group">
              <HiLockClosed className="absolute bottom-3 w-5 h-5" />
              <input
                type="password"
                placeholder=""
                autoComplete="off"
                name="confirmPassword"
                className={`w-full bg-transparent pt-5 pb-1.5 pl-7 text-base border-0 border-b-2 focus:outline-none focus:ring-0 peer ${
                  confirmPasswordError
                    ? "border-red-500"
                    : "border-b-purple-800"
                }`}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setConfirmPasswordError("");
                }}
              />
              <label
                className="absolute text-base font-medium text-black-900 pt-2 left-0 duration-200 transform -translate-y-6 scale-[0.8] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:left-8 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-black-900 peer-focus:text-black-900 peer-focus:scale-[0.8] peer-focus:-translate-y-6"
                htmlFor="confirmPassword"
              >
                Konfirmasi Kata Sandi
              </label>
            </div>
            {confirmPasswordError && (
              <p className="text-red-500 pt-1 text-xs">
                {confirmPasswordError}
              </p>
            )}
            <button
              type="submit"
              className="bg-gradient-purple mt-6 px-3 py-[8px] rounded-[20px] text-base font-bold text-white-100"
            >
              Daftar
            </button>
          </form>
          <div className="flex flex-wrap justify-center font-normal text-center text-base mt-4">
            <p className="mr-1 text-black-900">Sudah punya akun?</p>
            <Link
              to="/login"
              className="text-purple-200 hover:underline hover:decoration-[1.5px] hover:underline-offset-2 hover:decoration-purple-800 font-semibold"
            >
              Masuk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
