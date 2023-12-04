"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Logo from "../../../public/assets/logo-white.svg";
import { HiUser } from "react-icons/hi2";

export default function Navbar({ cari, ajukan }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.refresh();
      router.push("/");
    } else {
      setUser(JSON.parse(localStorage.getItem("user") || "{}"));
    }

    const checkToken = () => {
      try {
        const token = Cookies.get("token");
        setIsLoggedIn(!!token);
      } catch (error) {
        console.error("Error message: " + error);
      }
    };

    checkToken();
  }, []);

  const handleSignOut = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <nav className="min-w-full fixed top-0 z-40 bg-purple-200 border-gray-200 h-16">
      <div className="max-w-[1150px] 2xl:max-w-[1200px] h-full flex flex-wrap items-center justify-between mx-auto px-6 sm:px-10">
        <div>
          <Link className="flex items-center gap-3 md:gap-4" href="/">
            <Image
              src={Logo}
              className="w-8 sm:w-10 md:w-11"
              alt="TeknoVibe Logo"
            />
            <span className="text-xl md:text-[22px] lg:text-2xl font-bold text-white-100">
              TeknoVibe
            </span>
          </Link>
        </div>
        <div className="relative flex md:order-2">
          {isLoggedIn ? (
            <div className="relative w-full">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex space-x-2 text-white-100 focus:outline-none font-medium py-2"
              >
                <HiUser className="w-6 h-6" />
                <span className="ml-2">Akun</span>
              </button>
              {showDropdown && (
                <div
                  className="absolute z-40 w-[150px] top-12 right-0 bg-[#7F72FF] shadow-2xl rounded-md p-2"
                  onClick={() => setShowDropdown(false)}
                >
                  <button
                    onClick={() => {
                      router.push("/profile/" + user._id);
                      setShowDropdown(false);
                    }}
                    className="w-full px-2 py-1.5 hover:bg-[#8B7EFF] text-white-100 rounded-md text-left"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setShowDropdown(false);
                    }}
                    className="w-full px-2 py-1.5 hover:bg-[#8B7EFF] text-white-100 rounded-md text-left"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/auth/signin">
              <button
                type="button"
                className="text-black bg-white-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center hover:bg-button-dark hover:text-white"
              >
                Masuk
              </button>
            </Link>
          )}
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center ml-3 lg:ml-0 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {isOpen && (
            <div className="text-sm absolute bg-white mt-16 w-32 rounded-lg px-1.5 lg:hidden flex flex-col items-center shadow-xl">
              <div className="flex my-1.5 flex-col items-center w-full hover:bg-gray-100 rounded-lg">
                <a href="/" className="block text-black py-2">
                  Home
                </a>
              </div>
              <div className="w-5/6 h-0.5 rounded-2xl bg-purple-200 " />
              <div className="flex my-1.5 flex-col items-center w-full hover:bg-gray-100 rounded-lg">
                <a href="/#tentang" className="block text-black py-2 ">
                  Tentang
                </a>
              </div>
              <div className="w-5/6 h-0.5 rounded-2xl bg-purple-200 " />
              <div className="flex my-1.5 flex-col  items-center w-full hover:bg-gray-100 rounded-lg">
                <a href="/#panduan" className="block text-black py-2">
                  Panduan
                </a>
              </div>
              <div className="w-5/6 h-0.5 rounded-2xl bg-purple-200 " />
              <div className="flex my-1.5 flex-col items-center w-full hover:bg-gray-100 rounded-lg">
                <a href="/search" className="block text-black py-2">
                  Cari Event
                </a>
              </div>
              <div className="w-5/6 h-0.5 rounded-2xl bg-purple-200 " />
              <div className="flex my-1.5 flex-col items-center w-full hover:bg-gray-100 rounded-lg">
                <a href="/addEvent" className="block text-black py-2">
                  Ajukan Event
                </a>
              </div>
            </div>
          )}
        </div>
        <div
          className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li className="group hover:bg-black/30">
              <a
                href="/#tentang"
                className="block py-2 pl-3 pr-4 text-white-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-3 md:mt-2"
              >
                Tentang
              </a>
              <div className="block group-hover:hidden self-end h-1 mt-1 w-full bg-purple-200" />
            </li>
            <li className="group hover:bg-black/30">
              <a
                href="/#panduan"
                className="block py-2 spl-3 pr-4 text-white-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-3 md:mt-2"
              >
                Panduan
              </a>
              <div className="block group-hover:hidden self-end h-1 mt-1 w-full bg-purple-200" />
            </li>
            <li className="group hover:bg-black/30">
              <a
                href="/search"
                className="block py-2 pl-3 pr-4 text-white-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-3 md:mt-2"
              >
                Cari Event
              </a>
              {cari && (
                <div className="block self-end h-1 mt-1 w-full bg-white" />
              )}
            </li>
            <li className="group hover:bg-black/30">
              <a
                href="/addEvent"
                className="block py-2 pl-3 pr-4 text-white-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-3 md:mt-2"
              >
                Ajukan Event
              </a>
              {ajukan && (
                <div className="block self-end h-1 mt-1 w-full bg-white" />
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
