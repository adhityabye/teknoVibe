import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match");
      return;
    }

    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mx-auto grid justify-content-center content-center">
      <div className="mx-auto py-20 px-20 w-fit text-black-[#3A3A3A]">
        <h2 className="text-center text-white font-bold text-xl mb-5">
          Register Account
        </h2>
        <form
          className="grid p-7 bg-blue-400 rounded-xl"
          onSubmit={handleSubmit}
        >
          <div className="grid mb-3">
            <label className="text-base text-white" htmlFor="name">
              <strong className="font-medium">Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className={`px-2 py-1 rounded-md text-base border-2 ${
                nameError ? "border-red-500" : "border-slate-400"
              }`}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <p className="text-red-500 pt-1 text-xs">{nameError}</p>}
          </div>
          <div className="grid mb-3">
            <label className="text-base text-white" htmlFor="email">
              <strong className="font-medium">Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className={`px-2 py-1 rounded-md text-base border-2 ${
                emailError ? "border-red-500" : "border-slate-400"
              }`}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-red-500 pt-1 text-xs">{emailError}</p>}
          </div>
          <div className="grid mb-3">
            <label className="text-base text-white" htmlFor="password">
              <strong className="font-medium">Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className={`px-2 py-1 rounded-md text-base border-2 ${
                passwordError ? "border-red-500" : "border-slate-400"
              }`}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="text-red-500 pt-1 text-xs">{passwordError}</p>}
          </div>
          <div className="grid mb-3">
            <label className="text-base text-white" htmlFor="confirmPassword">
              <strong className="font-medium">Confirm Password</strong>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              className={`px-2 py-1 rounded-md text-base border-2 ${
                confirmPasswordError ? "border-red-500" : "border-slate-400"
              }`}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError && <p className="text-red-500 pt-1 text-xs">{confirmPasswordError}</p>}
          </div>
          <button type="submit" className="bg-white hover:bg-blue-100 mt-3 px-3 py-1 rounded-xl text-base font-normal">
            Register
          </button>
        </form>
        <div className="mx-auto pt-5 grid justify-items-center">
          <p className="text-center text-base text-white pb-2">Already Have an Account?</p>
          <Link to="/login" className="text-base font-normal bg-white hover:bg-blue-100 px-3 py-1 rounded-xl">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
