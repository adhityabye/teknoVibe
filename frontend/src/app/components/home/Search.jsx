"use client";

import React, { useState, useEffect } from "react";

const LoadingIcon = () => {
  return (
    <div className="inset-0 flex flex-col items-center self-center justify-center">
      <div className="mb-10 ">
        <h1 className="text-xl text-black ">Loading...</h1>
      </div>
      <div className="loader">
        <div className="loader-circle loader-circle1" />
        <div className="loader-circle loader-circle2" />
        <div className="loader-circle loader-circle3" />
        <div className="loader-circle loader-circle4" />
      </div>
    </div>
  );
};

const CardLoadingIcon = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="animate-spin rounded-full border-t-8 border-gray-400 border-solid h-12 w-12"></div>
    </div>
  );
};

export default function Search() {
  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    setDataLoaded(false);
    let url = "https://tekno-vibe-be.vercel.app/search";
    // let url = "http://localhost:9090/search";
    console.log(url);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setDataLoaded(true);
      });

    console.log(data);
  }, []);

  useEffect(() => {
    loadImage();
  }, [data]);

  const loadImage = async () => {
    const newData = [...data];

    for (let i = 0; i < newData.length; i++) {
      if (newData[i].image) continue;
      // fetch(`http://localhost:9090/event/${newData[i]._id}/getImage`)
      fetch(`https://tekno-vibe-be.vercel.app/event/${newData[i]._id}/getImage`)
        .then((response) => response.json())
        .then((imageData) => {
          newData[i].image = imageData.data;
          setData(newData);
        });
    }
  };

  return (
    <section id="search">
      <div className="flex justify-center items-center">
        <h3 className="bg-purple-200 font-josefin px-7 pb-1.5 pt-2 text-[14px] text-white-100 font-semibold rounded-md text-center w-fit">
          CARI EVENT
        </h3>
      </div>
      <div className="flex justify-center items-center mt-5 mb-10">
        <h1 className="text-black-900 text-[26px] font-bold pb-4 font-inter">
          Cari Eventmu Di sini!
        </h1>
      </div>

      <div className="flex flex-col items-center mt-10">
        {!dataLoaded && <LoadingIcon />}
        {dataLoaded && data.length == 0 && <>No Event</>}
      </div>
      <section className="searchEvent flex-wrap flex justify-center items-center mt-5">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 auto-rows-max gap-8 cursor-pointer">
          {data.slice(0, 8).map((rows) => (
            <a href={`/eventDetails/${rows._id}`} key={rows._id}>
              <div
                key={rows._id}
                className=" w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 drop-shadow-[0_20px_10px_rgba(0,0,0,0.25)] hover:shadow-2xl hover:cursor-pointer"
              >
                <div className="relative h-40 w-full rounded-xl bg-gray-100">
                  {!rows.image && <CardLoadingIcon />}
                  {rows.image && (
                    <img
                      id="base64image"
                      src={rows.image}
                      alt="Uploaded Image"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  )}
                </div>
                <div className="p-2">
                  <h2 className="font-bold text-[19px]">{rows.eventName}</h2>
                  <p className="text-sm text-gray-600">
                    {rows.eventDescription.length > 20
                      ? `${rows.eventDescription.slice(0, 20)}....`
                      : rows.eventDescription}
                  </p>
                  <span className="bg-purple-200 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                    {rows.department}
                  </span>
                </div>
                <div>
                  <div className="flex space-x-2"></div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <div className="mt-6 mb-20 flex place-content-center">
        <a
          href={"/search"}
          className="text-purple-200 font-bold py-2 px-4 rounded flex items-center justify-center transition-transform duration-300 transform hover:translate-y-1 hover:cursor-pointer"
        >
          <span className="mr-2 hover:text-black">View More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0110 14z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
