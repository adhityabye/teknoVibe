import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all required fields are filled
    if (!name || !email || !password) {
      alert("Please fill in all required fields.");
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
        <h2 className="text-center text-white font-bold text-xl mb-5">Register Account</h2>
        <form className="grid p-7 bg-blue-400 rounded-xl" onSubmit={handleSubmit}>
          <div className="grid mb-3">
            <label className="text-base text-white" htmlFor="name">
              <strong className="font-medium">Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="px-2 py-1 rounded-md text-base border-2 border-slate-400"
              onChange={(e) => setName(e.target.value)}
              required
            />
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
              className="px-2 py-1 rounded-md text-base border-2 border-slate-400"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid mb-3">
            <label className="text-base text-white" htmlFor="password">
              <strong className="font-medium">Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="px-2 py-1 rounded-md text-base border-2 border-slate-400"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
