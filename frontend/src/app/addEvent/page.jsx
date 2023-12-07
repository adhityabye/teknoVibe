"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import wave2 from "../../../public/assets/wave2.svg";
import pp from "../../../public/assets/profile-placeholder.svg";

const LoadingIcon = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="z-10 fixed inset-0 flex flex-col items-center justify-center">
    <div className="absolute inset-0 bg-black/30 backdrop-blur-md"/>
      <div className="mb-10 z-20">
        <h1 className="text-xl text-white ">
          Loading...
        </h1>     
      </div>
      <div className="loader">
        <div className="loader-circle loader-circle1"/>
        <div className="loader-circle loader-circle2"/>
        <div className="loader-circle loader-circle3"/>
        <div className="loader-circle loader-circle4"/>
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="z-10 fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md"/>
      <div className="flex flex-col shadow-2xl bg-white p-5 px-10 z-10 place-items-center rounded-lg ">
        <p className="font-bold text-purple-200 text-2xl mb-4">Notice</p>
        {children}
        <button
          className="mt-10 p-2 px-4 bg-purple-200 text-white rounded-2xl transition-transform duration-300 transform hover:bg-purple-900 hover:scale-110 active:scale-95"
          onClick={onClose}
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default function addEvent() {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [department, setDepartment] = useState("TEKNIK");
  const [eventProfileUrl, setEventProfileUrl] = useState("");
  const [date, setDate] = useState(Date.now());
  const [divisions, setDivisions] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [tnc, setTnc] = useState("");
  const [open, setOpen] = useState(true);

  const [errorEventName, seterrorEventName] = useState("");
  const [errorEventDescription, seterrorEventDescription] = useState("");
  const [errorDepartment, seterrorDepartment] = useState("");
  const [errorEventProfileUrl, seterrorEventProfileUrl] = useState("");
  const [errorDivisions, seterrorDivisions] = useState("");
  const [errorDeadlineDate, seterrorDeadlineDate] = useState("");
  const [errorTnc, seterrorTnc] = useState("");

  const [error, setError] = useState("");
  const [imageError, setImageError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adminId = JSON.parse(localStorage.getItem("user"))._id;
    console.log(adminId);

    let hasError = false;

    if (!eventName) {
      hasError = true;
      seterrorEventName("error");
    } else seterrorEventName("");

    if (!eventDescription) {
      hasError = true;
      seterrorEventDescription("error");
    } else seterrorEventDescription("");

    if (!department) {
      hasError = true;
      seterrorDepartment("error");
    } else seterrorDepartment("");

    if (!eventProfileUrl) {
      hasError = true;
      seterrorEventProfileUrl("error");
    } else seterrorEventProfileUrl("");

    if (!divisions) {
      hasError = true;
      seterrorDivisions("error");
    } else seterrorDivisions("");

    if (!deadlineDate) {
      hasError = true;
      seterrorDeadlineDate("error");
    } else seterrorDeadlineDate("");

    if (!tnc) {
      hasError = true;
      seterrorTnc("error");
    } else seterrorTnc("");

    if (hasError) {
      setError("All fields are required");
      return;
    }

    openLoading();

    try {
      const res = await fetch("https://tekno-vibe-be.vercel.app/event/add", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          eventName,
          eventDescription,
          department,
          date,
          divisions,
          deadlineDate,
          tnc,
          adminId,
          open,
      }),
    });

      console.log(
        JSON.stringify({
          eventName,
          eventDescription,
          department,
          date,
          divisions,
          deadlineDate,
          tnc,
          adminId,
          open,
        })
      );

    const { thisEventId, msg, success } = await res.json();
    console.log(thisEventId);

    const formData = new FormData();
    formData.append('image', selectedImage);
    console.log(formData);

    try {
      const response = await fetch(`https://tekno-vibe-be.vercel.app/event/${thisEventId}/uploadImage`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Image uploaded successfully');
      } else {
        console.error('Failed to upload image');
      }
    } catch (error) {
      setImageError('true');
      console.error('Error uploading image:', error);
    }

    if(!imageError){
      setError(msg);
      setSuccess(success);

      setEventName("");
      setEventDescription("");
      setDepartment("TEKNIK");
      setEventProfileUrl("");
      setDate(Date.now());
      setDivisions("");
      setDeadlineDate("");
      setTnc("");
      setOpen(true);
      setThisEventProfileUrl(pp);
      setImageError("");

      openModal();
    }
    closeLoading();
    } catch (err) {
      console.error(err);
      setError(err);
      console.log(error);
    }
  };

  const [hasEventProfileUrl, setHasEventProfileUrl] = useState(false);
  const [thisEventProfileUrl, setThisEventProfileUrl] = useState(pp);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    getBase64(e.target, (e) => {
      setEventProfileUrl(e);
    });
    console.log(thisEventProfileUrl);
    setHasEventProfileUrl(true);
    
    const file = e.target.files[0];
    console.log(file);
    setSelectedImage(file);
  };

  const getBase64 = (fileInput, callback) => {
    if (fileInput.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Image = event.target.result;
        callback(base64Image);
        setThisEventProfileUrl(base64Image);
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoadingOpen, setIsLoadingOpen] = useState(false);

  const openLoading = () => {
    setIsLoadingOpen(true);
  };

  const closeLoading = () => {
    setIsLoadingOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex flex-col justify-between w-full">
      <Navbar ajukan="true" />

      <div className="relative w-full">
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <p>Your data has been succesfully inserted</p>
        </Modal>
        <LoadingIcon isOpen={isLoadingOpen}/>
        <div className="absolute -z-10 bg-purple-200 w-screen h-[20rem] place-items-center block"/>

        <div className="absolute -z-10 w-screen h-screen place-items-center xl:mt-0 mt-0 py-60 xl:py-0">
          <Image src={wave2} alt="" className="w-screen items-center" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="max-w-screen-xl mx-auto p-4 py-10 text-white-100 mb-30 mt-10 bg-transparent">
            <h1 className="font-bold text-4xl py-10">About Your Event!</h1>

            <div className="flex flex-row items-center">
              <div className="grid w-3/12 lg:w-2/12 mx-3 mt-3">
                <label
                  className="hover:cursor-pointer rounded-full w-full"
                  htmlFor="files"
                >
                  <input
                    type="file"
                    className="mt-6 items-center justify-center rounded-xl border-none absolute hidden "
                    id="files"
                    accept="image/png, image/gif, image/jpeg"
                    // onChange={handleChangeee}
                    onChange={handleImageChange}
                  />
                  <div
                    type="circle"
                    className={`-z-10 relative w-full hover:cursor-pointer rounded-full ${
                      errorEventProfileUrl ? "p-0.5 bg-red-600" : "p-0 bg-white"
                    }`}
                  >
                    <Image
                      id="true"
                      src={thisEventProfileUrl}
                      width={30}
                      height={30}
                      alt=""
                      className={`object-cover h-full w-full cursor-pointer rounded-full border border-black ${
                        hasEventProfileUrl ? "hidden" : "block"
                      }`}
                    />
                    <Image
                      id="base64image"
                      src={thisEventProfileUrl}
                      height={30}
                      width={30}
                      alt=""
                      className={`object-cover h-full w-full cursor-pointer rounded-full border border-black ${
                        hasEventProfileUrl ? "block" : "hidden"
                      }`}
                    />
                  </div>
                </label>
              </div>

              <div className="basis-3/4 md:basis-2/6 ml-8 mr-">
                <p className="mb-2">Nama Event</p>
                <div className="w-full mb-6">
                  <input
                    type="text"
                    color="#EAEAEA"
                    placeholder="Nama Event"
                    onChange={(e) => setEventName(e.target.value)}
                    value={eventName}
                    className={`p-2 bg-gray-input border rounded w-full text-black ${
                      errorEventName
                        ? "border-red-600 border-2"
                        : "border-gray-200"
                    }`}
                  />
                </div>

                <p className="mb-2">Lingkup Event</p>
                <div className="w-full mb-6">
                  <select
                    onChange={(e) => setDepartment(e.target.value)}
                    value={department}
                    className={`p-2 bg-gray-input border rounded w-full text-black cursor-pointer ${
                      errorDepartment
                        ? "border-red-600 border-2"
                        : "border-gray-200"
                    } `}
                  >
                    <option>TEKNIK</option>
                    <option>DTETI</option>
                    <option>DTMI</option>
                    <option>DTK</option>
                    <option>DTAP</option>
                    <option>DTGD</option>
                    <option>DTSL</option>
                    <option>DTGL</option>
                    <option>DTNTF</option>
                  </select>
                </div>
              </div>
            </div>

            <p className="m-3 mt-5">Deskripsi Event</p>
            <div className="w-full px-3  ">
              <textarea
                type="text"
                placeholder="Deskripsi"
                onChange={(e) => setEventDescription(e.target.value)}
                value={eventDescription}
                className={`p-2 bg-gray-input border rounded w-full text-black h-40 ${
                  errorEventDescription
                    ? "border-red-600 border-2"
                    : "border-gray-200"
                }`}
              />
            </div>

            <div className="w-full mt-60 mb-20 text-black">
              <h1 className="font-bold text-4xl">
                About Your Open Recruitment!
              </h1>

              <div className="w-1/2 lg:w-1/4 mt-8">
                <p className="mb-2">Penutupan Open Recruitment</p>
                <div className="w-full mb-6 cursor-pointer">
                  <input
                    type="date"
                    datatype="Date"
                    onChange={(e) => setDeadlineDate(e.target.value)}
                    value={deadlineDate}
                    className={`p-2 bg-gray-input border rounded w-2/3 text-black hover:cursor-pointer ${
                      errorDeadlineDate
                        ? "border-red-600 border-2"
                        : "border-gray-200"
                    }`}
                    placeholder="hello"
                  />
                </div>
              </div>

              <div className="w-1/2">
                <p className="mb-2">Pilihan Divisi Terbuka</p>
                <div className="w-full mb-6">
                  <input
                    type="text"
                    color="#EAEAEA"
                    placeholder="Divisi1, Divisi2, Divisi3, ..."
                    onChange={(e) => setDivisions(e.target.value)}
                    value={divisions}
                    className={`p-2 bg-gray-input border rounded w-full text-black ${
                      errorDivisions
                        ? "border-red-600 border-2"
                        : "border-gray-200"
                    }`}
                  />
                </div>
              </div>

              <p className="mb-3">Syarat dan Ketentuan</p>
              <div className="w-full mt-25 ">
                <textarea
                  type="text"
                  placeholder="Syarat dan Ketentuan"
                  onChange={(e) => setTnc(e.target.value)}
                  value={tnc}
                  className={`p-2 bg-gray-input border rounded w-full h-60 ${
                    errorTnc ? "border-red-600 border-2" : "border-gray-200"
                  }`}
                />
              </div>

              <div className="flex flex-col w-full mb-10 mt-5 justify-end items-end">
                {error && (
                  <p className={"text-red-600 text-lb mb-2"}>
                    {error.toString()}
                  </p>
                )}

                <button className="bg-button-dark text-white py-2 px-4 rounded hover:bg-purple-200 transition-transform duration-300 transform hover:scale-110 active:scale-95">
                  Ajukan Event
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
}
