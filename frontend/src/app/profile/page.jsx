"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiEye, HiEyeSlash } from "react-icons/hi2";

export default function Profile() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(true);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  const [user, setUser] = useState({});
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.refresh();
      router.push("/");
      return;
    }

    setUser(JSON.parse(localStorage.getItem("user")) || "{}");

    const user = JSON.parse(localStorage.getItem("user"));
    setUserData({
      name: user.name,
      email: user.email,
      password: "",
    });
  }, []);

  const handleDeleteConfirm = async () => {
    try {
      if (!user._id) {
        console.error("User ID not found in the URL");
        return;
      }

      const response = await axios.delete(
        `https://tekno-vibe-be.vercel.app/user/users/${user._id}`
      );

      if (response.status === 200) {
        alert("Akun berhasil dihapus");
        Cookies.remove("token");
        localStorage.removeItem("user");
        router.push("/");
      }
    } catch (error) {
      alert("Terjadi kesalahan saat menghapus akun");
      console.error("Error during account deletion: ", error);
    } finally {
      setDeleteModalVisible(false);
    }
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    if (userData.password.length < 8 || confirmPassword.length < 8) {
      alert("Kata sandi dan konfirmasi kata sandi harus lebih dari 7");
      return;
    }

    if (userData.password !== confirmPassword) {
      alert("Kata sandi dan konfirmasi kata sandi tidak sama");
      return;
    }

    try {
      console.log(`https://tekno-vibe-be.vercel.app/user/users/${user._id}`);
      const response = await axios.put(
        `https://tekno-vibe-be.vercel.app/user/users/${user._id}`,
        {
          name: userData.name,
          email: userData.email,
          password: userData.password,
        }
      );
      if (response.status === 200) {
        alert("Berhasil memperbarui data akun");
        router.refresh();
      }
    } catch (error) {
      alert("Data akun tidak berhasil diperbarui");
      console.error("Error during account update: ", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };

  const handleToggleConfirmPassword = () => {
    setToggleConfirmPassword(!toggleConfirmPassword);
  };

  const handleDeleteClick = () => {
    setDeleteModalVisible(true);
  };

  const handleDeleteCancel = () => {
    setDeleteModalVisible(false);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="min-h-screen bg-purple-200 relative">
      <Navbar />
      <div className="max-w-[1150px] 2xl:max-w-[1200px] mx-auto py-20 px-6 sm:px-10">
        <button
          type="button"
          className="w-fit flex items-center justify-start space-x-3"
          onClick={() => router.back()}
        >
          <HiArrowLongLeft className="w-8 h-8 text-white-100" />
          <p className="text-base text-white-100">Kembali</p>
        </button>
        <div className="mx-auto relative">
          <h1 className="text-[30px] text-center font-bold text-white-100 pt-5">
            Profile Dashboard
          </h1>
          <div className="flex justify-center space-x-5 py-8">
            <button
              type="button"
              className={`px-5 py-1.5 font-josefin rounded-lg ${
                isUpdateFormVisible
                  ? "bg-purple-900 text-white-100"
                  : "bg-purple-200 text-white-100 border-2 border-white-100"
              } text-base`}
              onClick={() => setUpdateFormVisible(true)}
            >
              Update akun
            </button>
            <button
              type="button"
              className={`px-5 py-1.5 font-josefin rounded-lg ${
                isUpdateFormVisible
                  ? "bg-purple-200 text-white-100 border-2 border-white-100"
                  : "bg-purple-900 text-white-100"
              } text-base`}
              onClick={() => setUpdateFormVisible(false)}
            >
              Hapus akun
            </button>
          </div>
          {isUpdateFormVisible ? (
            <form
              className="w-[380px] flex flex-col mt-4 mx-auto"
              onSubmit={handleSubmitUpdate}
            >
              <div className="w-full font-josefin">
                <label
                  className="text-base font-medium text-white-100"
                  htmlFor="name"
                >
                  Nama
                </label>
                <input
                  type="text"
                  placeholder=""
                  autoComplete="off"
                  id="name"
                  name="name"
                  value={userData.name}
                  className="w-full bg-white-100 text-purple-900 py-1.5 px-3 text-base rounded-md border-0 focus:outline-none focus:ring-0"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="w-full font-josefin mt-5">
                <label
                  className="text-base font-medium text-white-100"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder=""
                  autoComplete="off"
                  id="email"
                  name="email"
                  value={userData.email}
                  className="w-full bg-white-100 text-purple-900 py-1.5 px-3 text-base rounded-md border-0 focus:outline-none focus:ring-0"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="w-full relative font-josefin mt-5">
                <label
                  className="text-base font-medium text-white-100"
                  htmlFor="password"
                >
                  Kata Sandi
                </label>
                <input
                  type={togglePassword === false ? "password" : "text"}
                  placeholder=""
                  autoComplete="off"
                  id="password"
                  name="password"
                  className="w-full bg-white-100 text-purple-900 py-1.5 pl-3 pr-8 text-base rounded-md border-0 focus:outline-none focus:ring-0"
                  onChange={handleInputChange}
                />
                {togglePassword === false ? (
                  <HiEye
                    className="absolute right-2 bottom-[10px] cursor-pointer text-purple-200"
                    size="18px"
                    onClick={handleTogglePassword}
                  />
                ) : (
                  <HiEyeSlash
                    className="absolute right-2 bottom-[10px] cursor-pointer text-purple-200"
                    size="18px"
                    onClick={handleTogglePassword}
                  />
                )}
              </div>
              <div className="w-full relative font-josefin mt-5">
                <label
                  className="text-base font-medium text-white-100"
                  htmlFor="password"
                >
                  Konfirmasi Kata Sandi
                </label>
                <input
                  type={toggleConfirmPassword === false ? "password" : "text"}
                  placeholder=""
                  autoComplete="off"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full bg-white-100 text-purple-900 py-1.5 pl-3 pr-8 text-base rounded-md border-0 focus:outline-none focus:ring-0"
                  onChange={handleConfirmPasswordChange}
                />
                {toggleConfirmPassword === false ? (
                  <HiEye
                    className="absolute right-2 bottom-[10px] cursor-pointer text-purple-200"
                    size="18px"
                    onClick={handleToggleConfirmPassword}
                  />
                ) : (
                  <HiEyeSlash
                    className="absolute right-2 bottom-[10px] cursor-pointer text-purple-200"
                    size="18px"
                    onClick={handleToggleConfirmPassword}
                  />
                )}
              </div>
              <button
                type="submit"
                className="bg-purple-900 mt-10 px-3 py-[8px] rounded-[20px] text-base font-medium font-josefin text-white-100"
              >
                Perbarui
              </button>
            </form>
          ) : (
            <div className="w-[700px] flex flex-col mt-4 mx-auto">
              <p className="w-full text-center text-white-100 text-lg">
                Jika Anda ingin menghapus akun, silahkan klik tombol “Hapus” di
                bawah ini.
              </p>
              <button
                type="button"
                className="mx-auto w-32 bg-red-900 mt-10 px-3 py-1.5 rounded-[20px] text-base font-medium font-josefin text-white-100"
                onClick={handleDeleteClick}
              >
                Hapus
              </button>
            </div>
          )}
          {isDeleteModalVisible && (
            <div className="z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg w-[450px]">
                <p className="text-lg text-center mb-6">
                  Apakah Anda yakin ingin menghapus akun?
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    type="button"
                    onClick={handleDeleteConfirm}
                    className="bg-red-900 px-8 py-1.5 rounded-[20px] text-base font-medium font-josefin text-white-100"
                  >
                    Yakin
                  </button>
                  <button
                    type="button"
                    onClick={handleDeleteCancel}
                    className="px-8 py-1.5 rounded-[20px] text-base font-medium font-josefin bg-gray-400 text-black "
                  >
                    Tidak
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
