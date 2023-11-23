"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { HiArrowLongLeft } from "react-icons/hi2";
import Navbar from "@/app/components/Navbar";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(true);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const router = useRouter();
  const userId = router.query?.id;

  const handleDeleteConfirm = async () => {
    try {
      if (!userId) {
        console.error("User ID not found in the URL");
        return;
      }

      const response = await axios.delete(
        `http://localhost:9090/user/users/${userId}`
      );

      if (response.status === 200) {
        alert("Akun berhasil dihapus");
        Cookies.remove("token");
        router.push("/");
      } else {
        alert("Terjadi kesalahan saat menghapus akun");
        console.log("Unexpected error: ", response.status, response.data);
      }
    } catch (error) {
      console.error("Error during account deletion: ", error);
    } finally {
      setDeleteModalVisible(false);
    }
  };

  const handleDeleteClick = () => {
    setDeleteModalVisible(true);
  };

  const handleDeleteCancel = () => {
    setDeleteModalVisible(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:9090/user/users/${userId}`,
        {
          name,
          email,
          password,
        }
      );

      if (response.status === 200) {
        alert("Data berhasil disimpan");
      } else {
        alert("Terjadi kesalahan");
        console.log("Unexpected error: ", response.status, response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-purple-200 relative">
      <Navbar />
      <div className="max-w-screen-xl mx-auto py-10 px-4">
        <Link
          href="/"
          className="w-fit flex items-center justify-start space-x-3"
        >
          <HiArrowLongLeft className="w-8 h-8 text-white-100" />
          <p className="text-base text-white-100">Kembali</p>
        </Link>
        <div className="mx-auto relative">
          <h1 className="text-[30px] text-center font-bold text-white-100 pt-5">
            Profile Dashboard
          </h1>
          <div className="flex justify-center space-x-5 py-8">
            <button
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
                  value={name}
                  className="w-full bg-white-100 text-purple-900 py-1.5 px-3 text-base rounded-md border-0 focus:outline-none focus:ring-0"
                  onChange={handleNameChange}
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
                  type="text"
                  placeholder=""
                  autoComplete="off"
                  id="email"
                  name="email"
                  value={email}
                  className="w-full bg-white-100 text-purple-900 py-1.5 px-3 text-base rounded-md border-0 focus:outline-none focus:ring-0"
                  onChange={handleEmailChange}
                />
              </div>
              <div className="w-full font-josefin mt-5">
                <label
                  className="text-base font-medium text-white-100"
                  htmlFor="email"
                >
                  Kata Sandi
                </label>
                <input
                  type="text"
                  placeholder=""
                  autoComplete="off"
                  id="password"
                  name="password"
                  value={password}
                  className="w-full bg-white-100 text-purple-900 py-1.5 px-3 text-base rounded-md border-0 focus:outline-none focus:ring-0"
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="w-full font-josefin mt-5">
                <label
                  className="text-base font-medium text-white-100"
                  htmlFor="email"
                >
                  Konfirmasi Kata Sandi
                </label>
                <input
                  type="text"
                  placeholder=""
                  autoComplete="off"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full bg-white-100 text-purple-900 py-1.5 px-3 text-base rounded-md border-0 focus:outline-none focus:ring-0"
                  onChange={handleConfirmPasswordChange}
                />
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
                type="submit"
                className="mx-auto w-32 bg-red-900 mt-10 px-3 py-1.5 rounded-[20px] text-base font-medium font-josefin text-white-100"
                onClick={handleDeleteClick}
              >
                Hapus
              </button>
            </div>
          )}
          {isDeleteModalVisible && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg w-[450px]">
                <p className="text-lg text-center mb-6">
                  Apakah Anda yakin ingin menghapus akun?
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={handleDeleteConfirm}
                    className="bg-red-900 px-8 py-1.5 rounded-[20px] text-base font-medium font-josefin text-white-100"
                  >
                    Yakin
                  </button>
                  <button
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
