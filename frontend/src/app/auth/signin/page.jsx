"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import EmailInput from "@/app/components/auth/emailInput";
import PasswordInput from "@/app/components/auth/passwordInput";
import CircleBackground from "@/app/components/circleBackground";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

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

    if (hasError) {
      return;
    }

    // Check if all required fields are filled
    if (!email || !password) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:9090/user/login", {
        email,
        password,
      });

      if (response.status === 200) {
        alert("Sign in berhasil");
        router.push("/");
      } else if (response.status === 400) {
        alert("Sign in gagal");
        console.log("Validation error: ", response.data);
      } else {
        alert("Terjadi kesalahan");
        console.log("Unexpected error: ", response.status, response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden mx-auto">
      <div className="min-h-screen gap-2 flex flex-col justify-center items-center z-30">
        <div className="font-josefin overflow-hidden w-full max-w-[400px] md:max-w-[500px] xl:max-w-[510px] px-6 sm:px-12 md:px-20">
          <h1 className="text-center text-purple-200 font-bold text-[25px]">
            Masuk Akun
          </h1>
          <form
            className="w-full flex flex-col sm:mt-4"
            onSubmit={handleSubmit}
          >
            <EmailInput
              emailError={emailError}
              handleEmailChange={handleEmailChange}
            />
            <PasswordInput
              passwordError={passwordError}
              handlePasswordChange={handlePasswordChange}
            />
            <button
              type="submit"
              className="bg-gradient-purple mt-6 px-3 py-[8px] rounded-[20px] text-base font-bold text-white-100"
            >
              Daftar
            </button>
          </form>
          <div className="flex flex-wrap justify-center font-normal text-center text-base mt-4">
            <p className="mr-1 text-black-900">Belum punya akun?</p>
            <Link
              href="/auth/signup"
              className="text-purple-200 hover:underline hover:decoration-[1.5px] hover:underline-offset-2 hover:decoration-purple-800 font-semibold"
            >
              Daftar
            </Link>
          </div>
        </div>
      </div>
      <CircleBackground />
    </section>
  );
}