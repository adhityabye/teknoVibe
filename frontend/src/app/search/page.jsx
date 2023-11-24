"use client";
import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";

export default function SearchEvent() {
  const [activeButton, setActiveButton] = useState(null);
  const [data, setData] = useState([]);

  const handleClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };
  useEffect(() => {
    fetch("http://localhost:9090/search")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center m-10">
        <h1 className="text-2xl font-bold mb-5">
          Temukan Event Menarik dan Daftarkan Diri Anda!
        </h1>
        <input
          type="text"
          placeholder="Cari event yang anda inginkan"
          className="p-2 border border-gray-200 rounded-md w-1/2"
        />
        <div className="flex mt-4">
          <button
            className={`font-bold filter-item px-4 py-2 border border-gray-200 rounded-full m-2 transform transition-all hover:-translate-y-1 duration-100 ${
              activeButton === 1 ? "bg-button-dark text-white" : ""
            }`}
            onClick={() => handleClick(1)}
          >
            Fakultas
          </button>

          <button
            className={`font-bold filter-item px-4 py-2 border border-gray-200 rounded-full m-2 transform transition-all hover:-translate-y-1 duration-100 ${
              activeButton === 2 ? "bg-button-dark text-white" : ""
            }`}
            onClick={() => handleClick(2)}
          >
            DTETI
          </button>

          <button
            className={`font-bold filter-item px-4 py-2 border border-gray-200 rounded-full m-2 transform transition-all hover:-translate-y-1 duration-100 ${
              activeButton === 3 ? "bg-button-dark text-white" : ""
            }`}
            onClick={() => handleClick(3)}
          >
            DTK
          </button>

          <button
            className={`font-bold filter-item px-4 py-2 border border-gray-200 rounded-full m-2 transform transition-all hover:-translate-y-1 duration-100 ${
              activeButton === 4 ? "bg-button-dark text-white" : ""
            }`}
            onClick={() => handleClick(4)}
          >
            DTMI
          </button>

          <button
            className={`font-bold filter-item px-4 py-2 border border-gray-200 rounded-full m-2 transform transition-all hover:-translate-y-1 duration-100 ${
              activeButton === 5 ? "bg-button-dark text-white" : ""
            }`}
            onClick={() => handleClick(5)}
          >
            DTGL
          </button>

          <button
            className={`font-bold filter-item px-4 py-2 border border-gray-200 rounded-full m-2 transform transition-all hover:-translate-y-1 duration-100 ${
              activeButton === 6 ? "bg-button-dark text-white" : ""
            }`}
            onClick={() => handleClick(6)}
          >
            DTNTF
          </button>

          <button
            className={`font-bold filter-item px-4 py-2 border border-gray-200 rounded-full m-2 transform transition-all hover:-translate-y-1 duration-100 ${
              activeButton === 7 ? "bg-button-dark text-white" : ""
            }`}
            onClick={() => handleClick(7)}
          >
            DTGD
          </button>

          <button
            className={`font-bold filter-item px-4 py-2 border border-gray-200 rounded-full m-2 transform transition-all hover:-translate-y-1 duration-100 ${
              activeButton === 8 ? "bg-button-dark text-white" : ""
            }`}
            onClick={() => handleClick(8)}
          >
            DTSL
          </button>

          <button
            className={`font-bold filter-item px-4 py-2 border border-gray-200 rounded-full m-2 transform transition-all hover:-translate-y-1 duration-100 ${
              activeButton === 9 ? "bg-button-dark text-white" : ""
            }`}
            onClick={() => handleClick(9)}
          >
            DTAP
          </button>
        </div>
      </div>

      {/*non template*/}
       
      <section class="searchEvent flex-wrap flex justify-center items-center mt-10">
        <div class="maincards flex space-x-8 ">
          {data.map((rows) => (
            <>
              <div
                key={rows._id}
                class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 drop-shadow-[0_20px_10px_rgba(0,0,0,0.25)] hover:shadow-2xl"
              >
                <img
                  class="h-40 object-cover rounded-xl"
                  src="./pewdstream.jpg"
                  alt=""
                />
                <div class="p-2">
                  <h2 class="font-bold text-lg mb-2 ">{rows.eventName}</h2>

                  <p class="text-sm text-gray-600">{rows.eventDescription}</p>
                </div>

                <div>
                  <div class="flex space-x-2"></div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
          }